import React from "react";
import Siu from "~/assets/videos/Siu.mp4";
import Avatar from "~/assets/images/Avatar.jpeg";
import Verify from "~/assets/images/verify.svg";
import { FaHeart, FaCommentDots, FaShare } from "react-icons/fa";
import Button from "~/components/Button";

function Home() {
  return (
    <div className="home">
      <div className="main-container">
        <div className="recommend-list-item-container">
          <img className="avatar-author" src={Avatar} alt="" />
          <div className="content-container">
            <div className="text-info-container">
              <div className="text-info">
                <div className="author-container">
                  <h3 className="username-author">cristiano_ronaldo</h3>
                  <img src={Verify} alt="" />
                  <h3 className="name-author">Cristiano Ronaldo</h3>
                </div>
                <span className="video-desc-text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Ratione, incidunt non distinctio nemo saepe nulla architecto
                  quam id nihil corporis et amet? Corporis dolorum sed alias
                  expedita iste
                </span>
              </div>
              <Button outline>Follow</Button>
            </div>
            <div className="video-wrapper">
              <div className="video-card">
                <video controls src={Siu} autoPlay loop muted></video>
              </div>
              <div className="action-items">
                <div className="action-button">
                  <div className="icon">
                    <FaHeart />
                  </div>
                  <strong className="count">484.3K</strong>
                </div>
                <div className="action-button">
                  <div className="icon">
                    <FaCommentDots />
                  </div>
                  <strong className="count">502</strong>
                </div>
                <div className="action-button">
                  <div className="icon">
                    <FaShare />
                  </div>
                  <strong className="count">7482</strong>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr className="hr" />

        <div className="recommend-list-item-container">
          <img className="avatar-author" src={Avatar} alt="" />
          <div className="content-container">
            <div className="text-info-container">
              <div className="text-info">
                <div className="author-container">
                  <h3 className="username-author">cristiano_ronaldo</h3>
                  <img src={Verify} alt="" />
                  <h3 className="name-author">Cristiano Ronaldo</h3>
                </div>
                <span className="video-desc-text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Ratione, incidunt non distinctio nemo saepe nulla architecto
                  quam id nihil corporis et amet? Corporis dolorum sed alias
                  expedita iste
                </span>
              </div>
              <Button outline>Follow</Button>
            </div>
            <div className="video-wrapper">
              <div className="video-card">
                <video controls src={Siu} loop muted></video>
              </div>
              <div className="action-items">
                <div className="action-button">
                  <div className="icon">
                    <FaHeart />
                  </div>
                  <strong className="count">484.3K</strong>
                </div>
                <div className="action-button">
                  <div className="icon">
                    <FaCommentDots />
                  </div>
                  <strong className="count">502</strong>
                </div>
                <div className="action-button">
                  <div className="icon">
                    <FaShare />
                  </div>
                  <strong className="count">7482</strong>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr className="hr" />
      </div>
    </div>
  );
}

export default Home;
