import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import styles from "./Profile.module.scss";
import Image from "./../../components/Image/Image";
import Verify from "~/assets/images/verify.svg";
import Button from "~/components/Button";

function Profile() {
  const [user, setUser] = useState({});
  const location = useLocation();

  useEffect(() => {
    setUser(location.state?.user);
  }, [location]);

  return (
    <div className={styles.wrapper}>
      {user && (
        <div className={styles.profile}>
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
                  {user.last_name}
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
            <h2 className={styles.bio}>{user.bio}</h2>
          </div>
          <div className={styles.content}></div>
        </div>
      )}
    </div>
  );
}

export default Profile;
