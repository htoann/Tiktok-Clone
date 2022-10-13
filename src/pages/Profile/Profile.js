import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import styles from "./Profile.module.scss";
import Image from "./../../components/Image/Image";
import Verify from "~/assets/images/verify.svg";
import Button from "~/components/Button";
import { getUsersService } from "~/services/getUsersService";

function Profile() {
  const [user, setUser] = useState({});
  const location = useLocation();

  console.log(location);
  console.log(user);

  useEffect(() => {
    const fetchApi = async () => {
      const result = await getUsersService.user(location.pathname);
      setUser(result);
    };

    fetchApi();
  }, [location.pathname]);

  const handleVideoPlay = (e) => {
    e.target.play();
  };

  const handleVideoPause = (e) => {
    e.target.pause();
    e.target.currentTime = 0;
  };

  return (
    <div className={styles.wrapper}>
      {user && (
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

                <h4 className={styles.user_fullname}>
                  {user.first_name} {user.last_name}
                </h4>

                <div className={styles.button_container}>
                  <Button outline large className={styles.button_follow}>
                    Follow
                  </Button>
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
      )}
    </div>
  );
}

export default Profile;
