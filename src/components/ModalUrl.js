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
        <h1 className="modal-title">Your URL is ready!</h1>
        <a
          href={`https://${shortenedUrl}`}
          target="_blank"
          className="shortened-url"
        >
          {shortenedUrl}
        </a>
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
