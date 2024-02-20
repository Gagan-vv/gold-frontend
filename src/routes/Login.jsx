import React, { useState } from "react";

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <>
      <div className="login">
        <div className="auth-img">
          <img src="/asset/logo.png" alt="logo" className="logo-login"/>
        </div>
        <div className="auth-data">
          <h1 className="login-title">Login</h1>
          <h3 className="username-ttle">Name</h3>
          <input type="text" className="username" placeholder="Username" />
          <h3 className="password-ttle">Password</h3>
          <input type="text" className="password" placeholder="Password" />
          <Link to="/register" className="reg-link">
            <h4 className="login-info">Register</h4>
          </Link>
          <a href="/">
            <button className="login-btn">Login</button>
          </a>
        </div>
      </div>
    </>
  );
};

export default Login;
