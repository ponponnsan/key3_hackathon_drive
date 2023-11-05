import { SmartAccountSigner } from "@alchemy/aa-core";
import {
  OWNER_PUBLIC_KEY,
  PROJECT_ID,
  ZERO_DEV_CUSTODIAL_KEY_ID,
  ZERO_DEV_CUSTODIAL_PRIVATE_KEY,
  ZERO_DEV_CUSTODIAL_PUBLIC_KEY,
} from "@common/config";
import { getCustodialOwner } from "@utils/aa/getCustodialOwner";
import { ECDSAProvider } from "@zerodev/sdk";
import { Address } from "viem";
import { walletClient } from "@utils/viem";

const getOwner = async (salt: string): Promise<SmartAccountSigner> => {
  const owner = (await getCustodialOwner(salt, {
    privateKey: ZERO_DEV_CUSTODIAL_PRIVATE_KEY,
    publicKey: ZERO_DEV_CUSTODIAL_PUBLIC_KEY,
    keyId: ZERO_DEV_CUSTODIAL_KEY_ID,
  })) as SmartAccountSigner;
  return owner;
};

export const createContractWallet = async (
  salt: string
): Promise<ECDSAProvider> => {
  const owner = await getOwner(salt);
  const ecdsaProvider = await ECDSAProvider.init({
    projectId: PROJECT_ID,
    owner,
  });
  const hash = await walletClient.sendTransaction({
    to: await ecdsaProvider.getAddress(),
    value: BigInt(10),
    nonce: Number(salt),
  });
  console.log(`hash: ${hash}`);
  return ecdsaProvider;
};

export const sendToken = async (ecdsaProvider: ECDSAProvider) => {
  const { hash } = await ecdsaProvider.sendUserOperation({
    target: OWNER_PUBLIC_KEY,
    data: "0x",
    value: BigInt(1),
    // paymasterConfig: {
    //   OWNER_PUBLIC_KEY
    // },
  });
  await ecdsaProvider.waitForUserOperationTransaction(hash as Address);

  console.log(`hash: ${hash}`);
};
