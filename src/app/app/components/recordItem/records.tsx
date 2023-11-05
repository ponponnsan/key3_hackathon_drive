import { useEffect, useRef, useState } from "react";
import RecordItem from "./recordItem";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

import "react-tabs/style/react-tabs.css";
import {
  BraGoTransfer,
  useBraGoTransferRecords,
} from "@/app/hooks/useBraGoTransferRecords";

function Records() {
  const { braGoTransferRecords, isLoading } = useBraGoTransferRecords();
  const [daylyRecords, setDaylyRecords] = useState<BraGoTransfer[][]>([]);

  const stopper = useRef(false);
  const today = new Date();
  const yesterday = new Date(new Date(today).setDate(today.getDate() - 1));

  useEffect(() => {
    if (isLoading) return;
    if (!stopper.current) {
      stopper.current = true;

      const map = new Map<string, BraGoTransfer[]>();

      braGoTransferRecords
        .sort((a, b) => Date.parse(b.timestamp) - Date.parse(a.timestamp))
        .map((record) => {
          const date = new Date(record.timestamp);
          let arr: BraGoTransfer[] = map.get(
            date.toDateString()
          ) as BraGoTransfer[];
          if (!arr) arr = [];

          map.set(date.toDateString(), [...arr, record]);
        });
      let arr: BraGoTransfer[][] = [];
      map.forEach((value, key) => {
        arr.push(value);
      });
      setDaylyRecords(arr);
    }
  }, [braGoTransferRecords, isLoading]);
  if (isLoading) {
    return <>Loading...</>;
  } else {
    return (
      <div>
        {
          <>
            <ul>
              {daylyRecords.map((arr1, i) => {
                return (
                  <li key={`${arr1[0].hash}${i}`}>
                    {new Date(arr1[0].timestamp).toDateString() ===
                    today.toDateString()
                      ? "今日"
                      : new Date(arr1[0].timestamp).toDateString() ===
                        yesterday.toDateString()
                      ? "昨日"
                      : new Date(arr1[0].timestamp).toDateString()}
                    <ul>
                      {arr1.map((record) => {
                        return (
                          <li key={`${record.hash}${i}`}>
                            <RecordItem
                              from={record.from}
                              message={record.message}
                              ammount={record.ammount}
                              timestamp={record.timestamp}
                            />
                          </li>
                        );
                      })}
                    </ul>
                  </li>
                );
              })}
            </ul>
          </>
        }
      </div>
    );
  }
}
export default Records;
