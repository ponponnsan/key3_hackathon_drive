import { useEffect, useState } from "react";
import { useContract } from "./useContract"
import { useAddress } from "./useAddress";

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

  const braGoTransferRecords: BraGoTransfer[] = [
    {
      hash: Math.random().toString(32).substring(2),
      name: "pon",
      message: "ありがとう1",
      ammount: 1,
      latitude: "35.6894",
      longitude: "139.6917",
      timestamp: "2023-11-05 14:53",
      issend: false
    },
    {
      hash: Math.random().toString(32).substring(2),

      name: "pon",
      message: "ありがとう2",
      ammount: 1,
      latitude: "000",
      longitude: "001",
      timestamp: "2023-11-05 14:53",
      issend: false
    },
    {
      hash: Math.random().toString(32).substring(2),

      name: "pon",
      message: "ありがとう3",
      ammount: 1,
      latitude: "000",
      longitude: "001",
      timestamp: "2023-11-04 14:53",
      issend: false
    },
    {
      hash: Math.random().toString(32).substring(2),

      name: "pon",
      message: "ありがとう4",
      ammount: 1,
      latitude: "000",
      longitude: "001",
      timestamp: "2023-11-03 14:53",
      issend: false
    },
    {
      hash: Math.random().toString(32).substring(2),

      name: "cardene",
      message: "ありがとう4",
      ammount: 1,
      latitude: "000",
      longitude: "001",
      timestamp: "2023-11-17 14:53",
      issend: true
    },

  ];

  useEffect(() => {
    console.log('isContractLoading ', isContractLoading)
    console.log('isAddressLoading ', isAddressLoading)
    if (isContractLoading || isAddressLoading) {
      return;
    }


    (async () => {
      const events = await contract!.queryFilter(
        contract!.filters.BraGoTransfer(null, null, null, null, null, null)
      );
      console.log(address)
      console.log(events)
      const transferLogs: BraGoTransfer[] = [];
      for (const log of events) {
        // Eventのargsがない場合はスキップ
        if (!log.args) continue;

        // argsを分割代入
        const blochHash = log.blockHash;
        const [from, to, amount, longitude, latitude, message] = log.args;
        console.log(event)
        let issend: boolean | undefined = undefined;
        if (from.toString() === address?.toString()) {
          issend = false;
        } else if (to.toString() === address?.toString()) {
          issend = true;
        }



        if (issend != undefined) {
          transferLogs.push({
            hash: blochHash, name: "", message: message, ammount: amount, latitude: latitude, longitude: longitude, issend: issend, timestamp: ""
          })

        }

      }



    })()

    setIsLoading(false);
  }, [isContractLoading, isAddressLoading]);

  return {
    transferLogs,
    isLoading,
  };
};
