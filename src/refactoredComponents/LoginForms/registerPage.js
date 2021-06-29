import React, { useState } from "react";
import axios from "axios";

function Forms() {
  const [userInfo, setuserInfo] = useState({
    firstname: "",
    lastname: "",
    email: "",
    gender: "",
    password: "",
  });
  const handleChange = (e) => {
    const value = e.target.value;
    setuserInfo({ ...userInfo, [e.target.name]: value });
  };
  const handleClick = (e) => {
    e.preventDefault();
    axios
      .post(`/register/newRequest`, { userInfo })
      .then((res) => {
        console.log(res.config.data);
        console.log(userInfo);
        alert("Request Sent successfully");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <form>
        <div className="form-row">
          <div className="form-group col-md-6">
            <label>FirstName</label>
            <input
              type="email"
              className="form-control"
              id="inputEmail4"
              placeholder="First Name"
              name="firstname"
              onChange={handleChange}
            />
          </div>
          <div className="form-group col-md-6">
            <label>LastName</label>
            <input
              type="email"
              className="form-control"
              id="inputPassword4"
              placeholder="Last Name"
              name="lastname"
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="form-group">
          <label>Email</label>
          <input
            type="Email"
            className="form-control"
            id="inputEmail"
            placeholder="@gmail.com"
            onChange={handleChange}
            name="email"
          />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Password"
            name="password"
            onChange={handleChange}
          />
        </div>

        <label>Gender</label>
        <br />
        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="radio"
            name="gender"
            value="male"
            onChange={handleChange}
          />
          <label className="form-check-label">Male</label>
        </div>
        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="radio"
            name="gender"
            value="female"
            onChange={handleChange}
          />
          <label className="form-check-label">Female</label>
        </div>
        <div className="form-check form-check-inline">
          <input
            class="form-check-input"
            type="radio"
            name="gender"
            value="others"
            onChange={handleChange}
          />
          <label className="form-check-label">Others</label>
        </div>

        <hr className="w-100 mx-auto pb-6" />
        <button type="submit" className="btn btn-primary" onClick={handleClick}>
          Sign Up
        </button>
        <hr className="w-100 mx-auto pb-6" />
        <a href="/login" class="link-dark">
          Already have Account
        </a>
      </form>
    </>
  );
}

export default Forms;
