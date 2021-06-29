import React, { useEffect, useState } from "react";
import "../../cssfiles/header.css";
import Logo1 from "../../images/icon.JPG";
import HeaderRight from "./headerRight";

function Header() {
  const [val, setVal] = useState(false);
  useEffect(() => {
    setVal(localStorage.getItem("status"));
  });

  return (
    <div className="header">
      <div classname="header_left">
        {" "}
        <img className="header_logo" src={Logo1} />
      </div>
      <div className="header_right">
        <HeaderRight />
      </div>
    </div>
  );
}

export default Header;
