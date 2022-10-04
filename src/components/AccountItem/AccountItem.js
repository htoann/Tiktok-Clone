import React from "react";
import Verify from "~/assets/images/verify.svg";
import styles from "./AccountItem.module.scss";
import Image from "../Image/Image";
import { Link } from "react-router-dom";

function AccountItem({ user, onClick }) {
  return (
    <div onClick={onClick}>
      {user && (
        <Link
          to={`/@${user.nickname}`}
          state={{ user }}
          className={styles.account_item}
        >
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
        </Link>
      )}
    </div>
  );
}

export default AccountItem;
