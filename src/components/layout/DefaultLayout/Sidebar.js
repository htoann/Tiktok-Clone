import React, { useState } from "react";
import { FaHome } from "react-icons/fa";
import { BsPeople } from "react-icons/bs";
import { BsCameraVideo } from "react-icons/bs";
import { Link } from "react-router-dom";
import AccountItem from "~/components/AccountItem";
import Button from "~/components/Button";

function Sidebar() {
  const [isActive, setIsActive] = useState(1);
  const [user, setUser] = useState([]);

  const handleClick = (value) => {
    setIsActive(value);
  };

  return (
    <div className="sidebar">
      <div className="sidebar-scrollbar">
        <div className="sidebar-tabs">
          <Link
            to="/"
            className={
              isActive === 1 ? "sidebar-tab sidebar-active" : "sidebar-tab"
            }
            onClick={() => handleClick(1)}
          >
            <FaHome className="sidebar-icon" />
            <h2 className="sidebar-title">For you</h2>
          </Link>
          <Link
            to="/following"
            className={
              isActive === 2 ? "sidebar-tab sidebar-active" : "sidebar-tab"
            }
            onClick={() => handleClick(2)}
          >
            <BsPeople className="sidebar-icon" />
            <h2 className="sidebar-title">Following</h2>
          </Link>
          <Link
            to="/live"
            className={
              isActive === 3 ? "sidebar-tab sidebar-active" : "sidebar-tab"
            }
            onClick={() => handleClick(3)}
          >
            <BsCameraVideo className="sidebar-icon" />
            <h2 className="sidebar-title">LIVE</h2>
          </Link>
        </div>
        <hr className="hr" />

        {!user && (
          <>
            <div className="sidebar-login">
              <p className="login-tip">
                Log in to follow creators, like videos, and view comments.
              </p>
              <Button outline large>
                Log in
              </Button>
            </div>
            <hr className="hr" />
          </>
        )}

        <div className="sidebar-list">
          <p className="account-title">Suggested accounts</p>
          <AccountItem />
          <AccountItem />
          <AccountItem />
          <AccountItem />
          <AccountItem />
          <div>
            <p className="sidebar-seeAll">See All</p>
          </div>
        </div>
        <hr className="hr" />
        <div className="sidebar-list">
          <p className="account-title">Following accounts</p>
          <AccountItem />
          <AccountItem />
          <AccountItem />
          <AccountItem />
          <AccountItem />
          <div>
            <p className="sidebar-seeAll">See more</p>
          </div>
        </div>
        <hr className="hr" />
        <div className="sidebar-list">
          <p className="account-title">Discover</p>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
