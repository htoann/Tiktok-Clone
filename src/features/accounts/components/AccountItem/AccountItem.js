import PropTypes from "prop-types";
import React from "react";
import Verify from "~/assets/images/verify.svg";
import styles from "./AccountItem.module.scss";
import Image from "../../../../components/Image";
import { Link } from "react-router-dom";
import { config } from "~/config";
import { getFullName } from "~/utils/common";

function AccountItem({ user, onClick }) {
  return (
    <div onClick={onClick}>
      {user && (
        <Link
          to={config.routes.profileLink(user.nickname)}
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
            <div className={styles.account_item_name}>{getFullName(user)}</div>
          </div>
        </Link>
      )}
    </div>
  );
}

AccountItem.propTypes = {
  user: PropTypes.object.isRequired,
  onClick: PropTypes.func,
};

export default AccountItem;
