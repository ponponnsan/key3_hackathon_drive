"use client";

import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

import "react-tabs/style/react-tabs.css";
import Records from "../recordItem/records";
import classes from "../../page.module.css";
import resets from "../../components/recordItem/_resets.module.css";

export default function History() {
  return (
    <Tabs>
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
        <h1>Aboutです</h1>
      </TabPanel>
      <TabPanel>
        <h1>Contactです</h1>
      </TabPanel>
    </Tabs>
  );
}
