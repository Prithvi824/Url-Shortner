import { Link } from "react-router-dom";
import useWindowWidth from "../assets/services/useWindowWidth";

import heroImg from "../assets/images/hero.jpg";
import planeImg from "../assets/images/plane.png";
import planetImg from "../assets/images/planet.png";
import rainbowImg from "../assets/images/rainbow.png";
import rocketImg from "../assets/images/rocket.png";

function Hero() {
  const width = useWindowWidth();

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
                }}
                className="sm:py-2 sm:px-3 sm:text-sm py-3 px-4"
              >
                Sign in
              </button>
            </Link>
            <Link to={"/login"}>
              <button
                className="sm:py-2 sm:px-3 sm:text-sm py-3 px-4"
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
            <h1 className="small:-mt-28 tablet:-mt-28">Build stronger digital connections.</h1>
            <br />
            <p>
              Use our URL shortener, QR Codes, and Link-in-bio pages to engage
              your audience and connect them to the right information. Build,
              edit, and track everything inside the Bitly Connections Platform.
            </p>
            <div className="index btn-container">
              <button className="index ui-btn small:text-sm small:-mt-6">
                <span>Free Trial</span>
              </button>
              <button className="index ui-btn small:text-sm small:-mt-6">
                <span>Short URL</span>
              </button>
            </div>
          </div>
          {width >= 600 ? (
            <div className="index hero-img-container">
              {width >= 600 ? (
                <img src={heroImg} alt="" className="index hero-img" />
              ) : (
                <></>
              )}
            </div>
          ) : (
            <></>
          )}

          {width >= 600 ? (
            <>
              <img src={planeImg} alt="" className="index-rocket sm:hidden sm:-mt-4" />
              <img src={planetImg} alt="" className="index-planet sm:hidden" />
              <img
                src={rainbowImg}
                alt=""
                className="index-rainbow sm:hidden"
              />
              <img src={rocketImg} alt="" className="index-rocket2 sm:hidden" />
            </>
          ) : (
            <></>
          )}
        </div>
      </div>
    </section>
  );
}

export default Hero;
