import React, { useState, useEffect } from "react";
import "../../cssfiles/handmade.css";
import AnswerPosted from "./POstedAnswer";
import Answer from "./PostAnswer";
import axios from "axios";
import PostCard from "./QuestionUpload";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import QuestionAnswerIcon from "@material-ui/icons/QuestionAnswer";
import VisibilityIcon from "@material-ui/icons/Visibility";
import { useHistory } from "react-router-dom";
import SimplePopover from "./Popover";

function Handmade(apple) {
  let history = useHistory();
  const [visible, setVisible] = useState(false);
  const [viewData, setViewData] = useState([]);
  const [answerData, setAnswerValues] = useState([]);
  const [a, seta] = useState();
  const value = { UserName: localStorage.getItem("Name"), ID: apple.value._id };
  const handleClick = (e) => {
    if (visible === true) setVisible(false);
    else setVisible(true);
  };
  const addView = () => {
    axios
      .post(`http://localhost:1234/get/viewadd`, { value })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    axios
      .get(`http://localhost:1234/answer/getSpecific/${apple.value._id}`)
      .then((res) => {
        setAnswerValues(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
    axios
      .get(`http://localhost:1234/get/viewarray/${apple.value._id}`)
      .then((res) => {
        console.log(res.data);
        setViewData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
    viewData.map((index) => {
      index === localStorage.getItem("Name") ? seta(true) : seta(false);
    });
  });

  return (
    <div className="Post_section">
      <div className="Post_section_inner">
        <div className="Post_section_Top">
          <div className="Post_section_Top1">
            {" "}
            <AccountCircleIcon />
            <h6>{apple.value.name}</h6>
          </div>
          <div className="option">
            <SimplePopover value={apple.value} />
          </div>
        </div>
        <div className="Post_section_mid">
          <h5>{apple.value.Question}</h5>
        </div>
        <div className="Post_section_bottom">
          <div className="Post_section_option1" onClick={addView}>
            {a ? <VisibilityIcon color="secondary" /> : <VisibilityIcon />}
            <h6>View</h6>
          </div>
          <div className="Post_section_option" onClick={handleClick}>
            <QuestionAnswerIcon />
            <h6>Answer</h6>
          </div>
        </div>
        <div className="Post_section_Answer">
          {visible ? <Answer value={apple.value._id} /> : null}
          {/* <AnswerPosted /> */}
          {answerData.map((index) => {
            return (
              <li key={index._id} className="list-ko">
                <AnswerPosted value={index} />
              </li>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Handmade;
