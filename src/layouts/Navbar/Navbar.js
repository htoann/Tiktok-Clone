import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  FaRegPaperPlane,
  FaRegCommentAlt,
  FaPlus,
  FaRegMoon,
} from "react-icons/fa";
import { IoEllipsisVertical } from "react-icons/io5";
import Logo from "~/assets/images/logo.svg";
import LogoDark from "~/assets/images/logo_dark.svg";

import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";

import Avatar from "~/assets/images/Avatar.jpeg";
import Button from "~/components/Button/Button";
import Menu from "~/components/Popper/Menu/Menu";
import Image from "~/components/Image/Image";
import Search from "~/components/Search";
import styles from "./Navbar.module.scss";
import { MENU_ITEMS_1, MENU_ITEMS_2 } from "~/data/dataMenu";
import { config } from "~/config";
import { BsSun } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "~/features/user/userSlice";

function Navbar() {
  const { user } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const [theme, setTheme] = useState(localStorage.getItem("theme"));

  useEffect(() => {
    const element = document.body;
    if (theme === "dark") {
      element.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      element.classList.remove("dark");
      localStorage.removeItem("theme", "dark");
    }
  });

  const handleMenuChange = (menuItem) => {
    switch (menuItem.type) {
      case "logout":
        dispatch(logout());
        break;

      default:
        break;
    }
  };

  return (
    <header className={styles.navbar}>
      <div className={styles.navbar_wrapper}>
        <Link to={config.routes.home} className={styles.logo}>
          <img src={theme === "dark" ? LogoDark : Logo} alt="Tiktok" />
        </Link>

        <Search />

        <div className={styles.navbar_right}>
          <Button
            className={styles.upload_icon}
            text
            leftIcon={<FaPlus />}
            to={config.routes.upload}
          >
            Upload
          </Button>

          {theme === "dark" ? (
            <div
              className={styles.menu_action}
              onClick={() => setTheme("default")}
            >
              <BsSun />
            </div>
          ) : (
            <div
              className={styles.menu_action}
              onClick={() => setTheme("dark")}
            >
              <FaRegMoon />
            </div>
          )}

          {user ? (
            <>
              <Link to={config.routes.messages}>
                <Tippy content="Messages" placement="bottom" theme="gradient">
                  <div className={styles.menu_action}>
                    <FaRegPaperPlane />
                  </div>
                </Tippy>
              </Link>

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
              <Link to={config.routes.login}>
                <Button primary>Log in</Button>
              </Link>

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
