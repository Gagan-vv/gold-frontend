import React, { useState } from "react";

const Login = () => {
  const [isLogin,setIsLogin]=useState(true);

  const handleClick=()=>{
    event.preventDefault();
    setIsLogin(!isLogin)
  }
  return (
    <>
      {isLogin && (
        <div className="login">
          <img src="/asset/logo.jpg" alt="" className="login-logo" />
          <h1 className="login-title">Login</h1>
          <h3 className="username-ttle">Name</h3>
          <input type="text" className="username" placeholder="Username" />
          <h3 className="password-ttle">Password</h3>
          <input type="text" className="password" placeholder="Password" />
          <a href="" className="reg-link" onClick={() => handleClick()}>
            <h4 className="login-info">Register</h4>
          </a>
          <a href="/">
            <button className="login-btn">Login</button>
          </a>
        </div>
      )}
      {!isLogin && (
        <div className="login">
          <img src="/asset/logo.jpg" alt="" className="login-logo" />
          <h1 className="login-title">Register</h1>
          <h3 className="username-ttle">Name</h3>
          <input
            type="text"
            className="username"
            placeholder="Name"
          />
          <h3 className="password-ttle">Email Id</h3>
          <input
            type="text"
            className="username"
            placeholder="Email"
          />
          <h3 className="password-ttle">Password</h3>
          <input
            type="text"
            className="password"
            placeholder="Password"
          />
          <a href="" className="reg-link" onClick={() => handleClick()}>
            <h4 className="login-info">Login</h4>
          </a>
          <a href="">
            <button className="login-btn">Register</button>
          </a>
        </div>
      )}
    </>
  );
};

export default Login;
