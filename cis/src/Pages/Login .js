import React, { useState } from "react";
import "../Css/login.css";
import axios from "axios";
import Scrollbutton from "../COMPONENTS/Scrollbutton ";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faLock, faSignInAlt } from '@fortawesome/free-solid-svg-icons';

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    switch (name) {
      case "username":
        setUsername(value);
        break;
      case "password":
        setPassword(value);
        break;
      default:
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post("http://localhost/Abi/Login.php", {
        username,
        password,
      });

      if (response.data.success) {
        if (response.data.role === "admin") {
          window.location.href = "/AdminDashboard";
        } else {
          alert("You have successfully logged in.");
          window.location.href = "/CrimeReports";
        }
      } else {
        alert(response.data.error);
      }
    } catch (error) {
      console.error(error);
      alert("Invalid username or password.");
    }
  };

  return (
    <div>
      <div className="login-section">
        <h3>Online Crime Investigation System</h3>
        <p>Sign in to your account</p>
        <form onSubmit={handleSubmit}>
          <label htmlFor="username">
            <FontAwesomeIcon icon={faUser} /> Username:
            <input
              type="text"
              name="username"
              id="username"
              value={username}
              onChange={handleInputChange}
              placeholder="Enter Your Username Here"
              required
            />
          </label>
          <label htmlFor="password">
            <FontAwesomeIcon icon={faLock} /> Password:
            <input
              type="password"
              name="password"
              value={password}
              onChange={handleInputChange}
              placeholder="Enter Your Password Here"
              required
            />
          </label>
          <div className="div-remember">
            <label htmlFor="checkbox">
              <input type="checkbox" name="checkbox" id="checkbox" />
              <span>Remember Me</span>
            </label>
            <p>Forgot Your Password?</p>
          </div>
          <button 
            className="login_button" 
            type="submit"
            id="login_button">
            <FontAwesomeIcon icon={faSignInAlt} /> <span>Login</span>
          </button>
          <p className="dont-p">
            Don't Have An Account? <a href="/Signup">Sign Up</a>
          </p>
        </form>
      </div>
      <Scrollbutton />
    </div>
  );
};

export default Login;
