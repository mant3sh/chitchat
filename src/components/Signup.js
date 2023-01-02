import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../firebaseConfig";

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const handelSignup = async (e) => {
    e.preventDefault();
    const response = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    ).catch((error) => window.alert(error.message));
    const update = await updateProfile(auth.currentUser, { displayName: name });
    setEmail("");
    setName("");
    setPassword("");
    window.alert("your accont as been created welcome to chitchat");
  };
  return (
    <div>
      <>
        <h2 className="heading__log">Enter your details</h2>
        <br />
        <br />
        <form onSubmit={handelSignup}>
          <h4 className="log__label">
            FULL NAME <span className="req">*</span>
          </h4>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            type="text"
            name="email"
          />
          <h4 className="log__label">
            EMAIL <span className="req">*</span>
          </h4>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            type="email"
            name="email"
            id="email"
          />
          <h4 className="log__label">
            PASSWORD <span className="req">*</span>
          </h4>
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            type="password"
            name="password"
            id="password"
          />
          <br />
          <br />
          <button className="login__buttn" type="submit">
            Create Account
          </button>
        </form>
        <br />
        <br />

        <p>
          Already have an account{" "}
          <Link to="/" className="register">
            login
          </Link>
        </p>
      </>
    </div>
  );
}

export default Signup;
