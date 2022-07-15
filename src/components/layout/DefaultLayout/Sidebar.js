import React, { useState } from "react";
import { FaHome } from "react-icons/fa";
import { BsPeople } from "react-icons/bs";
import { BsCameraVideo } from "react-icons/bs";
import { Link } from "react-router-dom";
import Avatar from "~/assets/images/Avatar.jpeg";
import Verify from "~/assets/images/verify.svg";

function Sidebar() {
  const [isActive, setIsActive] = useState(1);

  const handleClick = (value) => {
    setIsActive(value);
  };

  return (
    <div className="sidebar">
      <div className="sidebar__scrollbar">
        <div className="sidebar__tabs">
          <Link
            to="/"
            className={
              isActive === 1 ? "sidebar__tab sidebar__active" : "sidebar__tab"
            }
            onClick={() => handleClick(1)}
          >
            <FaHome className="sidebar__icon" />
            <h2 className="sidebar__title">Dành cho bạn</h2>
          </Link>
          <Link
            to="/following"
            className={
              isActive === 2 ? "sidebar__tab sidebar__active" : "sidebar__tab"
            }
            onClick={() => handleClick(2)}
          >
            <BsPeople className="sidebar__icon" />
            <h2 className="sidebar__title">Đang Follow</h2>
          </Link>
          <Link
            to="/live"
            className={
              isActive === 3 ? "sidebar__tab sidebar__active" : "sidebar__tab"
            }
            onClick={() => handleClick(3)}
          >
            <BsCameraVideo className="sidebar__icon" />
            <h2 className="sidebar__title">LIVE</h2>
          </Link>
        </div>
        <hr className="hr" />
        <div className="sidebar__list">
          <p className="sidebar__title">Tài khoản được đề xuất</p>
          <div className="sidebar__item">
            <img className="sidebar__item__avatar" src={Avatar} alt="" />
            <div className="sidebar__item__name">cristiano_ronaldo</div>
            <img className="verify__author" src={Verify} alt="" />
          </div>
          <div className="sidebar__item">
            <img className="sidebar__item__avatar" src={Avatar} alt="" />
            <div className="sidebar__item__name">cristiano_ronaldo</div>
            <img className="verify__author" src={Verify} alt="" />
          </div>
          <div className="sidebar__item">
            <img className="sidebar__item__avatar" src={Avatar} alt="" />
            <div className="sidebar__item__name">cristiano_ronaldo</div>
            <img className="verify__author" src={Verify} alt="" />
          </div>
          <div className="sidebar__item">
            <img className="sidebar__item__avatar" src={Avatar} alt="" />
            <div className="sidebar__item__name">cristiano_ronaldo</div>
            <img className="verify__author" src={Verify} alt="" />
          </div>
          <div className="sidebar__item">
            <img className="sidebar__item__avatar" src={Avatar} alt="" />
            <div className="sidebar__item__name">cristiano_ronaldo</div>
            <img className="verify__author" src={Verify} alt="" />
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
            <div className="sidebar__item__name">cristiano_ronaldo</div>
            <img className="verify__author" src={Verify} alt="" />
          </div>
          <div className="sidebar__item">
            <img className="sidebar__item__avatar" src={Avatar} alt="" />
            <div className="sidebar__item__name">cristiano_ronaldo</div>
            <img className="verify__author" src={Verify} alt="" />
          </div>
          <div className="sidebar__item">
            <img className="sidebar__item__avatar" src={Avatar} alt="" />
            <div className="sidebar__item__name">cristiano_ronaldo</div>
            <img className="verify__author" src={Verify} alt="" />
          </div>
          <div className="sidebar__item">
            <img className="sidebar__item__avatar" src={Avatar} alt="" />
            <div className="sidebar__item__name">cristiano_ronaldo</div>
            <img className="verify__author" src={Verify} alt="" />
          </div>
          <div className="sidebar__item">
            <img className="sidebar__item__avatar" src={Avatar} alt="" />
            <div className="sidebar__item__name">cristiano_ronaldo</div>
            <img className="verify__author" src={Verify} alt="" />
          </div>
          <div className="sidebar__item">
            <img className="sidebar__item__avatar" src={Avatar} alt="" />
            <div className="sidebar__item__name">cristiano_ronaldo</div>
            <img className="verify__author" src={Verify} alt="" />
          </div>
          <div className="sidebar__item">
            <img className="sidebar__item__avatar" src={Avatar} alt="" />
            <div className="sidebar__item__name">cristiano_ronaldo</div>
            <img className="verify__author" src={Verify} alt="" />
          </div>
          <div className="sidebar__item">
            <img className="sidebar__item__avatar" src={Avatar} alt="" />
            <div className="sidebar__item__name">cristiano_ronaldo</div>
            <img className="verify__author" src={Verify} alt="" />
          </div>
          <div className="sidebar__item">
            <img className="sidebar__item__avatar" src={Avatar} alt="" />
            <div className="sidebar__item__name">cristiano_ronaldo</div>
            <img className="verify__author" src={Verify} alt="" />
          </div>
          <div className="sidebar__item">
            <img className="sidebar__item__avatar" src={Avatar} alt="" />
            <div className="sidebar__item__name">cristiano_ronaldo</div>
            <img className="verify__author" src={Verify} alt="" />
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
    </div>
  );
}

export default Sidebar;
