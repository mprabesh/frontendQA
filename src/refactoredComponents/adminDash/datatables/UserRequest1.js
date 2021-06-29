import React, { useEffect, useState } from "react";
import { DataGrid } from "@material-ui/data-grid";
import axios from "axios";
import { useHistory } from "react-router-dom";

const columns = [
  { field: "Firstname", headerName: "First Name", width: 70 },
  { field: "Lastname", headerName: "Last Name", width: 130 },
  {
    field: "Email",
    headerName: "Email",
    type: "text",
    width: 70,
  },
  {
    field: "Password",
    headerName: "Password",
    width: 70,
  },
  {
    field: "Gender",
    headerName: "Gender",
    width: "8",
  },
];

const rows = [
  { id: 1, lastName: "Snow", firstName: "Jon", age: 35 },
  { id: 2, lastName: "Lannister", firstName: "Cersei", age: 42 },
  { id: 3, lastName: "Lannister", firstName: "Jaime", age: 45 },
  { id: 4, lastName: "Stark", firstName: "Arya", age: 16 },
  { id: 5, lastName: "Targaryen", firstName: "Daenerys", age: null },
  { id: 6, lastName: "Melisandre", firstName: null, age: 150 },
  { id: 7, lastName: "Clifford", firstName: "Ferrara", age: 44 },
  { id: 8, lastName: "Frances", firstName: "Rossini", age: 36 },
  { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
];

axios.interceptors.request.use(
  (config) => {
    config.headers.authorization = `Bearer ${localStorage.getItem("token")}`;
    return config;
  },
  (err) => {
    return Promise.reject(err);
  }
);

export default function DataGridDemo() {
  let history = useHistory();
  const [data, setvalue] = useState([]);
  useEffect(() => {
    axios
      .get(`http://localhost:1234/requests`)
      .then((res) => {
        const a = res.data;
        console.log("resolved successfully");
        // const pop = ModifyData(res.data);
        setvalue(a);
      })
      .catch((err) => {
        history.goBack("/login");
        console.log(err);
      });
  }, []);
  return (
    <div style={{ height: 400, width: "100%" }}>
      <DataGrid rows={data} columns={columns} checkboxSelection />
    </div>
  );
}
