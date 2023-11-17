import { useEffect, useState } from "react";

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
    setIsLoading(false);
  }, []);
  return {
    braGoTransferRecords,
    isLoading,
  };
};
