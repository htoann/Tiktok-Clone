import React from "react";
import Verify from "~/assets/images/verify.svg";
import Avatar from "~/assets/images/Avatar.jpeg";
import styles from "~/static/sass/components/accountItem.module.scss";

function AccountItem() {
  return (
    <div className={styles.account_item}>
      <img className={styles.account_item_avatar} src={Avatar} alt="" />
      <div className={styles.account_item_info}>
        <div className={styles.account_item_username}>
          <span>cristiano_ronaldo</span>
          <img className={styles.verify_author} src={Verify} alt="" />
        </div>
        <div className={styles.account_item_name}>Cristiano Ronaldo</div>
      </div>
    </div>
  );
}

export default AccountItem;
