import { useOutletContext } from "react-router-dom";
import { useEffect, useState } from "react";
import { useRef } from "react";

import "../login.css";
import useAuth from "../components/use_auth";

function Login() {
  // important constants
  const { user, setUser } = useAuth();
  const { navigator } = useOutletContext();

  // Refrences for functionality use and design
  const container = useRef(null);
  const signUp = useRef(null);
  const login = useRef(null);
  const userNameError = useRef(null);

  const [data, setData] = useState({
    userName: "",
    password: "",
    email: "",
  });

  async function handleFormSubmit(e) {
    e.preventDefault();
    const loader = e.target.getElementsByTagName("button")[0];
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    // Start the Loader
    loader.innerHTML = "<i class='bx bx-loader'></i>";

    if (
      data.email.match(emailRegex) &&
      data.userName.length > 4 &&
      data.password.length >= 8
    ) {
      // Send the request to server
      let response = await fetch("/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      // Parse the response and set the user
      let responseData = await response.json();
      if (responseData.success) {
        setUser({
          email: responseData.email,
          userName: responseData.userName,
          urls: {},
        });
        navigator("/dashboard");
      } else if (responseData.userExist) {
        userNameError.current.style.display = "block";
        userNameError.current.style.color = "red";
      }
    } else if (data.userName.length > 4 && data.password.length >= 8) {
      // Send req to the server
      let response = await fetch("/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      // Parse the response and set the user
      let responseData = await response.json();
      if (responseData.success) {
        setUser({
          userName: responseData.userName,
          email: responseData.email,
          urls: responseData.urls,
        });

        navigator("/dashboard");
      } else if (responseData.userExist) {
        userNameError.current.style.display = "block";
        userNameError.current.style.color = "red";
      }
    }

    // Remove The loader
    loader.innerHTML = "Submit";
  }

  useEffect(() => {
    const signUpComp = signUp.current;
    const loginComp = login.current;

    const addSignUpMode = () => {
      setData({
        userName: "",
        password: "",
        email: "",
      });
      container.current.classList.add("sign-up-mode");
    };

    const removeSignUpMode = () => {
      setData({
        userName: "",
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
      {user?.userName ? (
        navigator("/dashboard")
      ) : (
        <div className="container" ref={container}>
          <div className="forms-container">
            <div className="signin-signup">
              <form className="sign-in-form" onSubmit={handleFormSubmit}>
                <h2 className="title">Sign in</h2>
                <div className="input-field">
                  <i
                    className="bx bx-log-in-circle"
                    style={{ fontSize: "x-large" }}
                  ></i>
                  <input
                    type="text"
                    placeholder="Username"
                    onChange={(e) =>
                      setData((prev) => ({ ...prev, userName: e.target.value }))
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
                    onChange={(e) =>
                      setData((prev) => ({ ...prev, password: e.target.value }))
                    }
                    required
                  />
                </div>
                <button type="submit" className="btn solid">
                  Submit
                </button>
              </form>

              <form className="sign-up-form" onSubmit={handleFormSubmit}>
                <h2 className="title">Sign up</h2>

                <div className="input-field">
                  <i
                    className="bx bx-log-in-circle"
                    style={{ fontSize: "x-large" }}
                  ></i>
                  <input
                    type="text"
                    placeholder="Username"
                    onChange={(e) =>
                      setData((prev) => ({ ...prev, userName: e.target.value }))
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
