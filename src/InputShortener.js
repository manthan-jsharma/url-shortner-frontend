import { useState, useCallback } from "react";
import axios from "axios";

const InputShortener = ({ setInputValue }) => {
  const [value, setValue] = useState("");

  const handleClick = useCallback(() => {
    // add a check for valid url // else show the error

    axios
      .post("http://127.0.0.1:8000/shorten/", {
        longurl: value,
      })
      .then((response) => {
        setInputValue(response?.data?.shorturl);
      });
  }, [setInputValue, value]);

  return (
    <div className="inputContainer">
      <h1>Free URL Shortener</h1>
      <div>
        <input
          type="text"
          placeholder="Paste a link to shorten it"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button onClick={handleClick}>shorten</button>
      </div>
    </div>
  );
};

export default InputShortener;
