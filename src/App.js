import "./App.scss";
import Shortener from "./components/Shortener";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <Shortener />
    </div>
  );
}

export default App;
