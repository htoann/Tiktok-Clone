import React from "react";
import {
  FaSearch,
  FaRegPaperPlane,
  FaRegCommentAlt,
  FaPlus,
} from "react-icons/fa";

function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar__inner">
        <img
          className="navbar__logo"
          src="https://upload.wikimedia.org/wikipedia/vi/a/a9/TikTok_logo.svg"
          alt=""
        />
        <form className="navbar__search">
          <input
            className="navbar__search__input"
            type="text"
            placeholder="Tìm kiếm tài khoản và video"
          />
          <span className="navbar__search__line"></span>
          <button className="navbar__search__icon">
            <FaSearch />
          </button>
        </form>
        <div className="navbar__right">
          <button className="navbar__right__upload">
            <FaPlus className="navbar__right__upload__plus" />
            <span className="navbar__right__upload__text">Tải lên</span>
          </button>
          <FaRegPaperPlane className="navbar__right__message" />
          <FaRegCommentAlt className="navbar__right__mail" />
        </div>
      </div>
    </header>
  );
}

export default Navbar;
