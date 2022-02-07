import { React, useState } from "react";
import "../styles/ModalAbout.scss";
import CloseIcon from "@mui/icons-material/Close";

const ModalAbout = ({ modalAboutClass, setModalAboutClass }) => {
  const closeModal = () => {
    setModalAboutClass("hidden");
  };

  return (
    <div className="modal-and-background">
      <div className={`dark-background ${modalAboutClass}`}></div>
      <div className={`modal-url ${modalAboutClass}`}>
        <p className="text-body">
          2short is a free online URL shortener that allows you to tighten long
          web addresses. It allows you to easily share shortened links through
          SMS, e-mail and popular social media sites. Simply type in the website
          address you want to visit into the 2SHORT site and our engine will
          create a shorter URL. You can then use this HTML link to shorten URLs
          for Twitter, YouTube, E-mail and other websites. The best part about
          this feature is that it does not require any registration or account
          creation whatsoever.
        </p>

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

export default ModalAbout;
