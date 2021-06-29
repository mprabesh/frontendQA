import React, { useState } from "react";
import "../../cssfiles/Answer.css";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import axios from "axios";
import { useHistory } from "react-router-dom";

axios.interceptors.request.use(
  (config) => {
    config.headers.authorization = `Bearer ${localStorage.getItem("token")}`;
    return config;
  },
  (err) => {
    return Promise.reject(err);
  }
);

function Answer(bang) {
  let history = useHistory();
  const d = localStorage.getItem("Name");
  console.log(d);
  const [values, setValues] = useState({
    name: d,
    Answer: "",
    QuestionID: bang.value,
  });
  const handleChange = (e) => {
    const value = e.target.value;
    setValues({ ...values, [e.target.name]: value });
  };

  const handleClick = (e) => {
    e.preventDefault();
    console.log(values);
    axios
      .post(`http://localhost:1234/answer/add`, { values })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
    setValues({ Answer: "" });
  };

  return (
    <div className="Prabesh1">
      <div className="Prabesh_inner1">
        <div className="Postcard_top1">
          {" "}
          <div className="PostQuestion_top1">
            <AccountCircleIcon />
            <h6>{d}</h6>
          </div>
        </div>
        <div className="Postcard_bottom1">
          {" "}
          <div className="PostQuestion1">
            <form onSubmit={handleClick}>
              <input
                type="text"
                name="Answer"
                value={values.Answer}
                onChange={handleChange}
                required
              />
              <button type="submit">
                <h6>Post</h6>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Answer;
