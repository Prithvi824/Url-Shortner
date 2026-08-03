import { useRef, useState } from "react";
import useAuth from "./use_auth";
import apiRequest from "../assets/services/api";

function AccountDetails() {
  const { user, setUser } = useAuth();
  const submitBtn = useRef(null);

  const [inputUserName, setUserName] = useState(user.username);
  const [inputEmail, setEmail] = useState(user.email);
  const [userNameError, setUserNameError] = useState(false);

  async function handleSubmit() {
    if (submitBtn.current.classList.contains("lock")) {
      return;
    }

    const body = {};
    if (inputUserName !== user.username) body.username = inputUserName;
    if (inputEmail !== user.email) body.email = inputEmail;

    const { ok, data } = await apiRequest("/account", {
      method: "PATCH",
      token: user.token,
      body,
    });

    if (ok) {
      setUser((prev) => ({
        ...prev,
        token: data.access_token,
        username: data.username,
        email: data.email,
      }));
      setUserNameError(false);
    } else if (data.detail && data.detail.toLowerCase().includes("username")) {
      setUserNameError(true);
      setUserName(user.username);
    }

    submitBtn.current.classList.add("lock");
  }

  return (
    <>
      <div className="account-content-header">
        <h1>Account</h1>
      </div>
      <div className="account-content-inner">
        <label htmlFor="name">User Name</label>
        <input
          type="text"
          id="name"
          value={inputUserName}
          onChange={(e) => {
            setUserName(e.target.value);
            submitBtn.current.classList.remove("lock");
          }}
        />
      </div>
      <div className="account-content-inner">
        <label htmlFor="email">Email Address</label>
        <input
          type="email"
          id="email"
          value={inputEmail}
          onChange={(e) => {
            setEmail(e.target.value);
            submitBtn.current.classList.remove("lock");
          }}
        />
      </div>
      {userNameError && (
        <p style={{ color: "red", margin: "0 0 -20px 0" }}>
          UserName Already exist
        </p>
      )}
      <div
        className="Password-submit lock"
        onClick={handleSubmit}
        ref={submitBtn}
      >
        <button>Submit</button>
      </div>
    </>
  );
}

export default AccountDetails;
