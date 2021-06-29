import React from "react";
import { Redirect, Route } from "react-router";

export default function AdminRoute({ children, ...rest }) {
  const value = sessionStorage.getItem("isAdmin");
  return (
    <Route
      {...rest}
      render={() => {
        return value ? children : <Redirect to="/login" />;
      }}
    />
  );
}
