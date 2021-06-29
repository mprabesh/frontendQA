import React from "react";
import "../List.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useHistory,
} from "react-router-dom";
const handleClick = () => {
  localStorage.clear();
};

function List() {
  return (
    <Router>
      <div>
        <div className="List-Group">
          <ul>
            <div className="insidelist"></div>
            <li>
              <div className="insidelist">
                <Link to="/">Home</Link>
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
      </div>
    </Router>
  );
}

export default List;
