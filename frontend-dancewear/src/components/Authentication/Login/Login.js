import AuthenticationService from "../../../services/AuthenticationService";
import React, { useState } from "react";

import { useNavigate, Link } from "react-router-dom"; // Import Link from 'react-router-dom'
import "./Login.css";

const Login = () => {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const navigate = useNavigate();
  const [error, setError] = useState(null);


  const onChangeUsername = (e) => {
    setUserName(e.target.value);
  };

  const onChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = (e) => {
    e.preventDefault();

    let data = {
      username: username,
      password: password,
      loading: setLoading(true),
      message: setMessage("Logging in"),
    };

    if (data.username && data.password) {
      AuthenticationService.login(data)
        .then((response) => {
          if (response.user) {
            // Successful login
            let currentUser = response.user;
            console.log(currentUser);
            let roleAuthority = currentUser.authorities[0].authority;
         
            if (!roleAuthority === null ) {
              navigate("/user-profile");
            } else {
              navigate("/user-profile")
            
            }
        }else {
            setError("Invalid username or password.");
          }
        })
        .catch((error) => {
          console.error("Error logging in:", error);
          setError("An error occurred while logging in.");
        });
    } else {
      setError("Please enter both username and password.");
    }
  };

  return (
    <>
      <div className="login-container">
        <div className="login-form-container">
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              placeholder="Please enter a username"
              className="form-control"
              name="username"
              value={username}
              onChange={onChangeUsername}
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              placeholder="Please enter a password"
              className="form-control"
              name="password"
              value={password}
              onChange={onChangePassword}
            />
            <button className="login-button" onClick={handleLogin}>
              Log in
            </button>
          </div>
          {error && <p className="error-message">{error}</p>}
        </div>
        <p>
          If you need to create an account,{" "}
          <Link to="/Registration">click here to register</Link>
        </p>
      </div>
    </>
  );
};

export default Login;