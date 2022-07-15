import React from "react";
import Siu from "~/assets/videos/Siu.mp4";
import Avatar from "~/assets/images/Avatar.jpeg";
import Verify from "~/assets/images/verify.svg";
import { FaHeart, FaRegCommentDots, FaShare } from "react-icons/fa";

function Home() {
  return (
    <div className="home">
      <div className="main__container">
        <div className="recommend__list__item__container">
          <img className="avatar-author" src={Avatar} alt="" />
          <div className="content__container">
            <div className="text__info__container">
              <div className="text__info">
                <div className="author__container">
                  <h3 className="username__author">cristiano_ronaldo</h3>
                  <img src={Verify} alt="" />
                  <h3 className="name__author">Cristiano Ronaldo</h3>
                </div>

                <span className="video__desc__text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Ratione, incidunt non distinctio nemo saepe nulla architecto
                  quam id nihil corporis et amet? Corporis dolorum sed alias
                  expedita iste
                </span>
              </div>

              <button className="button__follow__author">Follow</button>
            </div>
            <div className="video__wrapper">
              <div className="video__card">
                <video controls src={Siu} loop autoPlay muted></video>
              </div>
              <div className="action__items">
                <div className="like__button">
                  <FaHeart className="icon" />
                  <strong className="count">484.3K</strong>
                </div>
                <div className="comment__button">
                  <FaRegCommentDots className="icon" />
                  <strong className="count">502</strong>
                </div>
                <div className="share__button">
                  <FaShare className="icon" />
                  <strong className="count">7482</strong>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
