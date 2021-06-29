import React from "react";
import "../../../../cssfiles/adminDash.css";
import axios from "axios";

axios.interceptors.request.use(
  (config) => {
    config.headers.authorization = `Bearer ${localStorage.getItem("token")}`;
    return config;
  },
  (err) => {
    return Promise.reject(err);
  }
);

function UserRequest({ data }) {
  const handleDelete = (a) => {
    const d = a.Email;
    axios
      .post(`http://localhost:1234/register/rmvRequest`, { d })
      .then((res) => {
        console.log("Gut Request");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const handleClick = (a) => {
    axios
      .post(`http://localhost:1234/register/acceptRequest`, { a })
      .then((res) => {
        console.log("Hello world");
        handleDelete(a);
      })
      .catch((err) => {
        console.log(err);
      });
    console.log(a);
  };

  const column = data[0] && Object.keys(data[0]);

  return (
    <div className="outerTable">
      {column == null ? (
        <div className="SearchNull">
          <h1>Didn't find any...</h1>
        </div>
      ) : (
        <table className="AdminTable">
          <thead>
            <tr>
              {data[0] && column.map((h) => <th>{h}</th>)}
              <th colSpan="2">Options</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row, d) => (
              <tr>
                {column.map((c) => (
                  <td>{row[c]}</td>
                ))}
                <td>
                  <a
                    onClick={() => {
                      handleClick(data[d]);
                    }}
                  >
                    Add
                  </a>
                </td>
                <td>
                  <a
                    onClick={() => {
                      handleDelete(data[d]);
                    }}
                  >
                    Remove
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default UserRequest;
