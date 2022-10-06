import React, { useEffect, useState } from "react";
import { FaHome } from "react-icons/fa";
import { BsPeople } from "react-icons/bs";
import { BsCameraVideo } from "react-icons/bs";
import { Link } from "react-router-dom";
import ListAccount from "~/components/ListAccount/ListAccounts.js";
import Button from "~/components/Button/Button";
import styles from "./Sidebar.module.scss";
import { getUsersService } from "~/services/getUsersService";

function Sidebar() {
  const [isActive, setIsActive] = useState(1);
  const [user, setUser] = useState([]);
  const [suggestedList, setSuggestedList] = useState([]);
  const [followingList, setFollowingList] = useState([]);
  // const [perpage, setPerPage] = useState(5);
  const [page, setPage] = useState(1);

  const handleActive = (id) => {
    setIsActive(id);
  };

  const handleSeeMore = () => {
    page != 10 && setPage((prev) => prev + 1);
  };

  useEffect(() => {
    const fetchApi = async () => {
      const result = await getUsersService.suggestedList(page);
      setSuggestedList(result.data);
    };

    fetchApi();
  }, [page]);

  console.log("page: " + page);

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
            onClick={() => handleActive(1)}
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
            onClick={() => handleActive(2)}
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
        />
        <ListAccount title="Following accounts" list={followingList} />
      </div>
    </div>
  );
}

export default Sidebar;
