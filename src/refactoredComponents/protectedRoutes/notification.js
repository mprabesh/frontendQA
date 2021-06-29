import React, { useState, useEffect } from "react";
import "../../cssfiles/notify.css";
import CheckCircleOutlineSharpIcon from "@material-ui/icons/CheckCircleOutlineSharp";
import axios from "axios";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import InnerNotification from "./innerNotification";

function Notification() {
  const [nData, setNdata] = useState([]);
  const d = localStorage.getItem("Name");
  useEffect(() => {
    axios
      .get(`/notification/get/${d}`)
      .then((res) => {
        setNdata(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  });

  return (
    <>
      <div className="Notify_component1">
        {" "}
        <div className="Notify_inner">
          <h4>Notification</h4>
        </div>
      </div>
      <div className="Notify_component">
        {" "}
        {nData.map((index) => {
          return (
            <li key={index._id} className="list-ko">
              {" "}
              <InnerNotification value={index} />
            </li>
          );
        })}
      </div>
    </>
  );
}

export default Notification;
