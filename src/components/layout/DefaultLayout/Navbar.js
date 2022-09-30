import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  FaSearch,
  FaRegPaperPlane,
  FaRegCommentAlt,
  FaPlus,
} from "react-icons/fa";
import { IoEllipsisVertical } from "react-icons/io5";
import Logo from "~/assets/images/logo.svg";

import HeadlessTippy from "@tippyjs/react/headless";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";

import PopperWrapper from "~/components/Popper/PopperWrapper";
import AccountItem from "~/components/AccountItem";
import Avatar from "~/assets/images/Avatar.jpeg";
import Button from "~/components/Button";
import Menu from "~/components/Popper/Menu/Menu";
import styles from "~/static/sass/layout/navbar.module.scss";
import { MENU_ITEMS_1, MENU_ITEMS_2 } from "~/utils/dataMenu";
import { handleDarkTheme } from "~/utils/handleDarkTheme";

function Navbar() {
  const [searchResult, setSearchResult] = useState([]);
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
  };

  return (
    <header className={styles.navbar}>
      <div className={styles.navbar_wrapper}>
        <Link to="/" className={styles.logo}>
          <img src={Logo} alt="Tiktok" />
        </Link>

        <HeadlessTippy
          visible={searchResult.length > 0}
          interactive
          render={(attrs) => (
            <div className={styles.search_results} tabIndex="-1" {...attrs}>
              <PopperWrapper>
                <div className={styles.search_title}>Account</div>
                <AccountItem />
                <AccountItem />
              </PopperWrapper>
            </div>
          )}
        >
          <form className={styles.navbar_search}>
            <input
              className={styles.navbar_search_input}
              type="text"
              placeholder="Search accounts and videos"
            />
            <span className={styles.navbar_search_line}></span>
            <button className={styles.navbar_search_icon}>
              <FaSearch />
            </button>
          </form>
        </HeadlessTippy>

        <div className={styles.navbar_right}>
          <Button text leftIcon={<FaPlus />} to="/upload">
            Upload
          </Button>
          {user ? (
            <>
              <Tippy content="Upload Video" placement="bottom" theme="gradient">
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
                <img
                  className={styles.dropdown_icon}
                  src={Avatar}
                  alt=""
                  width={32}
                  height={32}
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
