import { useEffect, useState } from "react";
import { Link, useOutletContext } from "react-router-dom";
import useAuth from "../components/use_auth";

import Password from "../components/password";
import AccountDetails from "../components/accountDetails";

import "../css/account.css";

function Account() {
  const { user } = useAuth();
  const { navigator } = useOutletContext();
  const [activeAccount, setActiveAccount] = useState(true);

  useEffect(() => {
    if (!user.userName || !user.email) {
      navigator("/login")
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
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
                <Link to="/dashboard">Your Links</Link>
              </li>
              <li>
                <Link to="/dashboard">Generate</Link>
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
      <div className="account main-div">
        <div className="account main-container">
          <div className="account-selection">
            <ul
              className="account-selection-inner"
              style={{ cursor: "pointer" }}
            >
              <li
                className={`${activeAccount && "selection-selected"}`}
                onClick={() => {
                  setActiveAccount(true);
                }}
              >
                Settings
              </li>
              <li
                className={`${!activeAccount && "selection-selected"}`}
                onClick={() => {
                  setActiveAccount(false);
                }}
              >
                Password
              </li>
            </ul>
          </div>
          <div className="account-content">
            <div className="account-content-container">
              {activeAccount && <AccountDetails />}
              {!activeAccount && <Password />}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Account;
