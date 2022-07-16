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
import { useEffect } from "react";
import Popper from "~/components/Popper";
import AccountItem from "~/components/AccountItem";
import Avatar from "~/assets/images/Avatar.jpeg";

function Navbar() {
  const [searchResult, setSearchResult] = useState([]);

  // useEffect(() => {
  //   setTimeout(() => {
  //     setSearchResult([1, 2]);
  //   }, 1000);
  // }, []);

  return (
    <header className="navbar">
      <div className="navbar__inner">
        <Link to="/" className="logo">
          <img src={Logo} alt="Tiktok" />
        </Link>
        <Tippy
          visible={searchResult.length > 0}
          interactive
          render={(attrs) => (
            <div className="search__results" tabIndex="-1" {...attrs}>
              <Popper>
                <div className="account__title">Account</div>
                <AccountItem />
                <AccountItem />
                <AccountItem />
              </Popper>
            </div>
          )}
        >
          <form className="navbar__search">
            <input
              className="navbar__search__input"
              type="text"
              placeholder="Search accounts and videos"
            />
            <span className="navbar__search__line"></span>
            <button className="navbar__search__icon">
              <FaSearch />
            </button>
          </form>
        </Tippy>

        <div className="navbar__right">
          <button className="navbar__right__upload">
            <FaPlus className="navbar__right__upload__plus" />
            <span className="navbar__right__upload__text">Upload</span>
          </button>
          <div className="navbar__right__menu navbar__right__message">
            <FaRegPaperPlane />
            <div className="narvbar__right__hover__content">
              <div className="navbar__right__hover__arrow"></div>
              <div className="navbar__right__hover__inner">Messages</div>
            </div>
          </div>
          <div className="navbar__right__menu navbar__right__mail">
            <FaRegCommentAlt />
            <div className="narvbar__right__hover__content">
              <div className="navbar__right__hover__arrow"></div>
              <div className="navbar__right__hover__inner">Inbox</div>
            </div>
          </div>
          <div className="navbar__right__avatar">
            <img className="navbar__right__avatar__pic" src={Avatar} alt="" />
            <div className="navbar__right__avatar__inner">
              <div className="navbar__right__avatar__inner__text">
                View profile
              </div>
              <div className="navbar__right__avatar__inner__text">
                Get coins
              </div>
              <div className="navbar__right__avatar__inner__text">Settings</div>
              <div className="navbar__right__avatar__inner__text">English</div>
              <div className="navbar__right__avatar__inner__text">
                Feedback and help
              </div>
              <div className="navbar__right__avatar__inner__text">
                Keyboard shortcuts
              </div>
              <hr className="hr" />
              <div className="navbar__right__avatar__inner__text">Log out</div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
