import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import styles from "./Menu.module.scss";
import { BsCameraVideo, BsPeople } from "react-icons/bs";
import { FaHome } from "react-icons/fa";
import { config } from "~/config";
import WrapperAuth from "~/components/WrapperAuth";
import Tab from "./Tab";

function Menu() {
  const [isActive, setIsActive] = useState("/");
  const location = useLocation();

  useEffect(() => {
    setIsActive(location.pathname);
  }, [location.pathname]);

  return (
    <nav className={styles.sidebar_tabs}>
      <Tab to={config.routes.home} Icon={FaHome}>
        For you
      </Tab>
      <WrapperAuth>
        <Tab to={config.routes.following} Icon={BsPeople}>
          Following
        </Tab>
      </div>
      <hr className={styles.hr} />
    </>
  );
}

export default Menu;
