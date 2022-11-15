import React, { memo } from "react";
import { IoClose } from "react-icons/io5";
import styles from "./ModalVideo.module.scss";
import Tiktok2 from "~/assets/images/Tiktok2.png";
import { useLocation, useNavigate } from "react-router-dom";
import Image from "~/components/Image";
import VideoDetail from "~/features/videos/components/VideoDetail";
import CustomModal from "~/components/CustomModal";
import { redirectModal } from "~/utils/common";

function ModalVideo() {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <CustomModal fullScreen>
      <VideoDetail data={location.state?.video} />
      <div
        className={styles.close_button}
        onClick={() => redirectModal(location, navigate)}
      >
        <IoClose />
      </div>
      <div
        className={styles.home_button}
        onClick={() => redirectModal(location, navigate)}
      >
        <Image src={Tiktok2} />
      </div>
    </CustomModal>
  );
}

export default memo(ModalVideo);
