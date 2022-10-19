import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaHeart, FaCommentDots, FaShare, FaMusic } from "react-icons/fa";
import styles from "./ContentVideo.module.scss";
import Verify from "~/assets/images/verify.svg";
import Button from "~/components/Button";
import Menu from "~/components/Popper/Menu";
import Video from "~/components/ContentVideo/Video/";
import Image from "../Image";
import PropTypes from "prop-types";
import handleFollowFunc from "~/utils/handleFollow";
import { MENU_ITEMS_SHARE } from "~/data/dataMenu";
import { config } from "~/config";
import { getFullName } from "~/utils/common";

function ContentVideo({ data }) {
  const [user, setUser] = useState(data.user);
  const profileLink = config.routes.profileLink(user.nickname);
  const videoTime = data.meta.playtime_seconds;

  const handleFollow = async () => {
    const isFollowed = await handleFollowFunc(user);
    setUser((user) => ({ ...user, is_followed: isFollowed }));
  };

  return (
    <div>
      <div className={styles.suggest_item}>
        <Link to={profileLink}>
          <Image className={styles.avatar} src={user.avatar} alt="" />
        </Link>
        <div className={styles.content}>
          <div className={styles.info_containter}>
            <div className={styles.info}>
              <div className={styles.author_container}>
                <div className={styles.author}>
                  <Link to={profileLink}>
                    <h3 className={styles.username}>{user.nickname}</h3>
                    {user.tick && <Image src={Verify} alt="" />}
                    <h3 className={styles.name}>{getFullName(user)}</h3>
                  </Link>
                </div>
              </div>
              <span className={styles.video_desc}>{data.description}</span>
              <h4 className={styles.video_music}>
                <FaMusic className={styles.icon_music} />
                {data.music || `Nhạc nền - ${getFullName(user)}`}
              </h4>
            </div>
            <div className={styles.follow_button} onClick={handleFollow}>
              {user.is_followed ? (
                <Button outline className={styles.followed}>
                  Following
                </Button>
              ) : (
                <Button outline>Follow</Button>
              )}
            </div>
          </div>
          <div className={styles.video_wrapper}>
            <div className={styles.video_card}>
              <Video time={videoTime} src={data.file_url} loop muted autoPlay />
            </div>
            <div className={styles.action_items}>
              <div className={styles.action_button}>
                <div
                  className={
                    data.is_liked
                      ? `${styles.icon} ${styles.liked}`
                      : `${styles.icon}`
                  }
                >
                  <FaHeart />
                </div>
                <strong className={styles.count}>{data.likes_count}</strong>
              </div>
              <div className={styles.action_button}>
                <div className={styles.icon}>
                  <FaCommentDots />
                </div>
                <strong className={styles.count}>{data.comments_count}</strong>
              </div>
              <div className={styles.action_button}>
                <div className={styles.menu_share}>
                  <Menu items={MENU_ITEMS_SHARE} right>
                    <div className={styles.icon}>
                      <FaShare />
                    </div>
                  </Menu>
                </div>
                <strong className={styles.count}>{data.shares_count}</strong>
              </div>
            </div>
          </div>
        </div>
      </div>

      <hr className={styles.hr} />
    </div>
  );
}

ContentVideo.prototype = {
  data: PropTypes.object.isRequired,
};

export default ContentVideo;
