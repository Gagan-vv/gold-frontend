import React from "react";

const Register = () => {
  return (
    <div className="login">
      <div className="auth-img">
        <img src="/asset/logo.png" alt="" className="logo-login" />
      </div>
      <div className="auth-data">
        <h1 className="login-title">Register</h1>
        <h3 className="username-ttle">Name</h3>
        <input type="text" className="username" placeholder="Name" />
        <h3 className="password-ttle">Email Id</h3>
        <input type="text" className="username" placeholder="Email" />
        <h3 className="password-ttle">Password</h3>
        <input type="text" className="password" placeholder="Password" />
        <a href="/login" className="reg-link">
          <h4 className="login-info">Login</h4>
        </a>
        <a href="">
          <button className="login-btn">Register</button>
        </a>
      </div>
    </div>
  );
};

export default Register;
