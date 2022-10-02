import React from "react";
import Siu from "~/assets/videos/Siu.mp4";
import Avatar from "~/assets/images/Avatar.jpeg";
import Verify from "~/assets/images/verify.svg";
import { FaHeart, FaCommentDots, FaShare } from "react-icons/fa";
import Button from "~/components/Button";
import styles from "./Video.module.scss";
import { MENU_ITEMS_SHARE } from "~/utils/dataMenu";
import Menu from "~/components/Popper/Menu/Menu";

function Video() {
  return (
    <div className={styles.suggest_item}>
      <img className={styles.avatar} src={Avatar} alt="" />
      <div className={styles.content}>
        <div className={styles.info_containter}>
          <div className={styles.info}>
            <div className={styles.author}>
              <h3 className={styles.username}>cristiano_ronaldo</h3>
              <img src={Verify} alt="" />
              <h3 className={styles.name}>Cristiano Ronaldo</h3>
            </div>
            <span className={styles.video_desc}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione,
              incidunt non distinctio nemo saepe nulla architecto quam id nihil
              corporis et amet? Corporis dolorum sed alias expedita iste
            </span>
          </div>
          <Button outline>Follow</Button>
        </div>
        <div className={styles.video_wrapper}>
          <div className={styles.video_card}>
            <video controls src={Siu} loop muted></video>
          </div>
          <div className={styles.action_items}>
            <div className={styles.action_button}>
              <div className={styles.icon}>
                <FaHeart />
              </div>
              <strong className={styles.count}>484.3K</strong>
            </div>
            <div className={styles.action_button}>
              <div className={styles.icon}>
                <FaCommentDots />
              </div>
              <strong className={styles.count}>502</strong>
            </div>
            <div className={styles.action_button}>
              <Menu items={MENU_ITEMS_SHARE} right>
                <div className={styles.icon}>
                  <FaShare />
                </div>
              </Menu>
              <strong className={styles.count}>7482</strong>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Video;
