import React from "react";
import LogIn from "../images/login.png";
import "../header.css";

function HeaderLoginButton() {
  return (
    <a href="/login">
      {" "}
      <div className="LogIn Button">
        <label className="Log_In_label">Log In</label>
        <img className="LogIn_logo" src={LogIn} />
      </div>
    </a>
  );
}

export default HeaderLoginButton;
