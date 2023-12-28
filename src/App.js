import { useState } from "react";
import "./App.css";
import BackgroundAnimate from "./BackgroundAnimate";
import InputShortener from "./InputShortener";
import LinkResult from "./LinkResult";
import LinkTable from "./LinkTable";

function App() {
  const [modal, setModal] = useState(false);
  const [inputValue, setInputValue] = useState("");

  return (
    <>
      {modal && <LinkTable setModal={setModal} />}
      <div className="container">
        <InputShortener setInputValue={setInputValue} />
        <BackgroundAnimate />
        <LinkResult inputValue={inputValue} />
        <button onClick={() => setModal(true)} class="custom-btn btn-1">
          Show all links
        </button>
      </div>
    </>
  );
}

export default App;
