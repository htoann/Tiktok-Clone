import React from "react";
import { FaHome } from "react-icons/fa";
import { BsPeople } from "react-icons/bs";
import { BsCameraVideo } from "react-icons/bs";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar__tabs">
        <div className="sidebar__tab">
          <FaHome className="sidebar__icon sidebar__active" />
          <h2 className="sidebar__title sidebar__active">Dành cho bạn</h2>
        </div>
        <div className="sidebar__tab">
          <BsPeople className="sidebar__icon" />
          <h2 className="sidebar__title">Đang Follow</h2>
        </div>
        <div className="sidebar__tab">
          <BsCameraVideo className="sidebar__icon" />
          <h2 className="sidebar__title">LIVE</h2>
        </div>
      </div>
      <hr className="hr" />
      <div className="sidebar__suggest">
        <p className="sidebar__suggest__title">Tài khoản được đề xuất</p>
        <div className="sidebar__suggest__account">Trần Hữu Toàn</div>
        <div className="sidebar__suggest__account">Trần Hữu Toàn</div>
        <div className="sidebar__suggest__account">Trần Hữu Toàn</div>
        <div className="sidebar__suggest__account">Trần Hữu Toàn</div>
        <div className="sidebar__suggest__account">Trần Hữu Toàn</div>
        <div>
          <p className="sidebar__suggest__seeAll">Xem tất cả</p>
        </div>
      </div>
      <hr className="hr" />
    </div>
  );
}

export default Sidebar;
