import React from "react";
import styles from "./ListAccount.module.scss";
import AccountItem from "../AccountItem";
import PropTypes from "prop-types";

function ListAccount({ title, list, onClick, perpage }) {
  return (
    <>
      <div className={styles.sidebar_list}>
        <p className={styles.account_title}>{title}</p>
        {list?.map((user) => (
          <AccountItem user={user} key={user.id} />
        ))}
        <div>
          <p className={styles.sidebar_seeAll} onClick={onClick}>
            {perpage === 20 || list.length < 5 ? "See less" : "See more"}
          </p>
        </div>
      </div>
      <hr className={styles.hr} />
    </>
  );
}

ListAccount.prototype = {
  title: PropTypes.string,
  list: PropTypes.array,
  onClick: PropTypes.func,
  perpage: PropTypes.number,
};

export default ListAccount;
