import React from "react";
import "../SignUp.css";

const SignUp = () => {
  const handleSignUp = () => {
    alert("Sign Up functionality is not implemented.");
  };

  return (
    <div className="sign-up">
      <h2>Sign Up</h2>
      <label>
        Username:
        <input type="text" />
      </label>
      <br />
      <label>
        Email:
        <input type="email" />
      </label>
      <br />
      <label>
        Password:
        <input type="password" />
      </label>
      <br />
      <button onClick={handleSignUp}>Sign Up</button>
    </div>
  );
};

export default SignUp;
