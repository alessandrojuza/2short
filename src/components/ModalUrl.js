import { React, useState } from "react";
import "../styles/ModalUrl.scss";

const ModalUrl = ({ modalClass, setModalClass }) => {
  const closeModal = () => {
    setModalClass("hidden");
  };

  return (
    <div className="modal-and-background">
      <div className={`dark-background ${modalClass}`}></div>
      <div className={`modal-url ${modalClass}`}>
        <h1>Your URL is ready!</h1>
        <h1>URL URL URL</h1>
        <div className="button-container">
          <button className="btn-close" onClick={closeModal}>
            CLOSE
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModalUrl;
