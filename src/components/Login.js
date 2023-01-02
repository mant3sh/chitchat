import React from "react";
import "./login.css";
import log from "./image/log.svg";
import Signin from "./Signin";
import Signup from "./Signup";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function Login() {
  return (
    <>
      <Router>
        <div className="log">
          <img className="login__pageimg" src={log} alt="login" />
          <div className="user_details">
            <div>
              <Routes>
                <Route path="/" element={<Signin />} />
                <Route path="/signup" element={<Signup />} />
              </Routes>
            </div>
          </div>
        </div>
      </Router>
    </>
  );
}

export default Login;
