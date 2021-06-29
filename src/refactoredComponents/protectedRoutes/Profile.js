import React, { useEffect, useState } from "react";
import "../../cssfiles/Profile.css";
import Handmade from "./postContainer";
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
function Profile() {
  let history = useHistory();
  const d = localStorage.getItem("Name");
  const e = localStorage.getItem("UID");
  const [objectValue, setobjectValue] = useState([]);
  const [count, setCount] = useState({});
  const [about1, setAbout] = useState({});
  useEffect(() => {
    axios
      .get(`http://localhost:1234/question/getSpecific/${d}`)
      .then((res) => {
        setobjectValue(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
    axios
      .get(`http://localhost:1234/get/count/${d}`)
      .then((res) => {
        setCount(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  });
  useEffect(() => {
    axios
      .get(`http://localhost:1234/get/aboutinfo/${e}`)
      .then((res) => {
        setAbout(res.data);
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [about1]);

  return (
    <>
      <div className="Profile_component">
        <div className="Profile_inner">
          <h4>{localStorage.getItem("Name")}</h4>
          <h5>
            {about1.about}
            {/* Student at United Technical College
            <br />
            (-_-)Eager to Answer the queries(-_-) */}
          </h5>
          <div className="work">
            <h6>{count.pValue} Questions</h6>
            <h6>{count.aValue} Answers</h6>
          </div>
        </div>
      </div>
      <div classname="Profile_component">
        {objectValue.map((index) => {
          return (
            <li className="list-ko">
              <Handmade value={index} />
            </li>
          );
        })}
      </div>
    </>
  );
}

export default Profile;
