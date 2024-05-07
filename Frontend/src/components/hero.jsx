import { Link } from "react-router-dom";

import heroImg from "../assets/images/hero.jpg";
import planeImg from "../assets/images/plane.png";
import planetImg from "../assets/images/planet.png";
import rainbowImg from "../assets/images/rainbow.png";
import rocketImg from "../assets/images/rocket.png";

function Hero() {
  return (
    <section className="index hero">
      <nav className="index navbar">
        <div className="index navbar-container">
          <div className="index navbar-inner-left">
            <Link to="/" className="index website">
              Quick Link
            </Link>
          </div>
          <div className="index navbar-inner-right">
            <Link to={"/login"}>
              <button
                style={{
                  background: "linear-gradient(to bottom, #368DCA, #1B6DAA)",
                  padding: "10px 18px 10px 18px",
                }}
              >
                Sign in
              </button>
            </Link>
            <Link to={"/login"}>
              <button
                style={{
                  background: "linear-gradient(to bottom, #82B133, #6F972B)",
                }}
              >
                Sign up
              </button>
            </Link>
          </div>
        </div>
      </nav>
      <div className="index hero-main">
        <div className="index hero-container">
          <div className="index hero-text">
            <h1>Build stronger digital connections.</h1>
            <br />
            <p>
              Use our URL shortener, QR Codes, and Link-in-bio pages to engage
              your audience and connect them to the right information. Build,
              edit, and track everything inside the Bitly Connections Platform.
            </p>
            <div className="index btn-container">
              <button className="index ui-btn">
                <span>Free Trial</span>
              </button>
              <button className="index ui-btn">
                <span>Short URL</span>
              </button>
            </div>
          </div>
          <div className="index hero-img-container">
            <img src={heroImg} alt="" className="index hero-img" />
          </div>

          <img src={planeImg} alt="" className="index-rocket" />
          <img src={planetImg} alt="" className="index-planet" />
          <img src={rainbowImg} alt="" className="index-rainbow" />
          <img src={rocketImg} alt="" className="index-rocket2" />
        </div>
      </div>
    </section>
  );
}

export default Hero;
