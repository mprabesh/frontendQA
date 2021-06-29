import React, { useState } from "react";
import "../../cssfiles/searchbox.css";
import LogOut from "@material-ui/icons/ExitToApp";
import PersonIcon from "@material-ui/icons/Person";

const logOut = () => {
  localStorage.clear();
  sessionStorage.clear();
};
function HeaderRight() {
  return (
    <div>
      {" "}
      <div className="header_right">
        <div className="header_right_inner">
          <div className="PersonInfo">
            <PersonIcon />
            <label>ADMIN</label>
          </div>
          <div className="IconComponents3" onClick={logOut}>
            {" "}
            <a href="/login">
              {" "}
              <LogOut />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeaderRight;
