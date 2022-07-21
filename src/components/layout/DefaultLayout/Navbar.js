import React, { useState } from "react";
import {
  FaSearch,
  FaRegPaperPlane,
  FaRegCommentAlt,
  FaPlus,
} from "react-icons/fa";
import Logo from "~/assets/images/logo.svg";
import { Link } from "react-router-dom";
import Tippy from "@tippyjs/react/headless";
import Popper from "~/components/Popper";
import AccountItem from "~/components/AccountItem";
import Avatar from "~/assets/images/Avatar.jpeg";
import Button from "~/components/Button";
import { IoEllipsisVertical } from "react-icons/io5";

function Navbar() {
  const [searchResult, setSearchResult] = useState([]);
  const [user, setUser] = useState([]);

  // useEffect(() => {
  //   setTimeout(() => {
  //     setSearchResult([1, 2]);
  //   }, 1000);
  // }, []);

  const handleLogout = () => {
    setUser("");
  };

  const handleLogin = () => {
    setUser([]);
  };

  return (
    <header className="navbar">
      <div className="navbar-inner">
        <Link to="/" className="logo">
          <img src={Logo} alt="Tiktok" />
        </Link>
        <Tippy
          visible={searchResult.length > 0}
          interactive
          render={(attrs) => (
            <div className="search-results" tabIndex="-1" {...attrs}>
              <Popper>
                <div className="account-title">Account</div>
                <AccountItem />
                <AccountItem />
                <AccountItem />
              </Popper>
            </div>
          )}
        >
          <form className="navbar-search">
            <input
              className="navbar-search-input"
              type="text"
              placeholder="Search accounts and videos"
            />
            <span className="navbar-search-line"></span>
            <button className="navbar-search-icon">
              <FaSearch />
            </button>
          </form>
        </Tippy>

        <div className="navbar-right">
          <Button text leftIcon={<FaPlus />}>
            Upload
          </Button>
          {user ? (
            <>
              <div className="navbar-right-menu navbar-right-message navbar-right-action">
                <FaRegPaperPlane />
                <div className="narvbar-right-hover-content">
                  <div className="navbar-right-hover-arrow"></div>
                  <div className="navbar-right-hover-inner">Messages</div>
                </div>
              </div>
              <div className="navbar-right-menu navbar-right-mail navbar-right-action">
                <FaRegCommentAlt />
                <div className="narvbar-right-hover-content">
                  <div className="navbar-right-hover-arrow"></div>
                  <div className="navbar-right-hover-inner">Inbox</div>
                </div>
              </div>
              <div className="navbar-right-avatar navbar-right-action">
                <img className="navbar-right-avatar-pic" src={Avatar} alt="" />
                <div className="navbar-right-avatar-inner">
                  <div className="navbar-right-avatar-inner-text">
                    View profile
                  </div>
                  <div className="navbar-right-avatar-inner-text">
                    Get coins
                  </div>
                  <div className="navbar-right-avatar-inner-text">Settings</div>
                  <div className="navbar-right-avatar-inner-text">English</div>
                  <div className="navbar-right-avatar-inner-text">
                    Feedback and help
                  </div>
                  <div className="navbar-right-avatar-inner-text">
                    Keyboard shortcuts
                  </div>
                  <hr className="hr" />
                  <div
                    className="navbar-right-avatar-inner-text"
                    onClick={handleLogout}
                  >
                    Log out
                  </div>
                </div>
              </div>
            </>
          ) : (
            <>
              <Button primary onClick={handleLogin}>
                Log in
              </Button>
              <IoEllipsisVertical className="menu-login" />
            </>
          )}
        </div>
      </div>
    </header>
  );
}

export default Navbar;
