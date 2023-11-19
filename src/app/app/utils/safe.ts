import { ethers } from 'ethers';
import {
  PRIVATE_KEY,
  PROVIDER_URL,
  CONTRACT_ADDRESS,
} from './config';
import {
  EthAdapter,
  MetaTransactionData,
  OperationType,
} from '@safe-global/safe-core-sdk-types';
import crypto from 'crypto';
import Safe, {
  EthersAdapter,
  SafeAccountConfig,
  SafeFactory,
} from 'zkatana-gelato-protocol-kit';
import { GelatoRelayPack } from 'zkatana-gelato-relay-kit';
import ContractInfo from './abi.json';

const encryptSha256 = (value: string) => {
  console.log(`value: ${value}`);
  const hash = crypto.createHash('sha256').update(value, 'utf8').digest('hex');
  const decimalHash = String(BigInt(`0x${hash}`));
  return decimalHash;
};

const common = async (salt: string) => {
  const RPC_URL = PROVIDER_URL;
  const provider = new ethers.providers.JsonRpcProvider(RPC_URL);
  console.log('Network: ', await provider.getNetwork());
  const signer = new ethers.Wallet(PRIVATE_KEY, provider);
  const ethAdapterOwner = new EthersAdapter({
    ethers,
    signerOrProvider: signer,
  }) as EthAdapter;
  const safeFactory = await SafeFactory.create({ ethAdapter: ethAdapterOwner });
  const safeAccountConfig: SafeAccountConfig = {
    owners: [await signer.getAddress()],
    threshold: 1,
  };

  const saltNonce = encryptSha256(salt);
  console.log(`saltNonce: ${saltNonce}`);
  return {
    safeFactory: safeFactory,
    safeAccountConfig: safeAccountConfig,
    saltNonce: saltNonce,
    ethAdapterOwner: ethAdapterOwner,
    signer: signer,
  };
};

const createSafeWallet = async (salt: string) => {
  const { safeFactory, safeAccountConfig, saltNonce } = await common(salt);

  const safeSdk = await safeFactory.deploySafe({
    safeAccountConfig,
    saltNonce,
  });

  const safeAddress = await safeSdk.getAddress();
  console.log(`safeAddress: ${safeAddress}`);

  return safeAddress;
};

const getSafeWallet = async (salt: string) => {
  const { safeFactory, safeAccountConfig, saltNonce, ethAdapterOwner, signer } =
    await common(salt);

  const safeWalletAddress = await safeFactory.predictSafeAddress(
    safeAccountConfig,
    saltNonce
  );

  const safeSDK = await Safe.create({
    ethAdapter: ethAdapterOwner,
    safeAddress: safeWalletAddress,
  });

  console.log(`safeSDK address: ${await safeSDK.getAddress()}`);

  return { safeSDK, signer, ethAdapterOwner };
};

export const createAAWallet = async (licenseNumber: string) => {
  console.log(`licenseNumber: ${licenseNumber}`);
  let aaWalletAddress = '';
  try {
    aaWalletAddress = await createSafeWallet(licenseNumber);
  } catch (err) {
    console.log(`err: ${err}`);
    const { safeSDK } = await getSafeWallet(licenseNumber);
    aaWalletAddress = await safeSDK.getAddress();
  }
  console.log(`aaWalletAddress: ${aaWalletAddress}`);
  return aaWalletAddress;
};

export const sendToken = async (
    salt: string,
    to: string,
  message: string,
  longitude: string,
    latitude: string
) => {
  const { safeSDK, signer } = await getSafeWallet(salt);
  const tokenContract = new ethers.Contract(
    CONTRACT_ADDRESS,
    ContractInfo.abi,
    signer
  );
  console.log(`tokenContract: ${tokenContract}`);
  const aaWalletAddress: string = await safeSDK.getAddress();
  console.log(`aaWalletAddress: ${aaWalletAddress}`);

  const safeTransactionData: MetaTransactionData[] = [
    {
      to: CONTRACT_ADDRESS,
      data: tokenContract.interface.encodeFunctionData('mint', [
        aaWalletAddress,
        to,
        1,
        longitude,
        latitude,
        message,
      ]),
      value: '0',
      operation: OperationType.Call,
    },
  ];

  console.log(`safeTransactionData: ${JSON.stringify(safeTransactionData)}`);

  const relayKit = new GelatoRelayPack();

  const safeTransaction = await relayKit.createRelayedTransaction({
    safe: safeSDK,
    transactions: safeTransactionData,
  });

  const signedSafeTransaction = await safeSDK.signTransaction(safeTransaction);

  console.log(
    `signedSafeTransaction: ${JSON.stringify(signedSafeTransaction)}`
  );

  const response = await relayKit.executeRelayTransaction(
    signedSafeTransaction,
    safeSDK
  );

  console.log(
    `Relay Transaction Task ID: https://relay.gelato.digital/tasks/status/${response.taskId}`
  );

  console.log(`response: ${JSON.stringify(response)}`);
  return response.taskId
};
