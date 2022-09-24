import React, { useState } from "react";
import { FaHome } from "react-icons/fa";
import { BsPeople } from "react-icons/bs";
import { BsCameraVideo } from "react-icons/bs";
import { Link } from "react-router-dom";
import AccountItem from "~/components/AccountItem";
import Button from "~/components/Button";
import styles from "~/static/sass/layout/sidebar.module.scss";

function Sidebar() {
  const [isActive, setIsActive] = useState(1);
  const [user, setUser] = useState([]);

  const handleClick = (value) => {
    setIsActive(value);
  };

  return (
    <div className={styles.sidebar}>
      <div className={styles.sidebar_scrollbar}>
        <div className={styles.sidebar_tabs}>
          <Link
            to="/"
            className={
              isActive === 1
                ? `${styles.sidebar_tab} ${styles.sidebar_active}`
                : styles.sidebar_tab
            }
            onClick={() => handleClick(1)}
          >
            <FaHome className={styles.sidebar_icon} />
            <h2 className={styles.sidebar_title}>For you</h2>
          </Link>
          <Link
            to="/following"
            className={
              isActive === 2
                ? `${styles.sidebar_tab} ${styles.sidebar_active}`
                : styles.sidebar_tab
            }
            onClick={() => handleClick(2)}
          >
            <BsPeople className={styles.sidebar_icon} />
            <h2 className={styles.sidebar_title}>Following</h2>
          </Link>
          <Link
            to="/live"
            className={
              isActive === 3
                ? `${styles.sidebar_tab} ${styles.sidebar_active}`
                : styles.sidebar_tab
            }
            onClick={() => handleClick(3)}
          >
            <BsCameraVideo className={styles.sidebar_icon} />
            <h2 className={styles.sidebar_title}>Live</h2>
          </Link>
        </div>
        <hr className={styles.hr} />

        {!user && (
          <>
            <div className={styles.sidebar_login}>
              <p className={styles.login_tip}>
                Log in to follow creators, like videos, and view comments.
              </p>
              <Button outline large>
                Log in
              </Button>
            </div>
            <hr className={styles.hr} />
          </>
        )}

        <div className={styles.sidebar_list}>
          <p className={styles.account_title}>Suggested accounts</p>
          <AccountItem />
          <AccountItem />
          <AccountItem />
          <AccountItem />
          <AccountItem />
          <div>
            <p className={styles.sidebar_seeAll}>See All</p>
          </div>
        </div>
        <hr className={styles.hr} />
        <div className={styles.sidebar_list}>
          <p className={styles.account_title}>Following accounts</p>
          <AccountItem />
          <AccountItem />
          <AccountItem />
          <AccountItem />
          <AccountItem />
          <div>
            <p className={styles.sidebar_seeAll}>See more</p>
          </div>
        </div>
        <hr className={styles.hr} />
        <div className={styles.sidebar_list}>
          <p className={styles.account_title}>Discover</p>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
