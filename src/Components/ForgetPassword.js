import React from "react";
import "../ForgetPassword.css";

const ForgetPassword = () => {
  const handleForgetPassword = () => {
    // Add logic for handling forget password functionality
    alert("Forget Password functionality is not implemented.");
  };

  return (
    <div className="forget-password">
      <h2>Forget Password</h2>
      <p>Enter your email to reset your password.</p>
      <label>
        Email:
        <input type="email" />
      </label>
      <br />
      <button onClick={handleForgetPassword}>Reset Password</button>
    </div>
  );
};

export default ForgetPassword;
