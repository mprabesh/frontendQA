import React from "react";
import HomeImage from "../../images/HomeImage.jpg";
import Forms from "../LoginForms/registerPage";

function Practise() {
  return (
    <div className="container-fluid">
      <div className="row mb-3">
        <div className="col-lg-6 col-md-6 col-12">
          <img src={HomeImage} className="img-fluid" alt="" />
        </div>
        <div className="col-lg-6 col-md-6 col-12">
          <h1>Sign Up</h1>
          <Forms />
        </div>
      </div>
    </div>
  );
}

export default Practise;
