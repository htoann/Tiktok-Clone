import React from "react";
import Siu from "~/assets/videos/Siu.mp4";

function Home() {
  return (
    <div className="home">
      <div className="recommend__list__item__container">
        <div className="content__container">
          <div className="text__info__container">
            <div className="author"></div>
            <button className="button__follow"></button>
            <div className="video__desc"></div>
            <div className="video__music"></div>
          </div>
          <div className="video__wrapper">
            <div className="video__card">
              <video controls src={Siu} loop autoPlay muted></video>
            </div>
            <div className="action__item">Like</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
