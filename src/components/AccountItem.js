import React from "react";
import Verify from "~/assets/images/verify.svg";
import Avatar from "~/assets/images/Avatar.jpeg";

function AccountItem() {
  return (
    <div className="account__item">
      <img className="account__item__avatar" src={Avatar} alt="" />
      <div className="account__item__name">cristiano_ronaldo</div>
      <img className="verify__author" src={Verify} alt="" />
    </div>
  );
}

export default AccountItem;
