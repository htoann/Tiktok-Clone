import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  FaRegPaperPlane,
  FaRegCommentAlt,
  FaPlus,
  FaRegMoon,
} from "react-icons/fa";
import { BsSun } from "react-icons/bs";
import { IoEllipsisVertical } from "react-icons/io5";
import Logo from "~/assets/images/logo.svg";
import LogoDark from "~/assets/images/logo_dark.svg";

import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";

import Avatar from "~/assets/images/Avatar.jpeg";
import Button from "~/components/Core/Button";
import Menu from "~/components/Popper/Menu";
import Image from "~/components/Image";
import Search from "~/components/Search";
import styles from "./Navbar.module.scss";
import { MENU_ITEMS_1, MENU_ITEMS_2 } from "~/data/dataMenu";
import { config } from "~/config";
import { useDispatch, useSelector } from "react-redux";
import { userLogout } from "~/features/authentication/userAction";
import { useNavigate } from "react-router-dom";
import WrapperAuth from "~/components/WrapperAuth";

function Navbar() {
  const { user } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const [theme, setTheme] = useState(localStorage.getItem("theme"));

  const isLoginPage = location.pathname.includes("/login");

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
        dispatch(userLogout());
        break;
      case "toProfile":
        navigate(config.routes.profileLink(user.nickname));
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
          <WrapperAuth>
            <Button
              className={styles.upload_icon}
              text
              leftIcon={<FaPlus />}
              to={config.routes.upload}
            >
              Upload
            </Button>
          </WrapperAuth>

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
                  src={user.avatar}
                  alt="Avatar"
                />
              </Menu>
            </>
          ) : (
            <>
              {isLoginPage ? (
                <Link to={config.routes.register}>
                  <Button primary>Register</Button>
                </Link>
              ) : (
                <Link to={config.routes.login}>
                  <Button primary>Log in</Button>
                </Link>
              )}

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
