import React, { useState, useEffect } from "react";
import "../../cssfiles/notify.css";
import CheckCircleOutlineSharpIcon from "@material-ui/icons/CheckCircleOutlineSharp";
import axios from "axios";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";

function Notification(apple) {
  const [marked, setMarked] = useState();
  const [markedNotification, setMarkedNotification] = useState([]);
  const ID = apple.value._id;
  const a = localStorage.getItem("Name");
  useEffect(() => {
    axios
      .get(`/notification/getCount/${a}`)
      .then((res) => {
        setMarkedNotification(res.data.unmarked);
      })
      .catch((err) => {
        console.log(err);
      });

    markedNotification.map((index) => {
      index.generateID === apple.value.generateID
        ? setMarked(true)
        : setMarked(false);
    });
  });
  const handleClick = () => {
    axios
      .post(`/notification/markseen`, { ID })
      .then((res) => {
        console.log(res);
        setMarked(true);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  console.log(apple);
  const short = apple.value.QuestionContent;
  const finalText =
    short.split(" ")[0] +
    " " +
    short.split(" ")[1] +
    " " +
    short.split(" ")[2] +
    " " +
    short.split(" ")[3] +
    " " +
    short.split(" ")[4];
  return (
    <div className="outer-notify">
      <div className="Notify_inner1">
        <div className="Content">
          {" "}
          <AccountCircleIcon />
          <p>
            <b>{apple.value.generateID}</b> {apple.value.notifyType}
            <b>"{finalText}"</b>
          </p>
        </div>
      </div>
      <div className="viewIcon">
        {marked ? (
          <div className="innerViewIcon" onClick={handleClick}>
            <CheckCircleOutlineSharpIcon fontSize="small" />
          </div>
        ) : null}
      </div>
      <hr></hr>
    </div>
  );
}

export default Notification;
