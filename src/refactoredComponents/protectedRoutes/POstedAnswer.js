import React, { useState, useEffect } from "react";
import "../../cssfiles/Answer.css";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import axios from "axios";

function AnswerPosted(apple) {
  const Name = apple.value.name;
  const Answer = apple.value.Answer;

  const d = localStorage.getItem("Name");
  const [bang, setBang] = useState(false);
  useEffect(() => {
    if (Name === d) {
      setBang(true);
    }
  }, []);
  const handleDelete = (e) => {
    e.preventDefault();
    const id = apple.value._id;
    axios
      .post(`/answer/delete`, { id })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="PostedAnswer">
      <div className="Postcard_top1">
        {" "}
        <div className="PostQuestion_top1">
          <AccountCircleIcon />
          <h6>{Name}</h6>
        </div>
        <div className="PostAnswermid">
          <div className="PostedAnswers">
            <label>{Answer}</label>
          </div>
        </div>
        <div className="PostedAnswerBottom">
          <div className="PostedAnswerOption">
            {bang ? <h6 onClick={handleDelete}>Delete</h6> : null}
            <h6>Report</h6>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AnswerPosted;
