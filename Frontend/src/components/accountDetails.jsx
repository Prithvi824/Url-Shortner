import { useRef, useState } from "react";
import useAuth from "./use_auth";

function AccountDetails() {
  const { user, setUser } = useAuth();
  const submitBtn = useRef(null);

  const [inpitUserName, setUserName] = useState(user.userName);
  const [inputEmail, setEmail] = useState(user.email);
  const [userNameError, setUserNameError] = useState(false);

  async function handleSubmit() {
    if (submitBtn.current.classList.contains("lock")) {
      return;
    }

    const headers = {
      "Content-Type": "application/json",
    };

    if (user.userName != inpitUserName) headers["usernameupdate"] = true;
    if (user.email != inputEmail) headers["emailupdate"] = true;

    const body = JSON.stringify({
      owner: user.userName,
      userName: inpitUserName,
      email: inputEmail,
    });

    let response = await fetch("/update", {
      method: "POST",
      headers: headers,
      body: body,
    });

    const responseData = await response.json();

    if (responseData.success) {
      setUser((prev) => {
        return { ...prev, userName: inpitUserName, email: inputEmail };
      });
    } else if (responseData.userExist) {
      setUserNameError(responseData.userExist);
      setUserName(user.userName)
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
          value={inpitUserName}
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
