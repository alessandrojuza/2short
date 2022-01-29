import { React, useState } from "react";
import "../styles/Shortener.scss";
import axios from "axios";
import mainImage from "../img/main-image.png";

const Shortener = () => {
  const getShortenedUrl = () => {
    axios
      .get(
        `https://api.shrtco.de/v2/shorten?url=example.org/very/long/link.html`
      )
      .then((res) => setShortenedUrl(res.data.result.short_link));
  };

  const [shortenedUrl, setShortenedUrl] = useState("");
  const [originalUrl, setOriginalUrl] = useState("");
  return (
    <div className="shortener">
      <div className="text-container">
        <h1>
          Your <span className="text-urls">URLs</span>, made easy.
        </h1>
        <p className="description-text">
          2Short allows you to share all of your links, So you don't need to
          change it before past posting on Facebook, or tweet your links, You
          only need to remember the easy URL!
        </p>
        <input type="text" onChange={(e) => setOriginalUrl(e.target.value)} />
        <button onClick={getShortenedUrl}>SHORTEN</button>
        {/* <h1>My Url: {shortenedUrl}</h1>
        <h1>Input: {originalUrl}</h1> */}
      </div>
      <img src={mainImage} alt="main image" className="main-image" />
    </div>
  );
};

export default Shortener;
