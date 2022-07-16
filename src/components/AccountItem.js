import React from "react";
import Verify from "~/assets/images/verify.svg";
import Avatar from "~/assets/images/Avatar.jpeg";

function AccountItem() {
  return (
    <div className="account__item">
      <img className="account__item__avatar" src={Avatar} alt="" />
      <div className="account__item__info">
        <div className="account__item__username">
          <span>cristiano_ronaldo</span>
          <img className="verify__author" src={Verify} alt="" />
        </div>
        <div className="account__item__name">Cristiano Ronaldo</div>
      </div>
    </div>
  );
}

export default AccountItem;
