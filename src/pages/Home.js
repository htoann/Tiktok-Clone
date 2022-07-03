import React from "react";

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
              <video
                controls
                src="https://v16-webapp.tiktok.com/0ec88f1fe176cbd2f79b654c4b25f8aa/62c21852/video/tos/useast2a/tos-useast2a-pve-0037-aiso/2618eeea53d044888b405d17406955e9/?a=1988&ch=0&cr=0&dr=0&lr=tiktok&cd=0%7C0%7C1%7C0&cv=1&br=2662&bt=1331&btag=80000&cs=0&ds=3&ft=eXd.6Hk_Myq8Zjav6we2NMGQml7Gb&mime_type=video_mp4&qs=0&rc=OjpkaGY3OjM3aTo4ZDg8PEBpamdoPDs6ZnZuPDMzZjgzM0BiXzJhL19eNmAxMTZfYTYuYSNxMWxlcjQwZ2lgLS1kL2Nzcw%3D%3D&l=2022070316292201024420306604C7C74C"
                loop
                autoPlay
                muted
              ></video>
            </div>
            <div className="action__item">Like</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
