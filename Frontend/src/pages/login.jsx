import { useOutletContext } from "react-router-dom";
import { useEffect, useState } from "react";
import { useRef } from "react";

import "../login.css";
import useAuth from "../components/use_auth";
import apiRequest from "../assets/services/api";

function Login() {
  // important constants
  const { user, setUser } = useAuth();
  const { navigator } = useOutletContext();

  // Refrences for functionality use and design
  const container = useRef(null);
  const signUp = useRef(null);
  const login = useRef(null);
  const userNameError = useRef(null);
  const loginError = useRef(null);

  const [data, setData] = useState({
    username: "",
    password: "",
    email: "",
  });

  async function handleSignIn(e) {
    e.preventDefault();
    const loader = e.target.getElementsByTagName("button")[0];
    loader.innerHTML = "<i class='bx bx-loader'></i>";

    if (data.username.length > 4 && data.password.length >= 8) {
      const { ok, data: result } = await apiRequest("/login", {
        method: "POST",
        body: { username: data.username, password: data.password },
      });

      if (ok) {
        setUser({
          token: result.access_token,
          username: result.username,
          email: result.email,
        });
        navigator("/dashboard");
      } else {
        loginError.current.innerHTML = result.detail || "Invalid username or password.";
        loginError.current.style.display = "block";
        loginError.current.style.color = "red";
      }
    }

    loader.innerHTML = "Submit";
  }

  async function handleSignUp(e) {
    e.preventDefault();
    const loader = e.target.getElementsByTagName("button")[0];
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    loader.innerHTML = "<i class='bx bx-loader'></i>";

    if (
      data.email.match(emailRegex) &&
      data.username.length > 4 &&
      data.password.length >= 8
    ) {
      const { ok, data: result } = await apiRequest("/signup", {
        method: "POST",
        body: { username: data.username, email: data.email, password: data.password },
      });

      if (ok) {
        setUser({
          token: result.access_token,
          username: result.username,
          email: result.email,
        });
        navigator("/dashboard");
      } else {
        userNameError.current.innerHTML = result.detail || "Could not sign up.";
        userNameError.current.style.display = "block";
        userNameError.current.style.color = "red";
      }
    }

    loader.innerHTML = "Submit";
  }

  useEffect(() => {
    const signUpComp = signUp.current;
    const loginComp = login.current;

    const addSignUpMode = () => {
      setData({
        username: "",
        password: "",
        email: "",
      });
      container.current.classList.add("sign-up-mode");
    };

    const removeSignUpMode = () => {
      setData({
        username: "",
        password: "",
        email: "",
      });
      container.current.classList.remove("sign-up-mode");
    };

    signUpComp.addEventListener("click", addSignUpMode);
    loginComp.addEventListener("click", removeSignUpMode);

    return () => {
      signUpComp.removeEventListener("click", addSignUpMode);
      loginComp.removeEventListener("click", removeSignUpMode);
    };
  }, []);

  return (
    <>
      {user?.username ? (
        navigator("/dashboard")
      ) : (
        <div className="container" ref={container}>
          <div className="forms-container">
            <div className="signin-signup">
              <form className="sign-in-form" onSubmit={handleSignIn}>
                <h2 className="title">Sign in</h2>
                <div className="input-field">
                  <i
                    className="bx bx-log-in-circle"
                    style={{ fontSize: "x-large" }}
                  ></i>
                  <input
                    type="text"
                    placeholder="Username"
                    value={data.username}
                    onChange={(e) =>
                      setData((prev) => ({ ...prev, username: e.target.value }))
                    }
                    required
                  />
                </div>
                <div className="input-field">
                  <i
                    className="bx bxs-lock-alt"
                    style={{ fontSize: "x-large" }}
                  ></i>
                  <input
                    type="password"
                    placeholder="Password"
                    value={data.password}
                    onChange={(e) =>
                      setData((prev) => ({ ...prev, password: e.target.value }))
                    }
                    required
                  />
                </div>
                <p ref={loginError} style={{ display: "none" }}>
                  Invalid username or password.
                </p>
                <button type="submit" className="btn solid">
                  Submit
                </button>
              </form>

              <form className="sign-up-form" onSubmit={handleSignUp}>
                <h2 className="title">Sign up</h2>

                <div className="input-field">
                  <i
                    className="bx bx-log-in-circle"
                    style={{ fontSize: "x-large" }}
                  ></i>
                  <input
                    type="text"
                    placeholder="Username"
                    value={data.username}
                    onChange={(e) =>
                      setData((prev) => ({ ...prev, username: e.target.value }))
                    }
                    required
                  />
                </div>

                <div className="input-field">
                  <i
                    className="bx bx-envelope"
                    style={{ fontSize: "x-large" }}
                  ></i>
                  <input
                    type="email"
                    placeholder="Email"
                    value={data.email}
                    onChange={(e) =>
                      setData((prev) => ({ ...prev, email: e.target.value }))
                    }
                    required
                  />
                </div>

                <div className="input-field">
                  <i
                    className="bx bxs-lock-alt"
                    style={{ fontSize: "x-large" }}
                  ></i>
                  <input
                    type="password"
                    placeholder="Password"
                    value={data.password}
                    onChange={(e) =>
                      setData((prev) => ({ ...prev, password: e.target.value }))
                    }
                    required
                  />
                </div>

                <p ref={userNameError} style={{ display: "none" }}>
                  Username already exist.
                </p>

                <button type="submit" className="btn">
                  Submit
                </button>
              </form>
            </div>
          </div>

          <div className="panels-container">
            <div className="panel left-panel">
              <div className="content">
                <h3>New to our community ?</h3>
                <p>
                  Discover a world of possibilities! Join us and explore a
                  vibrant community where ideas flourish and connections thrive.
                </p>
                <button
                  className="btn transparent"
                  id="sign-up-btn"
                  ref={signUp}
                >
                  Sign up
                </button>
              </div>
              <img
                src="https://i.ibb.co/6HXL6q1/Privacy-policy-rafiki.png"
                className="image"
                alt=""
              />
            </div>
            <div className="panel right-panel">
              <div className="content">
                <h3>One of Our Valued Members</h3>
                <p>
                  Thank you for being part of our community. Your presence
                  enriches our shared experiences. Let&apos;s continue this
                  journey together!
                </p>
                <button
                  className="btn transparent"
                  id="sign-in-btn"
                  ref={login}
                >
                  Sign in
                </button>
              </div>
              <img
                src="https://i.ibb.co/nP8H853/Mobile-login-rafiki.png"
                className="image"
                alt=""
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Login;
