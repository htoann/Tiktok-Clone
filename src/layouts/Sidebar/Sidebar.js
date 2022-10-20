import React, { useState } from "react";
import { FaHome } from "react-icons/fa";
import { BsPeople, BsCameraVideo } from "react-icons/bs";
import { Link } from "react-router-dom";
import Button from "~/components/Button";
import styles from "./Sidebar.module.scss";
import { config } from "~/config";
import { useSelector } from "react-redux";
import SuggestedList from "./SuggestedList";
import FollowingList from "./FollowingList";

function Sidebar() {
  const [isActive, setIsActive] = useState(1);
  const { user } = useSelector((state) => state.user);

  const handleActive = (id) => {
    setIsActive(id);
  };

  return (
    <div className={styles.sidebar}>
      <div className={styles.sidebar_scrollbar}>
        <div className={styles.sidebar_tabs}>
          <Link
            to={config.routes.home}
            className={
              isActive === 1
                ? `${styles.sidebar_tab} ${styles.sidebar_active}`
                : styles.sidebar_tab
            }
            onClick={() => handleActive(1)}
          >
            <FaHome className={styles.sidebar_icon} />
            <h2 className={styles.sidebar_title}>For you</h2>
          </Link>
          <Link
            to={config.routes.following}
            className={
              isActive === 2
                ? `${styles.sidebar_tab} ${styles.sidebar_active}`
                : styles.sidebar_tab
            }
            onClick={() => handleActive(2)}
          >
            <BsPeople className={styles.sidebar_icon} />
            <h2 className={styles.sidebar_title}>Following</h2>
          </Link>
          <Link
            to={config.routes.live}
            className={
              isActive === 3
                ? `${styles.sidebar_tab} ${styles.sidebar_active}`
                : styles.sidebar_tab
            }
            onClick={() => handleActive(3)}
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
              <Link to={config.routes.login}>
                <Button outline large className={styles.button_login}>
                  Log in
                </Button>
              </Link>
            </div>
            <hr className={styles.hr} />
          </>
        )}

        <SuggestedList />
        <FollowingList />
        <div className={styles.contact}>
          <p>Contact me</p>
          <a
            className={styles.facebook}
            href="https://www.facebook.com/htoann/"
          >
            Trần Hữu Toàn
          </a>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
