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

  useEffect(() => {
    setTimeout(() => {
      setSearchResult([1, 2]);
    }, 1000);
  }, []);

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
              placeholder="Tìm kiếm tài khoản và video"
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
            <img className="navbar__right__avatar__pic" src={Avatar} alt="" />
            <div className="navbar__right__avatar__inner">
              <div className="navbar__right__avatar__inner__text">
                Xem hồ sơ
              </div>
              <div className="navbar__right__avatar__inner__text">Nhận xu</div>
              <div className="navbar__right__avatar__inner__text">Cài đặt</div>
              <div className="navbar__right__avatar__inner__text">
                Tiếng Việt
              </div>
              <div className="navbar__right__avatar__inner__text">
                Phản hồi và trợ giúp
              </div>
              <div className="navbar__right__avatar__inner__text">
                Phím tắt trên bàn phím
              </div>
              <div className="navbar__right__avatar__inner__text">
                Xem hồ sơ
              </div>
              <div className="navbar__right__avatar__inner__text">
                Phím tắt trên bàn phím
              </div>
              <hr />
              <div className="navbar__right__avatar__inner__text">
                Đăng xuất
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
