import { useEffect, useState } from "react";
import { useContract } from "./useContract"
import { useAddress } from "./useAddress";
import { ethers } from "ethers";

export type BraGoTransfer = {
  hash: string;
  name: string;
  message: string;
  ammount: number;
  latitude: string;
  longitude: string;
  timestamp: string;
  issend: boolean;
};

export const useBraGoTransferRecords = () => {
  const [isLoading, setIsLoading] = useState(true);
  const { contract, isLoading: isContractLoading } = useContract();
  const { address, isLoading: isAddressLoading } = useAddress();
  const [transferLogs, setTransferLogs] = useState<BraGoTransfer[]>([]);

  useEffect(() => {
    if (isContractLoading || isAddressLoading) {
      return;
    }
    const rpcUrl =
      `https://rpc.zkatana.gelato.digital/`;
    const provider = new ethers.providers.JsonRpcProvider(rpcUrl);


    (async () => {
      const events = await contract!.queryFilter(
        contract!.filters.BraGoTransfer(null, null, null, null, null, null)
      );
      const transferLogs: BraGoTransfer[] = [];
      for (const log of events) {
        // Eventのargsがない場合はスキップ
        if (!log.args) continue;

        const blochHash = log.blockHash;
        const [from, to, amount, latitude, longitude, message] = log.args;
        let issend: boolean | undefined = undefined;
        if (from.toString() === address?.toString()) {
          issend = false;
        } else if (to.toString() === address?.toString()) {
          issend = true;
        }
        let block = await provider.getBlock(log.blockNumber);

        if (issend != undefined) {
          transferLogs.push({
            hash: blochHash, name: "test", message: message, ammount: amount, latitude: latitude,
            longitude: longitude, issend: issend, timestamp: (new Date(block.timestamp * 1000)).toDateString()
          })
        }
        setTransferLogs([...transferLogs]);
        setIsLoading(false);
      }
    })()
  }, [isContractLoading, isAddressLoading]);

  return {
    transferLogs,
    isLoading,
  };
};
