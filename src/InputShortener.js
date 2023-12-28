import { useState, useCallback } from "react";
import axios from "axios";
import { API_URL } from "./constant";

const InputShortener = ({ setInputValue }) => {
  const [value, setValue] = useState("");

  const handleClick = useCallback(() => {
    // add a check for valid url // else show the error

    axios
      .post(`${API_URL}/shorten/`, {
        longurl: value,
      })
      .then((response) => {
        setInputValue(`${API_URL}/${response?.data?.shorturl}`);
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
