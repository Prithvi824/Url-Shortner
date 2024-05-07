import PropTypes from "prop-types";

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useAuth from "../components/use_auth";
import { useOutletContext } from "react-router-dom";

import Details from "../components/details";
import Footer from "../components/footer";
import Generate from "../components/generate";

import "../css/dashboard.css";

function Dashboard() {
  const { user } = useAuth();
  const { navigator } = useOutletContext();
  const [urls, setUrls] = useState(user.urls || {});

  useEffect(() => {
    if (!user.userName) {
      navigator("/login");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <main>
        <nav className="index navbar">
          <div className="index navbar-container">
            <div className="index navbar-inner-left">
              <Link to="/" className="index website">
                Quick Link
              </Link>
            </div>
            <div className="index navbar-inner-right">
              <ul className="dashboard-nav-right">
                <li>
                  <a href="#details-container">Your Links</a>
                </li>
                <li>
                  <a href="#generator">Generate</a>
                </li>
                <li
                  className="dashboard-pfp"
                  onClick={() => {
                    navigator("/account");
                  }}
                >
                  <i
                    className="bx bx-user"
                    style={{
                      fontSize: "larger",
                      borderRadius: "50%",
                      padding: "10px",
                      background: "rgba(105, 105, 105, 0.4)",
                    }}
                  ></i>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <Generate modifyUrls={setUrls} />
        <Details data={urls} />
        <Footer />
      </main>
    </>
  );
}

Dashboard.propTypes = {
  navigator: PropTypes.func,
};

export default Dashboard;
