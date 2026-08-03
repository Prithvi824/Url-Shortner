import { useRef, useState } from "react";
import "../css/password.css";
import useAuth from "./use_auth";
import apiRequest from "../assets/services/api";

function Password() {
  const submitBtn = useRef(null);
  const { user } = useAuth();

  const [oldPassword, setOldPassword] = useState("");
  const [password, setPassword] = useState("");
  const [cnfPassword, setCnfPassword] = useState("");

  const changeStatus = useRef(null);

  async function handleSubmit() {
    if (submitBtn.current.classList.contains("lock")) {
      return;
    }

    if (password !== cnfPassword) {
      changeStatus.current.innerHTML =
        "Make sure your new password matches the confirm password.";
      changeStatus.current.style.color = "red";
    } else {
      const { ok } = await apiRequest("/account/password", {
        method: "POST",
        token: user.token,
        body: { old_password: oldPassword, new_password: cnfPassword },
      });

      setCnfPassword("");
      setOldPassword("");
      setPassword("");

      if (ok) {
        changeStatus.current.innerHTML = "Password was changed succesfully";
        changeStatus.current.style.color = "lightgreen";
      } else {
        changeStatus.current.innerHTML = "Old password was incorrect.";
        changeStatus.current.style.color = "red";
      }
    }
    changeStatus.current.style.display = "block";
    submitBtn.current.classList.add("lock");
  }

  return (
    <div className="passowrd-container-main">
      <div className="Password-header">
        <h1>Password</h1>
      </div>
      <br />
      <div className="Password-container">
        <label htmlFor="oldPassword">Current Password - </label>
        <input
          type="Password"
          id="oldPassword"
          placeholder="Password"
          value={oldPassword}
          onChange={(e) => {
            setOldPassword(e.target.value);
            if (cnfPassword && password && oldPassword) {
              submitBtn.current.classList.remove("lock");
            }
          }}
        />
      </div>
      <br />
      <div className="Password-container">
        <label htmlFor="newPassword">New Password - </label>
        <input
          type="Password"
          id="newPassword"
          placeholder="Password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
            if (cnfPassword && password && oldPassword) {
              submitBtn.current.classList.remove("lock");
            }
          }}
        />
      </div>
      <br />

      <div className="Password-container">
        <label htmlFor="cnfPassword">Re-Enter Password - </label>
        <input
          type="Password"
          id="cnfPassword"
          placeholder="Password"
          value={cnfPassword}
          onChange={(e) => {
            setCnfPassword(e.target.value);
            if (cnfPassword && password && oldPassword) {
              submitBtn.current.classList.remove("lock");
            }
          }}
        />
        <br />
        <p ref={changeStatus} style={{ margin: "0 0 6px 0", display: "none" }}>
          Make sure your old password is correct
        </p>

        <div
          className="Password-submit lock"
          onClick={handleSubmit}
          ref={submitBtn}
        >
          <button type="submit">Submit</button>
        </div>
      </div>
    </div>
  );
}

export default Password;
