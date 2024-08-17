import securityImg from "../assets/svgs/security.svg";
import fastImg from "../assets/svgs/fast.svg";
import comuunityImg from "../assets/svgs/community.svg";
import analyticsImg from "../assets/svgs/analytics.svg";

function Features() {
  return (
    <div className="index features">
      <div className="index features-container ">
        <h1 className="index features-heading">Things we offer</h1>
        <p className="index features-text small:-mr-12">View all</p>
      </div>

      <div className="">
        <ul className="index features-card tablet:flex-col">
          <li>
            <div className="index features-card-inner">
              <div
                style={{ width: "250px", height: "250px", overflow: "hidden" }}
              >
                <img
                  src={securityImg}
                  alt=""
                  className="index features-card-img"
                />
              </div>
              <div className="index features-card-text">
                <h1>Security!!</h1>
                <p>
                  Complete security of your links and your brand at fingertips.
                </p>
              </div>
            </div>
          </li>

          <li>
            <div className="index features-card-inner">
              <div
                style={{ width: "250px", height: "250px", overflow: "hidden" }}
              >
                <img src={fastImg} alt="" className="index features-card-img" />
              </div>
              <div className="index features-card-text">
                <h1>Fast!!</h1>
                <p>
                  We at QuickLink provides the fastest redirects among our
                  competitors.
                </p>
              </div>
            </div>
          </li>

          <li>
            <div className="index features-card-inner">
              <div
                style={{ width: "250px", height: "250px", overflow: "hidden" }}
              >
                <img
                  src={comuunityImg}
                  alt=""
                  className="index features-card-img"
                  style={{ scale: "1.2" }}
                />
              </div>
              <div className="index features-card-text">
                <h1>Amazing Community.</h1>
                <p>
                  At quickLinks we provide amazing community for your help over a single call or text.
                </p>
              </div>
            </div>
          </li>

          <li>
            <div className="index features-card-inner">
              <div
                style={{ width: "250px", height: "250px", overflow: "hidden" }}
              >
                <img src={analyticsImg} alt="" className="index features-card-img" />
              </div>
              <div className="index features-card-text">
                <h1>Analytics</h1>
                <p>
                  Our best lies in how we serve where your links have been and how did people react.
                </p>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Features;
