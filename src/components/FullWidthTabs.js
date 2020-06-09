import React from "react";
import { Tabs } from "antd";
import LocalCafe from "@material-ui/icons/LocalCafe";
import Restaurant from "@material-ui/icons/Restaurant";
import SettingsApplicationsIcon from "@material-ui/icons/SettingsApplications";
import SearchIcon from "@material-ui/icons/Search";
import BeerList from "./BeerList";
import "antd/dist/antd.css"; // or 'antd/dist/antd.less'
const { TabPane } = Tabs;

export default function FullWidthTabs() {
  return (
    <Tabs defaultActiveKey="1">
      <TabPane 
        tab={
          <span>
            <LocalCafe />
          </span>
        }
        key="1"
      >
        <Tabs defaultActiveKey="1" style={{backgroundColor: '#616161'}}>
          <TabPane tab="ALL" key="4">
            <BeerList />
          </TabPane>
          <TabPane tab="PIZZA" key="5">
            Tab 2
          </TabPane>
          <TabPane tab="STEAK" key="6">
            Tab 3
          </TabPane>
        </Tabs>
      </TabPane>
      <TabPane
        tab={
          <span>
            <Restaurant />
          </span>
        }
        key="2"
      >
        Tab 2
      </TabPane>
      <TabPane
        tab={
          <span>
            <SettingsApplicationsIcon />
          </span>
        }
        key="3"
      >
        Tab 3
      </TabPane>
      <TabPane
        tab={
          <span>
            <SearchIcon />
          </span>
        }
        key="4"
      >
        Tab 4
      </TabPane>
    </Tabs>
  );
}
