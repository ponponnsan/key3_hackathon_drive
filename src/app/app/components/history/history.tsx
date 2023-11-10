"use client";

import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

import "./react-tabs.css";
import Records from "../recordItem/records";
import classes from "../../page.module.css";
import resets from "../../components/recordItem/_resets.module.css";
import SendToken from "../sendtoken/SendToken";

export default function Main() {
  return (

    <Tabs allowFullScreen={true}>
      <TabList>
        <Tab>全て</Tab>
        <Tab>贈った</Tab>
        <Tab>受け取った</Tab>
      </TabList>

      <TabPanel>
        <div className={`${resets.storybrainResets} ${classes.root}`}>
          <Records />{" "}
        </div>
      </TabPanel>
      <TabPanel>
        <SendToken />
      </TabPanel>
      <TabPanel>
        <h1>Contactです</h1>
      </TabPanel>
    </Tabs>
  );
}
