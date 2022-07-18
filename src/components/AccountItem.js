import React from "react";
import Verify from "~/assets/images/verify.svg";
import Avatar from "~/assets/images/Avatar.jpeg";

function AccountItem() {
  return (
    <div className="account-item">
      <img className="account-item-avatar" src={Avatar} alt="" />
      <div className="account-item-info">
        <div className="account-item-username">
          <span>cristiano_ronaldo</span>
          <img className="verify-author" src={Verify} alt="" />
        </div>
        <div className="account-item-name">Cristiano Ronaldo</div>
      </div>
    </div>
  );
}

export default AccountItem;
