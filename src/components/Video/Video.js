import React from "react";
import Siu from "~/assets/videos/Siu.mp4";
import Avatar from "~/assets/images/Avatar.jpeg";
import Verify from "~/assets/images/verify.svg";
import { FaHeart, FaCommentDots, FaShare } from "react-icons/fa";
import Button from "~/components/Button";
import styles from "./Video.module.scss";
import { MENU_ITEMS_SHARE } from "~/utils/dataMenu";
import Menu from "~/components/Popper/Menu/Menu";
import Image from "../Image/Image";

function Video({ data }) {
  return (
    <div>
      <div className={styles.suggest_item}>
        <Image className={styles.avatar} src={data.user.avatar} alt="" />
        <div className={styles.content}>
          <div className={styles.info_containter}>
            <div className={styles.info}>
              <div className={styles.author}>
                <h3 className={styles.username}>{data.nickname}</h3>
                {data.user.tick && <Image src={Verify} alt="" />}
                <h3 className={styles.name}>
                  {data.user.first_name} {data.user.last_name}
                </h3>
              </div>
              <span className={styles.video_desc}>{data.description}</span>
            </div>
            <Button outline>Follow</Button>
          </div>
          <div className={styles.video_wrapper}>
            <div className={styles.video_card}>
              <video controls src={data.file_url} loop muted></video>
            </div>
            <div className={styles.action_items}>
              <div className={styles.action_button}>
                <div className={styles.icon}>
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
                <Menu items={MENU_ITEMS_SHARE} right>
                  <div className={styles.icon}>
                    <FaShare />
                  </div>
                </Menu>
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

export default Video;
