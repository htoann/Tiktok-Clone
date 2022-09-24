import React from "react";
import Siu from "~/assets/videos/Siu.mp4";
import Avatar from "~/assets/images/Avatar.jpeg";
import Verify from "~/assets/images/verify.svg";
import { FaHeart, FaCommentDots, FaShare } from "react-icons/fa";
import Button from "~/components/Button";
import styles from "~/static/sass/pages/home.module.scss";

function Home() {
  return (
    <div className={styles.home}>
      <div className={styles.main_container}>
        <div className={styles.recommend_list_item_container}>
          <img className={styles.avatar_author} src={Avatar} alt="" />
          <div className={styles.content_container}>
            <div className={styles.text_info_container}>
              <div className={styles.text_info}>
                <div className={styles.author_container}>
                  <h3 className={styles.username_author}>cristiano_ronaldo</h3>
                  <img src={Verify} alt="" />
                  <h3 className={styles.name_author}>Cristiano Ronaldo</h3>
                </div>
                <span className={styles.video_desc_text}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Ratione, incidunt non distinctio nemo saepe nulla architecto
                  quam id nihil corporis et amet? Corporis dolorum sed alias
                  expedita iste
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
                  <div className={styles.icon}>
                    <FaShare />
                  </div>
                  <strong className={styles.count}>7482</strong>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr className={styles.hr} />

        <div className={styles.recommend_list_item_container}>
          <img className={styles.avatar_author} src={Avatar} alt="" />
          <div className={styles.content_container}>
            <div className={styles.text_info_container}>
              <div className={styles.text_info}>
                <div className={styles.author_container}>
                  <h3 className={styles.username_author}>cristiano_ronaldo</h3>
                  <img src={Verify} alt="" />
                  <h3 className={styles.name_author}>Cristiano Ronaldo</h3>
                </div>
                <span className={styles.video_desc_text}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Ratione, incidunt non distinctio nemo saepe nulla architecto
                  quam id nihil corporis et amet? Corporis dolorum sed alias
                  expedita iste
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
                  <div className={styles.icon}>
                    <FaShare />
                  </div>
                  <strong className={styles.count}>7482</strong>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr className={styles.hr} />
      </div>
    </div>
  );
}

export default Home;
