import { React, useState } from "react";
import "../styles/Shortener.scss";
import "../styles/Queries.scss";
import mainImage from "../img/main-image.png";
import CheckIcon from "@mui/icons-material/Check";
import FadeIn from "react-fade-in";

const Shortener = ({ setOriginalUrl, calculateUrl }) => {
  return (
    <FadeIn transitionDuration="1000">
      <div className="shortener">
        <div className="text-container">
          <h1>
            Your <span className="text-urls">URLs</span>, made easy.
          </h1>
          <div className="description-container">
            <p className="description-text">
              2Short allows you to share all of your links, so you don't need to
              change it before posting on Facebook, or tweet your links. You
              only need to remember the easy URL!
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
        </div>
        <img src={mainImage} alt="main image" className="main-image" />
      </div>
    </FadeIn>
  );
};

export default Shortener;
