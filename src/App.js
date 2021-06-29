import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./refactoredComponents/header/header";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import FirstPage from "./refactoredComponents/Home/firstPage";
import LoginForm from "./refactoredComponents/LoginForms/loginPage";
import HomePage from "./refactoredComponents/protectedRoutes/Homepage";
import PrivateRoute from "./PrivateRoute";
import AdminHeader from "./refactoredComponents/adminDash/header";
import AdminBody from "./refactoredComponents/adminDash/body";
import AdminRoute from "./adminRoute";

function App() {
  return (
    <div className="App">
      {" "}
      <Router>
        <Switch>
          <Route exact path="/">
            <Header />
            <FirstPage />
          </Route>
          <Route path="/login">
            <Header />
            <LoginForm />
          </Route>
          <AdminRoute path="/admin">
            <AdminHeader />
            <AdminBody />
          </AdminRoute>
          <PrivateRoute path="/home">
            <Header />
            <HomePage />
          </PrivateRoute>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
