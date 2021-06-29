import React, { useState, useEffect } from "react";
import "../../cssfiles/searchbox.css";
import NotificationsIcon from "@material-ui/icons/Notifications";
import PersonIcon from "@material-ui/icons/Person";
import Badge from "@material-ui/core/Badge";
import SearchIcon from "@material-ui/icons/Search";
import LogOut from "@material-ui/icons/ExitToApp";
import { Link } from "react-router-dom";
import InputBox from "../searchBox/autoSearch";
import axios from "axios";

const logOut = () => {
  localStorage.clear();
  sessionStorage.clear();
};

function HeaderRight() {
  const [notifyNo, setnotifyNo] = useState(3);
  const a = localStorage.getItem("Name");
  useEffect(() => {
    axios
      .get(`http://localhost:1234/notification/getCount/${a}`)
      .then((res) => {
        setnotifyNo(res.data.nCount);
      })
      .catch((err) => {
        console.log(err);
      });
  });

  return (
    <div>
      {" "}
      <div className="header_right">
        <div className="header_input">
          <div className="searchIcon">
            <SearchIcon />
          </div>
          <div className="SearchInput">
            <InputBox />
            {/* <input
              type="text"
              placeholder="Search Name..."
              size="100"
              maxlength="17"
            /> */}
          </div>
        </div>{" "}
        <div className="header_right_inner">
          {" "}
          <div className="IconComponents2">
            <Badge badgeContent={notifyNo} color="error">
              <NotificationsIcon />
            </Badge>
          </div>
          <div className="IconComponents3">
            {" "}
            <PersonIcon />
          </div>
          <div className="IconComponents3" onClick={logOut}>
            {" "}
            <a href="/login">
              {" "}
              <LogOut />
            </a>
          </div>
        </div>
        {/* <Route exact path="/">
              {" "}
              <a href="/login">
                {" "}
                <div className="LogIn Button">
                  <label className="Log_In_label">Log In</label>
                  <img className="LogIn_logo" src={LogIn} />
                </div>
              </a>
            </Route> */}
      </div>
    </div>
  );
}

export default HeaderRight;
