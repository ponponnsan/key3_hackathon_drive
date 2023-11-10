import { useEffect, useState } from "react";

export type BraGoTransfer = {
  hash: string;
  from: string;
  message: string;
  ammount: number;
  latitude: string;
  longitude: string;
  timestamp: string;
};

export const useBraGoTransferRecords = () => {
  const [isLoading, setIsLoading] = useState(true);

  const braGoTransferRecords: BraGoTransfer[] = [
    {
      hash: Math.random().toString(32).substring(2),
      from: "ponさん",
      message: "ありがとう1",
      ammount: 0,
      latitude: "35.6894",
      longitude: "139.6917",
      timestamp: "2023-11-05 14:53",
    },
    {
      hash: Math.random().toString(32).substring(2),

      from: "ponさん",
      message: "ありがとう2",
      ammount: 0,
      latitude: "000",
      longitude: "001",
      timestamp: "2023-11-05 14:53",
    },
    {
      hash: Math.random().toString(32).substring(2),

      from: "ponさん",
      message: "ありがとう3",
      ammount: 0,
      latitude: "000",
      longitude: "001",
      timestamp: "2023-11-04 14:53",
    },
    {
      hash: Math.random().toString(32).substring(2),

      from: "ponさん",
      message: "ありがとう4",
      ammount: 0,
      latitude: "000",
      longitude: "001",
      timestamp: "2023-11-03 14:53",
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
