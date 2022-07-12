import React from "react";
import { FaHome } from "react-icons/fa";
import { BsPeople } from "react-icons/bs";
import { BsCameraVideo } from "react-icons/bs";
import { Link } from "react-router-dom";
import Avatar from "~/assets/images/Avatar.jpeg";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar__tabs">
        <Link to="/" className="sidebar__tab sidebar__active">
          <FaHome className="sidebar__icon" />
          <h2 className="sidebar__title">Dành cho bạn</h2>
        </Link>
        <Link to="/following" className="sidebar__tab">
          <BsPeople className="sidebar__icon" />
          <h2 className="sidebar__title">Đang Follow</h2>
        </Link>
        <Link to="/live" className="sidebar__tab">
          <BsCameraVideo className="sidebar__icon" />
          <h2 className="sidebar__title">LIVE</h2>
        </Link>
      </div>
      <hr className="hr" />
      <div className="sidebar__list">
        <p className="sidebar__title">Tài khoản được đề xuất</p>
        <div className="sidebar__item">
          <img className="sidebar__item__avatar" src={Avatar} alt="" />
          <div className="sidebar__item__name">Trần Hữu Toàn</div>
        </div>
        <div className="sidebar__item">
          <img className="sidebar__item__avatar" src={Avatar} alt="" />
          <div className="sidebar__item__name">Trần Hữu Toàn</div>
        </div>
        <div className="sidebar__item">
          <img className="sidebar__item__avatar" src={Avatar} alt="" />
          <div className="sidebar__item__name">Trần Hữu Toàn</div>
        </div>
        <div className="sidebar__item">
          <img className="sidebar__item__avatar" src={Avatar} alt="" />
          <div className="sidebar__item__name">Trần Hữu Toàn</div>
        </div>
        <div className="sidebar__item">
          <img className="sidebar__item__avatar" src={Avatar} alt="" />
          <div className="sidebar__item__name">Trần Hữu Toàn</div>
        </div>
        <div>
          <p className="sidebar__seeAll">Xem tất cả</p>
        </div>
      </div>
      <hr className="hr" />
      <div className="sidebar__list">
        <p className="sidebar__title">Các tài khoản đang follow</p>
        <div className="sidebar__item">
          <img className="sidebar__item__avatar" src={Avatar} alt="" />
          <div className="sidebar__item__name">Trần Hữu Toàn</div>
        </div>
        <div className="sidebar__item">
          <img className="sidebar__item__avatar" src={Avatar} alt="" />
          <div className="sidebar__item__name">Trần Hữu Toàn</div>
        </div>
        <div className="sidebar__item">
          <img className="sidebar__item__avatar" src={Avatar} alt="" />
          <div className="sidebar__item__name">Trần Hữu Toàn</div>
        </div>
        <div className="sidebar__item">
          <img className="sidebar__item__avatar" src={Avatar} alt="" />
          <div className="sidebar__item__name">Trần Hữu Toàn</div>
        </div>
        <div className="sidebar__item">
          <img className="sidebar__item__avatar" src={Avatar} alt="" />
          <div className="sidebar__item__name">Trần Hữu Toàn</div>
        </div>
        <div className="sidebar__item">
          <img className="sidebar__item__avatar" src={Avatar} alt="" />
          <div className="sidebar__item__name">Trần Hữu Toàn</div>
        </div>
        <div className="sidebar__item">
          <img className="sidebar__item__avatar" src={Avatar} alt="" />
          <div className="sidebar__item__name">Trần Hữu Toàn</div>
        </div>
        <div className="sidebar__item">
          <img className="sidebar__item__avatar" src={Avatar} alt="" />
          <div className="sidebar__item__name">Trần Hữu Toàn</div>
        </div>
        <div className="sidebar__item">
          <img className="sidebar__item__avatar" src={Avatar} alt="" />
          <div className="sidebar__item__name">Trần Hữu Toàn</div>
        </div>
        <div className="sidebar__item">
          <img className="sidebar__item__avatar" src={Avatar} alt="" />
          <div className="sidebar__item__name">Trần Hữu Toàn</div>
        </div>
        <div>
          <p className="sidebar__seeAll">Xem tất cả</p>
        </div>
      </div>
      <hr className="hr" />
      <div className="sidebar__list">
        <p className="sidebar__title">Khám phá</p>
      </div>
    </div>
  );
}

export default Sidebar;
