import React, { useEffect, useState } from "react";
import "../../cssfiles/header.css";
import Logo1 from "../../images/icon.JPG";
import HeaderRight from "./header_right";
import HeaderRight1 from "./header_right2";

function Header() {
  const [val, setVal] = useState(false);
  useEffect(() => {
    setVal(sessionStorage.getItem("sessionValid"));
  });

  return (
    <div className="header">
      <div classname="header_left">
        {" "}
        <img className="header_logo" src={Logo1} />
      </div>
      <div className="header_right">
        {val ? <HeaderRight1 /> : <HeaderRight />}
      </div>
    </div>
  );
}

export default Header;
