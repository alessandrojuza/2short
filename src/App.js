import { React, useState } from "react";
import "./App.scss";
import Header from "./components/Header";
import Shortener from "./components/Shortener";
import ModalUrl from "./components/ModalUrl";

function App() {
  const [modalClass, setModalClass] = useState("");

  return (
    <div className="App">
      <Header />
      <Shortener modalClass={modalClass} setModalClass={setModalClass} />
      <ModalUrl modalClass={modalClass} setModalClass={setModalClass} />
    </div>
  );
}

export default App;
