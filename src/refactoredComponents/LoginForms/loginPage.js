import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import "../../App.css";
import axios from "axios";

function LoginForm() {
  let history = useHistory();
  // const [show, setshowVal] = useState(false);
  const [values, setValues] = useState({ email: "", password: "" });
  const handleChange = (e) => {
    const value = e.target.value;
    setValues({ ...values, [e.target.name]: value });
  };

  const handleClick = (e) => {
    // console.log(values);
    e.preventDefault();
    axios
      .post(`http://localhost:1234/authenticate`, { values })
      .then((res) => {
        console.log(res.data);
        localStorage.setItem("Name", res.data.Name);
        localStorage.setItem("UID", res.data.UID);
        sessionStorage.setItem("sessionValid", res.data.sessionValid);
        sessionStorage.setItem("accessToken", res.data.accessToken);
        sessionStorage.setItem("refreshToken", res.data.refreshToken);
        sessionStorage.setItem("isAdmin", res.data.isAdmin);

        const d = localStorage.getItem("status");
        if (res.data.sessionValid) {
          history.push("./home");
        }
      })
      .catch((err) => {
        console.log(err);
        // setshowVal(true);
      });
  };

  return (
    <div className="login-form">
      <h1>Login Form</h1>
      <form>
        <input
          type="text"
          name="email"
          value={values.name}
          onChange={handleChange}
          placeholder="Username"
        />
        <input
          type="password"
          name="password"
          value={values.Question}
          onChange={handleChange}
          placeholder="Password"
        />
        <button type="button" className="btn btn-primary" onClick={handleClick}>
          Log In
        </button>
      </form>
      <div className="error-texts">
        {" "}
        {/* {show ? <p className="text-danger pt-2">Wrong Credentials</p> : null} */}
      </div>
    </div>
  );
}

export default LoginForm;
