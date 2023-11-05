import { useEffect, useState } from "react";
import RecordItem from "./recordItem";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

import "react-tabs/style/react-tabs.css";
import { useBraGoTransferRecords } from "@/app/hooks/useBraGoTransferRecords";

function Records() {
  const { braGoTransferRecords, isLoading } = useBraGoTransferRecords();

  useEffect(() => {}, []);
  if (isLoading) {
    return <>Loading...</>;
  } else {
    return (
      <div>
        {
          <ul>
            {braGoTransferRecords
              .sort((a, b) => Date.parse(b.timestamp) - Date.parse(a.timestamp))
              .map((record) => (
                <>
                  {/* {console.log(new Date(record.timestamp))} */}
                  <li key={record.hash}>
                    <RecordItem
                      from={record.from}
                      message={record.message}
                      ammount={record.ammount}
                      timestamp={record.timestamp}
                    />
                  </li>
                </>
              ))}
          </ul>
        }
      </div>
    );
  }
}
export default Records;
