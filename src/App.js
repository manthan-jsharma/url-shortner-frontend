import { useState } from "react";

function App() {
  const [longurl, setLongurl] = useState("");
  const [shorturl, setShorturl] = useState("");
  const [returnLongURL, setReturnLongURL] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch(
      "https://url-shortner-backend-production-6c89.up.railway.app/shorten",
      {
        method: "POST",
        body: JSON.stringify({ longurl: longurl }),
        headers: { "Content-Type": "application/json" },
      }
    )
      .then((res) => res.json())
      .then((data) => {
        setShorturl(data.shorturl);
        setReturnLongURL(data.longurl);
        setLongurl("");
      });
  };

  return (
    <div style={{ textAlign: "center", marginTop: "2rem" }}>
      <input
        type="text"
        name="longurl"
        value={longurl}
        onChange={(e) => setLongurl(e.target.value)}
      />
      <button
        type="submit"
        onClick={(e) => handleSubmit(e)}
        disabled={!longurl}
      >
        shorten
      </button>

      <div>
        <p>Long URL: {returnLongURL}</p>
        <p
          style={{ cursor: "pointer" }}
          onClick={() => window.open(returnLongURL)}
        >
          Short URL: {shorturl}
        </p>
      </div>
    </div>
  );
}

export default App;
