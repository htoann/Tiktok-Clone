import React from "react";
import { IoClose } from "react-icons/io5";
import Modal from "react-modal";
import styles from "./ModalVideoDetail.module.scss";
import Tiktok2 from "~/assets/images/Tiktok2.png";
import Image from "../../../../components/Image";
import VideoDetail from "../VideoDetail";

Modal.setAppElement("div");

const customStyles = {
  overlay: { zIndex: 10 },
  zIndex: "10",
  position: "relative",
  content: {
    position: "fixed",
    position: "relative",
    inset: "0px",
    background: "rgb(255, 255, 255)",
    zIndex: "10",
    display: "flex",
    flexDirection: "row",
  },
};

function ModalVideoDetail(props) {
  function onModalClose(event) {
    props.onCloseModal(event);
  }

  return (
    <div>
      <Modal isOpen={props.IsModalOpened} style={customStyles}>
        <VideoDetail video={props.dynData.content} />

        <div className={styles.close_button} onClick={onModalClose}>
          <IoClose />
        </div>
        <div className={styles.home_button} onClick={onModalClose}>
          <Image src={Tiktok2} />
        </div>
      </Modal>
    </div>
  );
}

export default ModalVideoDetail;
