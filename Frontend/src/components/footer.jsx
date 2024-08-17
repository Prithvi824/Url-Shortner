import React from "react";

function Footer() {
  return (
    <div className="footer main-logo-container">
      <div className="footer text small:!w-11/12 text-center">
        <div className="footer logo-container">
          <i className="bx bxl-facebook"></i>
          <i className="bx bxl-instagram"></i>
          <i className="bx bxl-twitter"></i>
          <i className="bx bxl-youtube"></i>
          <i className="bx bxl-whatsapp"></i>
        </div>
        <br />
        <p className="small:text-sm">
          A URL shortener is a tool used to condense long URLs into shorter,
          more manageable links. These shortened URLs redirect users to the
          original, longer URL when clicked.{" "}
        </p>
      </div>
      <h1 className="foot company-name btn-shine tablet:!ml-0">QuickLinks</h1>
    </div>
  );
}

export default Footer;
