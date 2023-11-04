import { useEffect, useState } from "react";
import RecordItem from "./recordItem";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

import "react-tabs/style/react-tabs.css";

function Records() {
  type Record = {
    hash: string;
    from: string;
    message: string;
    ammount: number;
    latitude: string;
    longitude: string;
    timestamp: string;
  };
  const demoData: Record[] = [
    {
      hash: Math.random().toString(32).substring(2),
      from: "ponさん",
      message: "ありがとう",
      ammount: 0,
      latitude: "000",
      longitude: "001",
      timestamp: "14:53",
    },
    {
      hash: Math.random().toString(32).substring(2),

      from: "ponさん",
      message: "ありがとう",
      ammount: 0,
      latitude: "000",
      longitude: "001",
      timestamp: "14:53",
    },
    {
      hash: Math.random().toString(32).substring(2),

      from: "ponさん",
      message: "ありがとう",
      ammount: 0,
      latitude: "000",
      longitude: "001",
      timestamp: "14:53",
    },
    {
      hash: Math.random().toString(32).substring(2),

      from: "ponさん",
      message: "ありがとう",
      ammount: 0,
      latitude: "000",
      longitude: "001",
      timestamp: "14:53",
    },
  ];
  const records = demoData;

  useEffect(() => {}, []);
  return (
    <div>
      {
        <ul>
          {records.map((record) => (
            <li key={record.hash}>
              <RecordItem
                from={record.from}
                message={record.message}
                ammount={record.ammount}
                timestamp={record.timestamp}
              />
            </li>
          ))}
        </ul>
      }
    </div>
  );
}
export default Records;
