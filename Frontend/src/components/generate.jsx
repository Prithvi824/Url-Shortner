import PropTypes from "prop-types";

import { useRef, useState } from "react";
import "../css/generate.css";
import apiRequest from "../assets/services/api";

function Generate({ token, onCreated }) {
  const shortnerResult = useRef(null);
  const [url, setUrl] = useState("");

  const urlPattern =
    /^(https?:\/\/)?(www\.)?[-a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&//=]*)$/g;

  async function handleUrlSubmit(e) {
    e.target.innerHTML = "<i class='bx bx-loader'></i>";
    if (url.match(urlPattern)) {
      const { ok, data } = await apiRequest("/shorten", {
        method: "POST",
        token,
        body: { url },
      });

      if (ok) {
        // create the url from the current host
        data.short_url = `${window.location.origin}/api/${data.short_code}`;

        // add the url to the list shown to the user
        onCreated({
          code: data.short_code,
          target_url: url,
          is_active: true,
          click_count: 0,
          created_at: new Date().toISOString(),
        });

        // Update the output text and style
        shortnerResult.current.className =
          "generator-result generator-result-success";
        shortnerResult.current.innerHTML = data.short_url;
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
  token: PropTypes.string,
  onCreated: PropTypes.func,
};

export default Generate;
