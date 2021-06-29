import React from "react";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import ModifiedData from "./modifyData";
import "../../cssfiles/header.css";
import axios from "axios";

export default function FreeSolo() {
  const callData = () => {
    axios
      .get(`http://localhost:1234/search`)
      .then((res) => {
        console.log("bang bang");
        const x = ModifiedData(res.data);
        setValue(x);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const [value, setValue] = React.useState([]);
  return (
    <div style={{ width: 300 }}>
      <Autocomplete
        id="free-solo-demo"
        freeSolo
        options={value.map((option) => option.bleep)}
        renderInput={(params) => (
          <TextField
            id="textfield"
            onFocus={callData}
            {...params}
            label="Search Names..."
            margin="normal"
            variant="outlined"
            size="small"
          />
        )}
      />
    </div>
  );
}
