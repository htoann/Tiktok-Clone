import React from "react";
import {
  FaSearch,
  FaRegPaperPlane,
  FaRegCommentAlt,
  FaPlus,
} from "react-icons/fa";
import Logo from "~/assets/images/logo.svg";

function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar__inner">
        <div>
          <img src={Logo} alt="Tiktok" />
        </div>

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
          <div className="navbar__right__menu navbar__right__message">
            <FaRegPaperPlane />
            <div className="narvbar__right__hover__content">
              <div className="navbar__right__hover__arrow"></div>
              <div className="navbar__right__hover__inner">Tin nhắn</div>
            </div>
          </div>
          <div className="navbar__right__menu navbar__right__mail">
            <FaRegCommentAlt />
            <div className="narvbar__right__hover__content">
              <div className="navbar__right__hover__arrow"></div>
              <div className="navbar__right__hover__inner">Hộp thư</div>
            </div>
          </div>
          <div className="navbar__right__avatar">
            <div className="navbar__right__avatar__pic">Pic</div>
            <div className="navbar__right__avatar__inner">
              <div>Xem hồ sơ</div>
              <div>Nhận xu</div>
              <div>Cài đặt</div>
              <div>Tiếng Việt</div>
              <div>Phản hồi và trợ giúp</div>
              <div>Phím tắt trên bàn phím</div>
              <div>Xem hồ sơ</div>
              <div>Phím tắt trên bàn phím</div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
