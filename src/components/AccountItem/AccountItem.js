import React from "react";
import Verify from "~/assets/images/verify.svg";
import styles from "./AccountItem.module.scss";
import Image from "../Image/Image";

function AccountItem({ user }) {
  return (
    <div className={styles.account_item}>
      {user && (
        <>
          <Image
            className={styles.account_item_avatar}
            src={user.avatar}
            alt={user.full_name}
          />
          <div className={styles.account_item_info}>
            <div className={styles.account_item_username}>
              <span>{user.nickname}</span>
              {user.tick && (
                <Image className={styles.verify_author} src={Verify} alt="" />
              )}
            </div>
            <div className={styles.account_item_name}>{user.full_name}</div>
          </div>
        </>
      )}
    </div>
  );
}

export default AccountItem;
