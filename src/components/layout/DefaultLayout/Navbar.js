import React, { useState } from "react";
import {
  FaSearch,
  FaRegPaperPlane,
  FaRegCommentAlt,
  FaPlus,
  FaAutoprefixer,
  FaQuestion,
  FaRegKeyboard,
} from "react-icons/fa";
import Logo from "~/assets/images/logo.svg";
import { Link } from "react-router-dom";
import Tippy from "@tippyjs/react/headless";
import PopperWrapper from "~/components/Popper/PopperWrapper";
import AccountItem from "~/components/AccountItem";
import Avatar from "~/assets/images/Avatar.jpeg";
import Button from "~/components/Button";
import { IoEllipsisVertical } from "react-icons/io5";
import Menu from "~/components/Popper/Menu";
import styles from "~/static/sass/layout/navbar.module.scss";

const MENU_ITEMS = [
  { title: "English", icon: <FaAutoprefixer /> },
  { title: "Feedback and help", icon: <FaQuestion />, to: "/feedback" },
  { title: "Keyboard shortcuts", icon: <FaRegKeyboard /> },
];

function Navbar() {
  const [searchResult, setSearchResult] = useState([]);
  const [user, setUser] = useState([]);

  // useEffect(() => {
  //   setTimeout(() => {
  //     setSearchResult([1, 2]);
  //   }, 1000);
  // }, []);

  const handleLogout = () => {
    setUser("");
  };

  const handleLogin = () => {
    setUser([]);
  };

  return (
    <header className={styles.navbar}>
      <div className={styles.navbar_wrapper}>
        <Link to="/" className={styles.logo}>
          <img src={Logo} alt="Tiktok" />
        </Link>
        <Tippy
          visible={searchResult.length > 0}
          interactive
          render={(attrs) => (
            <div className={styles.search_results} tabIndex="-1" {...attrs}>
              <PopperWrapper>
                <div className={styles.account_title}>Account</div>
                <AccountItem />
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
        </Tippy>

        <div className={styles.navbar_right}>
          <Button text leftIcon={<FaPlus />}>
            Upload
          </Button>
          {user ? (
            <>
              <div
                className={`${styles.navbar_right_menu} ${styles.navbar_right_message}  ${styles.navbar_right_action}`}
              >
                <FaRegPaperPlane />
                <div className={styles.narvbar_right_hover_content}>
                  <div className={styles.navbar_right_hover_arrow}></div>
                  <div className={styles.navbar_right_hover_inner}>
                    Messages
                  </div>
                </div>
              </div>

              <div
                className={`${styles.navbar_right_menu} ${styles.navbar_right_mail}  ${styles.navbar_right_action}`}
              >
                <FaRegCommentAlt />
                <div className={styles.narvbar_right_hover_content}>
                  <div className={styles.navbar_right_hover_arrow}></div>
                  <div className={styles.navbar_right_hover_inner}>Inbox</div>
                </div>
              </div>
              <Tippy
                interactive
                render={(attrs) => (
                  <div
                    className={styles.navbar_menu_items}
                    tabIndex="-1"
                    {...attrs}
                  >
                    <PopperWrapper>
                      <div className={styles.navbar_right_dropdown_inner}>
                        <div
                          className={styles.navbar_right_dropdown_inner_text}
                        >
                          View profile
                        </div>
                        <div
                          className={styles.navbar_right_dropdown_inner_text}
                        >
                          Get coins
                        </div>
                        <div
                          className={styles.navbar_right_dropdown_inner_text}
                        >
                          Settings
                        </div>
                        <div
                          className={styles.navbar_right_dropdown_inner_text}
                        >
                          English
                        </div>
                        <div
                          className={styles.navbar_right_dropdown_inner_text}
                        >
                          Feedback and help
                        </div>
                        <div
                          className={styles.navbar_right_dropdown_inner_text}
                        >
                          Keyboard shortcuts
                        </div>
                        <hr className={styles.hr} />
                        <div
                          className={styles.navbar_right_dropdown_inner_text}
                          onClick={handleLogout}
                        >
                          Log out
                        </div>
                      </div>
                    </PopperWrapper>
                  </div>
                )}
              >
                <div
                  className={`${styles.navbar_right_dropdown} ${styles.navbar_right_action}`}
                >
                  <img
                    className={styles.navbar_right_dropdown_pic}
                    src={Avatar}
                    alt=""
                  />
                </div>
              </Tippy>
            </>
          ) : (
            <>
              <Button primary onClick={handleLogin}>
                Log in
              </Button>

              {/* <Tippy
                interactive
                render={(attrs) => (
                  <div className="navbar_menu_items" tabIndex="-1" {...attrs}>
                    <PopperWrapper>
                      <li className="navbar_right_dropdown_inner_text">
                        English
                      </li>
                      <li className="navbar_right_dropdown_inner_text">
                        Feedback and help
                      </li>
                      <li className="navbar_right_dropdown_inner_text">
                        Keyboard shortcuts
                      </li>
                    </PopperWrapper>
                  </div>
                )}
              >
                <div className="navbar_right_dropdown navbar_right_action">
                  <IoEllipsisVertical className="navbar_right_dropdown_icon" />
                </div>
              </Tippy> */}
              <Menu items={MENU_ITEMS} className={styles.navbar_menu_items}>
                <div
                  className={`${styles.navbar_right_dropdown} ${styles.navbar_right_action}`}
                >
                  <IoEllipsisVertical
                    className={styles.navbar_right_dropdown_icon}
                  />
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
