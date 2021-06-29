import React, { useState } from "react";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import "../../App.css";
import AnswerPosted from "./POstedAnswer";
import { useHistory } from "react-router-dom";

import axios from "axios";

function POstCard() {
  let history = useHistory();
  const d = localStorage.getItem("Name");
  const ID = localStorage.getItem("UID");
  const [values, setValues] = useState({ name: d, Question: "", UID: ID });
  const handleChange = (e) => {
    const value = e.target.value;
    setValues({ ...values, [e.target.name]: value });
  };

  const handleClick = (event) => {
    event.preventDefault();
    axios
      .post(`/question/add`, { values })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {});
    console.log(values);
    setValues({ Question: "" });
  };

  return (
    <div className="Prabesh">
      <div className="Postcard_top">
        {" "}
        <div className="PostQuestion_top">
          <AccountCircleIcon />
          <h5 className="card-title">{localStorage.getItem("Name")}</h5>
        </div>
      </div>
      <div className="Postcard_bottom">
        {" "}
        <div className="PostQuestion">
          <form>
            <input
              type="text"
              name="Question"
              value={values.Question}
              onChange={handleChange}
            />
            <button onClick={handleClick}>
              <h6>Post</h6>
            </button>
            <button disabled>
              <h6>Cancel</h6>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default POstCard;
