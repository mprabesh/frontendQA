import React from "react";
import "../header.css";
import { useAuthStatus, useChangeStatus } from "../Component/authContext";

function Body() {
  const val1 = useAuthStatus();
  const val2 = useChangeStatus();

  return (
    <div className="body_section">
      <div className="inner_body_section">
        <button onClick={val2}>Click here</button>
      </div>
    </div>
  );
}

export default Body;
