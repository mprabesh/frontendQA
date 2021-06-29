import React, { useState, useEffect } from "react";
import axios from "axios";
import DataTable1 from "./userRequest";
import RandomData from "../randomData";
import { useHistory } from "react-router-dom";

function Appx() {
  let history = useHistory();
  const [value, setValue] = useState([]);
  const [searchText, setSearchText] = useState("");
  const handleClick = () => {
    console.log(value);
  };
  useEffect(() => {
    axios
      .get(`http://localhost:1234/get/newRequests`)
      .then((res) => {
        setValue(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  function search(rows) {
    return rows.filter(
      (row) =>
        row.Firstname.toLowerCase().indexOf(searchText.toLowerCase()) > -1 ||
        row.Lastname.toLowerCase().indexOf(searchText.toLowerCase()) > -1 ||
        row.Email.toLowerCase().indexOf(searchText.toLowerCase()) > -1
    );
  }

  return (
    <div>
      <div className="inputBox">
        <input
          placeholder="Search....."
          type="text"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
      </div>
      <DataTable1 data={search(value)} />
    </div>
  );
}

export default Appx;
