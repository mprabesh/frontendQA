import React from "react";
import "../../cssfiles/header.css";
import LogIn from "../../images/login.png";

function HeaderRight() {
  return (
    <div>
      <a href="/login">
        {" "}
        <div className="LogIn Button">
          <label className="Log_In_label">Log In</label>
          <img className="LogIn_logo" src={LogIn} />
        </div>
      </a>
    </div>
  );
}

export default HeaderRight;
