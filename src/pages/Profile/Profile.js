import React, { useEffect, useState } from "react";
import styles from "./Profile.module.scss";
import { Link, useParams } from "react-router-dom";
import { BiUserCheck } from "react-icons/bi";
import Verify from "~/assets/images/verify.svg";
import Tippy from "@tippyjs/react";
import Image from "./../../components/Image";
import Button from "~/components/Core/Button";
import Loader from "~/components/Core/Loader";
import WrapperAuth from "~/components/WrapperAuth";
import handleFollowFunc from "~/utils/handleFollow";
import { getUsersService } from "~/features/accounts/services/getUsersService";
import { getFullName } from "~/utils/common";
import { useSelector } from "react-redux";
import { FaRegEdit } from "react-icons/fa";
import { config } from "~/config";

function Profile() {
  const { user: userRedux } = useSelector((state) => state.user);
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);
  const params = useParams();
  const nickname = params.nickname;

  useEffect(() => {
    const fetchApi = async () => {
      const result = await getUsersService.user(nickname);
      setUser(result);
      setLoading(false);
    };

    fetchApi();
  }, [nickname, userRedux, user.is_followed]);

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

  if (loading) {
    return <Loader />;
  }

  return (
    <div className={styles.wrapper}>
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
              {user.tick && <Image src={Verify} className={styles.verify} />}
            </h2>
            <h4 className={styles.user_fullname}>{getFullName(user)}</h4>
            {userRedux?.id !== user?.id ? (
              <WrapperAuth>
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
                      large
                      className={styles.button_follow}
                      onClick={handleFollow}
                    >
                      Follow
                    </Button>
                  )}
                </div>
              </WrapperAuth>
            ) : (
              <div className={styles.button_container}>
                <Button text leftIcon={<FaRegEdit />}>
                  Edit profile
                </Button>
              </div>
            )}
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
        <h2 className={styles.bio}>{user.bio || "No bio yet."}</h2>
      </div>
      <div className={styles.list_video_wrapper}>
        <div className={styles.title_wrapper}>
          <p className={styles.title}>Videos</p>
          <p className={styles.title}>Liked</p>
        </div>
        <div className={styles.list_video_container}>
          <div className={styles.list_video}>
            {user?.videos?.map((video) => (
              <Link
                key={video.id}
                to={config.routes.videoLink(video)}
                state={{
                  videoDetail: true,
                  video: video,
                  prevPath: location.pathname,
                }}
              >
                <div className={styles.video_container}>
                  <video
                    src={video.file_url}
                    muted
                    loop
                    onMouseEnter={handleVideoPlay}
                    onMouseLeave={handleVideoPause}
                    poster={video.thumb_url}
                  />
                  <div className={styles.video_desc}>
                    <p>{video.description}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
