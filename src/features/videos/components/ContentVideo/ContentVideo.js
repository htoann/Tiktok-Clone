import React, { memo, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaCommentDots, FaShare, FaMusic } from "react-icons/fa";
import { IoHeart } from "react-icons/io5";
import styles from "./ContentVideo.module.scss";
import Verify from "~/assets/images/verify.svg";
import Button from "~/components/Core/Button";
import Menu from "~/components/Popper/Menu";
import PropTypes from "prop-types";
import handleFollowFunc from "~/utils/handleFollow";
import { MENU_ITEMS_SHARE } from "~/data/dataMenu";
import { config } from "~/config";
import { getFullName } from "~/utils/common";
import handleLikeFunc from "~/utils/handleLike";
import Video from "../Video";
import WrapperAuth from "~/components/WrapperAuth";
import Image from "~/components/Image";

function ContentVideo({ data }) {
  const [content, setContent] = useState(data);
  const [user, setUser] = useState(content.user);
  const profileLink = config.routes.profileLink(user.nickname);

  useEffect(() => {
    setUser(content.user);
    setContent(content);
  }, [content]);

  const handleFollow = async () => {
    const isFollowed = await handleFollowFunc(user);
    setUser((user) => ({ ...user, is_followed: isFollowed }));
  };

  const handleLike = async () => {
    const newContent = await handleLikeFunc(content);
    setContent((content) => ({
      ...content,
      ...newContent,
    }));
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
                    <h3 className={styles.username}>
                      {user.nickname}
                      {user.tick && <Image src={Verify} alt="" />}
                    </h3>
                    <h3 className={styles.name}>{getFullName(user)}</h3>
                  </Link>
                </div>
              </div>
              <span className={styles.video_desc}>{content.description}</span>
              <h4 className={styles.video_music}>
                <FaMusic className={styles.icon_music} />
                {content.music || `Nhạc nền - ${getFullName(user)}`}
              </h4>
            </div>
            <WrapperAuth>
              <div className={styles.follow_button} onClick={handleFollow}>
                {user.is_followed ? (
                  <Button outline className={styles.followed}>
                    Following
                  </Button>
                ) : (
                  <Button outline>Follow</Button>
                )}
              </div>
            </WrapperAuth>
          </div>
          <div className={styles.video_wrapper}>
            <Link
              to={config.routes.videoLink(content)}
              state={{
                videoDetail: true,
                video: content,
                prevPath: location.pathname,
              }}
            >
              <div className={styles.video_card}>
                <Video data={content} />
              </div>
            </Link>
            <div className={styles.action_items}>
              <div className={styles.action_button}>
                <WrapperAuth>
                  <div
                    className={
                      content.is_liked
                        ? `${styles.icon} ${styles.liked}`
                        : `${styles.icon}`
                    }
                    onClick={() => handleLike(content)}
                  >
                    <IoHeart />
                  </div>
                </WrapperAuth>
                <strong className={styles.count}>{content.likes_count}</strong>
              </div>
              <Link
                to={config.routes.videoLink(content)}
                state={{
                  videoDetail: true,
                  video: content,
                  prevPath: location.pathname,
                }}
              >
                <div className={styles.action_button}>
                  <div className={styles.icon}>
                    <FaCommentDots />
                  </div>
                  <strong className={styles.count}>
                    {content.comments_count}
                  </strong>
                </div>
              </Link>

              <div className={styles.action_button}>
                <div className={styles.menu_share}>
                  <Menu items={MENU_ITEMS_SHARE} right>
                    <div className={styles.icon}>
                      <FaShare />
                    </div>
                  </Menu>
                </div>
                <strong className={styles.count}>{content.shares_count}</strong>
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

export default memo(ContentVideo);
