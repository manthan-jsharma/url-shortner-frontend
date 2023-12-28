import React, { useEffect, useState } from "react";
import axios from "axios";
import { API_URL } from "./constant";

const LinkTable = ({ setModal }) => {
  const [allUrls, setAllUrls] = useState([]);

  const getallUrls = () => {
    axios.post(`${API_URL}/fetchallurl/`).then((response) => {
      setAllUrls(response?.data);
    });
  };

  useEffect(() => {
    getallUrls();
  }, []);

  return (
    <div id="modal-overlay">
      <div className="close-btn" onClick={() => setModal(false)}>
        &#x2715;
      </div>
      <div id="modal">
        <table>
          <caption>URL Shortener Summary</caption>
          <thead>
            <tr>
              <th scope="col">Id</th>
              <th scope="col">LongUrl</th>

              <th scope="col">ShortUrl</th>
            </tr>
          </thead>
          <tbody>
            {allUrls.map((item) => {
              return (
                <tr class="">
                  <td data-label="Id">{item.id}</td>
                  <td data-label="LongUrl">
                    <a
                      href={`${item.longurl}`}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {item.longurl}
                    </a>
                  </td>
                  <td data-label="ShortUrl">
                    <a
                      href={`${API_URL}/${item.shorturl}`}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {`${API_URL}/${item.shorturl}`}
                    </a>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default LinkTable;
