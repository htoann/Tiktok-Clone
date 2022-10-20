import React, { useEffect, useState } from "react";
import styles from "./Profile.module.scss";
import { Link, useLocation } from "react-router-dom";
import { BiUserCheck } from "react-icons/bi";
import Tippy from "@tippyjs/react";
import Image from "./../../components/Image";
import Button from "~/components/Button";
import Verify from "~/assets/images/verify.svg";
import Loader from "~/components/Loader/Loader";
import handleFollowFunc from "~/utils/handleFollow";
import { getUsersService } from "~/services/getUsersService";
import { getFullName } from "~/utils/common";
import { useSelector } from "react-redux";

function Profile() {
  const { user: userRedux } = useSelector((state) => state.user);
  const [user, setUser] = useState({});
  const location = useLocation();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchApi = async () => {
      const result = await getUsersService.user(location.pathname);
      setUser(result);

      setLoading(false);
    };

    fetchApi();
  }, [location.pathname, userRedux, user.is_followed]);

  const handleVideoPlay = (e) => {
    e.target.play();
  };

  const handleVideoPause = (e) => {
    e.target.pause();
    e.target.currentTime = 0;
  };

  const handleFollow = async () => {
    const isFollowed = await handleFollowFunc(user);
    setUser((user) => ({ ...user, is_followed: isFollowed }));
  };

  return (
    <div className={styles.wrapper}>
      {!loading ? (
        <>
          <div className={styles.header}>
            <div className={styles.info}>
              <Image
                src={user.avatar}
                width={116}
                height={116}
                className={styles.avatar}
              />
              <div className={styles.title_container}>
                <h2 className={styles.user_title}>
                  {user.nickname}
                  {user.tick && (
                    <Image src={Verify} className={styles.verify} />
                  )}
                </h2>

                <h4 className={styles.user_fullname}>{getFullName(user)}</h4>

                <div className={styles.button_container}>
                  {user.is_followed ? (
                    <div className={styles.followed_container}>
                      <Button outline large>
                        Messenges
                      </Button>
                      <Tippy content="Unfollow" placement="bottom">
                        <div className={styles.unfollow} onClick={handleFollow}>
                          <BiUserCheck />
                        </div>
                      </Tippy>
                    </div>
                  ) : (
                    <Button
                      outline
                      large
                      className={styles.button_follow}
                      onClick={handleFollow}
                    >
                      Follow
                    </Button>
                  )}
                </div>
              </div>
            </div>
            <h2 className={styles.count_info}>
              <div className={styles.number_container}>
                <strong>{user.followings_count}</strong>
                <span>Followings</span>
              </div>
              <div className={styles.number_container}>
                <strong>{user.followers_count}</strong>
                <span>Follower</span>
              </div>
              <div className={styles.number_container}>
                <strong>{user.likes_count}</strong>
                <span>Likes</span>
              </div>
            </h2>
            <h2 className={styles.bio}>
              {user.bio ? user.bio : "No bio yet."}
            </h2>
          </div>
          <div className={styles.list_video_wrapper}>
            <div className={styles.title_wrapper}>
              <p className={styles.title}>Videos</p>
              <p className={styles.title}>Liked</p>
            </div>
            <div className={styles.list_video_container}>
              <div className={styles.list_video}>
                {user?.videos?.map((video) => (
                  <div className={styles.video_container} key={video.id}>
                    <Link to="#">
                      <video
                        src={video.file_url}
                        muted
                        loop
                        onMouseEnter={handleVideoPlay}
                        onMouseLeave={handleVideoPause}
                      />
                      <div className={styles.video_desc}>
                        <p href="">{video.description}</p>
                      </div>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </>
      ) : (
        <Loader />
      )}
    </div>
  );
}

export default Profile;
