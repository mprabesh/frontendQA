import { Button } from "@material-ui/core";
import axios from "axios";
import React, { useState } from "react";
import "../../cssfiles/Useraccount.css";

function UserAccount() {
  const [aboutInfo, setAboutinfo] = useState("");
  const [credentials, setCredentials] = useState({
    newpassword: "",
    oldpassword: "",
    UID: localStorage.getItem("UID"),
  });
  const handleClick1 = (e) => {
    e.preventDefault();
    const data = aboutInfo.aboutinfo;
    const ID = localStorage.getItem("UID");
    const value = { about: data, UID: ID }; //localStorage bata UID lyaeraw halnu parxa
    axios
      .post(`/register/updateAbout`, { value })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
    setAboutinfo("");
  };
  const handleClick2 = (e) => {
    e.preventDefault();
    const value = credentials;
    axios
      .post(`/authenticate/changePassword`, { value })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
    setCredentials({ newpassword: "", oldpassword: "" });
  };
  const handleChange2 = (e) => {
    const value = e.target.value;
    setCredentials({ ...credentials, [e.target.name]: value });
  };
  const handleChange1 = (e) => {
    const value = e.target.value;
    setAboutinfo({ ...aboutInfo, [e.target.name]: value });
  };

  return (
    <div className="UserAccount_component">
      <div className="UserAccount_component_inner">
        <div className="Password_section">
          <h4>Change Password</h4>
          <div className="top_section1">
            <label>Current Password</label>
            <input
              type="text"
              name="oldpassword"
              value={credentials.oldpassword}
              onChange={handleChange2}
              required
            />
          </div>
          <div className="top_section2">
            <label> New Password</label>
            <input
              type="text"
              name="newpassword"
              value={credentials.newpassword}
              onChange={handleChange2}
              required
            />
          </div>
          <div className="bottom_section">
            <button onClick={handleClick2}>Ok</button>
          </div>
        </div>
      </div>
      <div className="About_section">
        <div className="About_section_inner">
          <h4>Write About Yourself</h4>
          <div className="About_section_input">
            {" "}
            <input
              type="text"
              name="aboutinfo"
              value={aboutInfo.aboutinfo}
              onChange={handleChange1}
              required
            />
          </div>
          <div className="bottom_section">
            <button onClick={handleClick1}>Ok</button>
          </div>{" "}
        </div>
      </div>
    </div>
  );
}

export default UserAccount;
