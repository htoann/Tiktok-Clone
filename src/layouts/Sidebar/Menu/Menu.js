import React from "react";
import styles from "./Menu.module.scss";
import { BsCameraVideo, BsPeople } from "react-icons/bs";
import { FaHome } from "react-icons/fa";
import { config } from "~/config";
import WrapperAuth from "~/components/WrapperAuth";
import Tab from "./Tab";

function Menu() {
  return (
    <nav className={styles.sidebar_tabs}>
      <Tab to={config.routes.home} Icon={FaHome}>
        For you
      </Tab>
      <WrapperAuth>
        <Tab to={config.routes.following} Icon={BsPeople}>
          Following
        </Tab>
      </WrapperAuth>
      <Tab to={config.routes.live} Icon={BsCameraVideo}>
        Live
      </Tab>
    </nav>
  );
}

export default Menu;
