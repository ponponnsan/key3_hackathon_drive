"use client";

import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

import "./react-tabs.css";
import Records, { RecordsCategory } from "../recordItem/records";
import classes from "../../page.module.css";
import resets from "../../components/recordItem/_resets.module.css";
import SendToken from "../sendtoken/SendToken";

export default function History() {
  return (

    <Tabs allowFullScreen={true}>
      <TabList>
        <Tab>全て</Tab>
        <Tab>送った</Tab>
        <Tab>受け取った</Tab>
      </TabList>

      <TabPanel>
        <Records category={RecordsCategory.ALL} />{" "}
      </TabPanel>
      <TabPanel>
        <Records category={RecordsCategory.Recv} />{" "}
      </TabPanel>
      <TabPanel>
        <Records category={RecordsCategory.Send} />{" "}
      </TabPanel>
    </Tabs>
  );
}
