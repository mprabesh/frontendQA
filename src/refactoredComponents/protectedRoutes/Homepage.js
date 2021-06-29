import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import HelloThere from "./QuestionUpload";
import "../../cssfiles/List.css";
import UserAccount from "./UserAccount";
import "../../App.css";
import Handmade from "./postContainer";
import axios from "axios";
import PrivateRoute from "../../PrivateRoute";
import Profile from "./Profile";
import LoginPage from "../LoginForms/loginPage";
import Notification from "./notification";

function BaseContainer() {
  const [objectValue, setobjectValue] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:1234/question/getall`).then((res) => {
      setobjectValue(res.data);
    });
  });

  return (
    <Router>
      <div className="container-fluid">
        <div className="row">
          <div className="col-2">
            {/* <List />{" "} */}
            {/* list component start from here */}
            <div className="List-Group">
              <ul>
                <div className="insidelist"></div>
                <li>
                  <div className="insidelist">
                    <Link to="/home">Home</Link>
                  </div>
                </li>
                <li>
                  <div className="insidelist">
                    <Link to="/useraccount">UserAccount</Link>
                  </div>
                </li>
                <li>
                  <div className="insidelist">
                    <Link to="/about">About</Link>
                  </div>
                </li>
                <li>
                  <div className="insidelist">
                    <Link to="/activity">Activity</Link>
                  </div>
                </li>
              </ul>
            </div>
            {/* list component ends here */}
          </div>
          {/* centre component start from here */}
          <div className="centreFeed col-8 display">
            <Switch>
              <Route exact path="/home">
                <HelloThere />
                {objectValue.map((index) => {
                  return (
                    <li key={index._id} className="list-ko">
                      <Handmade value={index} />
                    </li>
                  );
                })}
              </Route>
              <Route path="/useraccount">
                {" "}
                <UserAccount />
              </Route>
              <Route path="/about">
                <Profile />
              </Route>
              <Route path="/activity">
                <Notification />{" "}
              </Route>
            </Switch>
          </div>
          {/* centre component ends here */}
          <div className="col"></div>
        </div>
      </div>
    </Router>
  );
}

export default BaseContainer;
