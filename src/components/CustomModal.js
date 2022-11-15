import React, { memo } from "react";
import Modal from "react-modal";
import { useLocation, useNavigate } from "react-router-dom";
import { redirectModal } from "~/utils/common";

Modal.setAppElement("div");

const fullScreen = {
  pointerEvents: "none",
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

const small = {};

function CustomModal({ children, ...props }) {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <Modal
      isOpen={true}
      style={props.fullScreen ? fullScreen : small}
      onRequestClose={() => redirectModal(location, navigate)}
      {...props}
    >
      {children}
    </Modal>
  );
}

export default memo(CustomModal);
