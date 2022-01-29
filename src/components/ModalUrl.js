import { React, useState } from "react";
import "../styles/ModalUrl.scss";
import CloseIcon from "@mui/icons-material/Close";

const ModalUrl = ({ modalClass, setModalClass, shortenedUrl }) => {
  const closeModal = () => {
    setModalClass("hidden");
  };

  return (
    <div className="modal-and-background">
      <div className={`dark-background ${modalClass}`}></div>
      <div className={`modal-url ${modalClass}`}>
        <h1>Your URL is ready!</h1>
        <h1>{shortenedUrl}</h1>
        <div className="button-container">
          <button className="btn-close" onClick={closeModal}>
            CLOSE
            <CloseIcon className="close-icon" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModalUrl;
