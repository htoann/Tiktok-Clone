import React, { useEffect, useState } from "react";
import { FaHome } from "react-icons/fa";
import { BsPeople } from "react-icons/bs";
import { BsCameraVideo } from "react-icons/bs";
import { Link } from "react-router-dom";
import ListAccount from "~/components/ListAccount/ListAccounts.js";
import Button from "~/components/Button/Button";
import styles from "./Sidebar.module.scss";
import { getUsersService } from "~/services/getUsersService";
import { config } from "~/config";

function Sidebar() {
  const [isActive, setIsActive] = useState(1);
  const [user, setUser] = useState([]);
  const [suggestedList, setSuggestedList] = useState([]);
  const [followingList, setFollowingList] = useState([]);
  const [perpage, setPerpage] = useState(5);

  const handleActive = (id) => {
    setIsActive(id);
  };

  const handleSeeMore = () => {
    if (perpage != 20) {
      setPerpage((prev) => prev + 5);
    } else {
      setPerpage(5);
    }
  };

  useEffect(() => {
    const fetchApi = async () => {
      const result = await getUsersService.suggestedList(1, perpage);
      setSuggestedList(result);
    };

    fetchApi();
  }, [perpage]);

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
              <Button outline large>
                Log in
              </Button>
            </div>
            <hr className={styles.hr} />
          </>
        )}

        <ListAccount
          title="Suggested accounts"
          list={suggestedList}
          onClick={handleSeeMore}
          perpage={perpage}
        />
        <ListAccount title="Following accounts" list={followingList} />
        <p>Contact me</p>
        <a href="https://www.facebook.com/htoann/">Trần Hữu Toàn</a>
      </div>
    </div>
  );
}

export default Sidebar;
