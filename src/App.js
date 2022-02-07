import { React, useState } from "react";
import axios from "axios";
import "./App.scss";
import "./styles/Queries.scss";
import Header from "./components/Header";
import Shortener from "./components/Shortener";
import ModalUrl from "./components/ModalUrl";
import ModalAbout from "./components/ModalAbout";

function App() {
  const [modalClass, setModalClass] = useState("hidden");
  const [modalAboutClass, setModalAboutClass] = useState("hidden");
  const [originalUrl, setOriginalUrl] = useState("");
  const [shortenedUrl, setShortenedUrl] = useState("");

  const calculateUrl = () => {
    if (originalUrl !== "") {
      axios
        .get(
          `https://api.shrtco.de/v2/shorten?url=${originalUrl}/very/long/link.html`
        )
        .then((res) => setShortenedUrl(res.data.result.short_link));
      setModalClass("");
    } else alert("Please enter a valid URL!");
  };

  const showModalAbout = () => {
    setModalAboutClass("");
  };

  return (
    <div className="App">
      <Header showModalAbout={showModalAbout} />
      <Shortener
        modalClass={modalClass}
        setModalClass={setModalClass}
        originalUrl={originalUrl}
        setOriginalUrl={setOriginalUrl}
        calculateUrl={calculateUrl}
        shortenedUrl={shortenedUrl}
        setShortenedUrl={setShortenedUrl}
      />
      <ModalUrl
        modalClass={modalClass}
        setModalClass={setModalClass}
        shortenedUrl={shortenedUrl}
        setOriginalUrl={setOriginalUrl}
      />
      <ModalAbout
        modalAboutClass={modalAboutClass}
        setModalAboutClass={setModalAboutClass}
      />
    </div>
  );
}

export default App;
