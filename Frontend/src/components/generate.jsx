import PropTypes from "prop-types";

import { useRef, useState } from "react";
import "../css/generate.css";
import useAuth from "./use_auth";

function Generate({ modifyUrls }) {
  const shortnerResult = useRef(null);
  const [url, setUrl] = useState("");
  const { user } = useAuth();

  const urlPattern =
    /^(https?:\/\/)?(www\.)?[-a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&//=]*)$/g;

  async function handleUrlSubmit(e) {
    e.target.innerHTML = "<i class='bx bx-loader'></i>";
    if (url.match(urlPattern)) {
      let response = await fetch("/generate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ url: url, userName: user.userName }),
      });

      if (response.ok) {
        // If response is okay add the url to the list and show it
        let responseData = await response.json();

        // add the url to the list shown to the user
        modifyUrls((prev) => ({
          ...prev,
          [responseData.shortUrl]: url,
        }));

        // Update the output text and style
        shortnerResult.current.className =
          "generator-result generator-result-success";
        shortnerResult.current.innerHTML = location.origin + "/" + responseData.shortUrl;
      } else {
        // Update the output text and style
        shortnerResult.current.className =
          "generator-result generator-result-error";
        shortnerResult.current.innerHTML = "Some server Errror occured";
      }
    } else {
      // Update the output text and style
      shortnerResult.current.className =
        "generator-result generator-result-error";
      shortnerResult.current.innerHTML = "Please enter a valid url";
    }
    e.target.innerHTML = "Submit";
  }
  return (
    <section className="generator" id="generator">
      <div className="generator-inner">
        <h1 className="generator-header">
          Enter a Link you want to make short
        </h1>
        <div className="generator-input-container">
          <input
            type="url"
            className="generator-input"
            id="url"
            onChange={(e) => setUrl(e.target.value)}
          />
          <button className="generator-submit" onClick={handleUrlSubmit}>
            Submit
          </button>
        </div>
        <div className="generator-result-container">
          <h1>Your shorten Link: </h1>
          <p
            className="generator-result generator-result-pending"
            ref={shortnerResult}
          >
            Please enter a url first.
          </p>
        </div>
      </div>
    </section>
  );
}

Generate.propTypes = {
  modifyUrls: PropTypes.func,
};

export default Generate;
