import React from "react";
import styles from "./Home.module.scss";
import Video from "~/components/Video/Video";

function Home() {
  return (
    <div className={styles.home}>
      <div className={styles.main_container}>
        <Video />
        <hr className={styles.hr} />
        <Video />
        <hr className={styles.hr} />
      </div>
    </div>
  );
}

export default Home;
