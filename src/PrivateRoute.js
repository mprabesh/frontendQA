import React from "react";
import { Redirect, Route } from "react-router";

export default function PrivateRoute({ children, ...rest }) {
  const value = sessionStorage.getItem("sessionValid");
  return (
    <Route
      {...rest}
      render={() => {
        return value ? children : <Redirect to="/login" />;
      }}
    />
  );
}
