import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaRegPaperPlane, FaRegCommentAlt, FaPlus } from "react-icons/fa";
import { IoEllipsisVertical } from "react-icons/io5";
import Logo from "~/assets/images/logo.svg";

import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";

import Avatar from "~/assets/images/Avatar.jpeg";
import Button from "~/components/Button/Button";
import Menu from "~/components/Popper/Menu/Menu";
import Image from "~/components/Image/Image";
import Search from "~/components/Search";
import styles from "./Navbar.module.scss";
import { handleDarkTheme } from "~/utils/handleDarkTheme";
import { MENU_ITEMS_1, MENU_ITEMS_2 } from "~/utils/dataMenu";
import { config } from "~/config";

function Navbar() {
  const [user, setUser] = useState([]);

  const handleLogout = () => {
    setUser("");
  };

  const handleLogin = () => {
    setUser([]);
  };

  useEffect(() => {
    let element = document.body;
    const currentTheme = localStorage.getItem("theme");
    if (currentTheme === "dark") {
      element.classList.add("dark");
    } else {
      element.classList.remove("dark");
    }
  });

  const handleMenuChange = (menuItem) => {
    switch (menuItem.type) {
      case "logout":
        handleLogout();
        break;

      case "darktheme":
        handleDarkTheme();
        break;

      default:
        break;
    }

    // Handle to profile
  };

  return (
    <header className={styles.navbar}>
      <div className={styles.navbar_wrapper}>
        <Link to={config.routes.home} className={styles.logo}>
          <img src={Logo} alt="Tiktok" />
        </Link>

        <Search />

        <div className={styles.navbar_right}>
          <Button text leftIcon={<FaPlus />} to={config.routes.upload}>
            Upload
          </Button>
          {user ? (
            <>
              <Tippy content="Messages" placement="bottom" theme="gradient">
                <div className={styles.menu_action}>
                  <FaRegPaperPlane />
                </div>
              </Tippy>

              <Tippy content="Inbox" placement="bottom">
                <div className={styles.menu_action}>
                  <FaRegCommentAlt />
                </div>
              </Tippy>

              <Menu items={MENU_ITEMS_2} onChange={handleMenuChange}>
                <Image
                  className={styles.dropdown_avatar}
                  src={Avatar}
                  alt="Avatar"
                />
              </Menu>
            </>
          ) : (
            <>
              <Button primary onClick={handleLogin}>
                Log in
              </Button>

              <Menu items={MENU_ITEMS_1} onChange={handleMenuChange}>
                <div>
                  <IoEllipsisVertical className={styles.dropdown_icon} />
                </div>
              </Menu>
            </>
          )}
        </div>
      </div>
    </header>
  );
}

export default Navbar;
