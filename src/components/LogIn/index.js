import React from "react";
import "./index.css";
import Logo from "../../images/logo.png";
import { loginUrl } from "../../utils/spotify.auth";
const LogIn = () => {
  return (
    <div className="login">
      <img src={Logo} alt="" />
      <a href={loginUrl}>Login with spotify</a>
    </div>
  );
};

export default LogIn;
