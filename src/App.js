import { useState } from "react";

function App() {
  const [longurl, setLongurl] = useState("");
  const [shorturl, setShorturl] = useState("");
  const [returnLongURL, setReturnLongURL] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch("https://url-shorty.up.railway.app/shorten/", {
      credentials: "include",
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        longurl,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        setShorturl(data?.shorturl ?? "");
        setReturnLongURL(data?.longurl ?? "");
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
      <button onClick={handleSubmit} disabled={!longurl}>
        shorten
      </button>

      <div>
        <p>Long URL: {returnLongURL}</p>
        <p>
          Short URL:
          <a
            href={returnLongURL}
            target="_blank"
            rel="noopener noreferrer"
            style={{ marginLeft: "10px", cursor: "pointer" }}
          >
            {shorturl}
          </a>
        </p>
      </div>
    </div>
  );
}

export default App;
