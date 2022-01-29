import { React, useState } from "react";
import "../styles/Shortener.scss";
import axios from "axios";
import mainImage from "../img/main-image.png";
import CheckIcon from "@mui/icons-material/Check";

const Shortener = ({
  modalClass,
  setModalClass,
  originalUrl,
  setOriginalUrl,
  calculateUrl,
}) => {
  // const getShortenedUrl = () => {
  //   axios
  //     .get(
  //       `https://api.shrtco.de/v2/shorten?url=example.org/very/long/link.html`
  //     )
  //     .then((res) => setShortenedUrl(res.data.result.short_link));
  // };

  return (
    <div className="shortener">
      <div className="text-container">
        <h1>
          Your <span className="text-urls">URLs</span>, made easy.
        </h1>
        <div className="description-container">
          <p className="description-text">
            2Short allows you to share all of your links, so you don't need to
            change it before posting on Facebook, or tweet your links. You only
            need to remember the easy URL!
          </p>
        </div>
        <input
          type="text"
          onChange={(e) => setOriginalUrl(e.target.value)}
          placeholder="Enter your URL:"
        />
        <button onClick={calculateUrl}>
          SHORTEN <CheckIcon className="check-icon" />
        </button>
        {/* <h1>My Url: {shortenedUrl}</h1>
        <h1>Input: {originalUrl}</h1> */}
      </div>
      <img src={mainImage} alt="main image" className="main-image" />
    </div>
  );
};

export default Shortener;
