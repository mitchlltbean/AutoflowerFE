import { React, useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Landing from "./pages/Landing";
import Dashboard from "./pages/Dashboard";
import Employees from "./pages/Employees";
import Sales from "./pages/Sales";
import Products from "./pages/Products";
import Stats from "./pages/Stats";
import "./App.css";
import Navbar from "./components/Navbar";
import Orders from "./pages/Orders";
import API from "./utils/API";

function App() {
  const [employeeState, setemployeeState] = useState({
    id: "",
    manager: "",
    name: "",
    token: "",
    isLoggedIn: false,
  });

  const [loginState, setLoginState] = useState({
    id: "",
    login: "",
  });

  const handleLoginSubmit = (callBack) => {
    console.log(loginState, "LOGINN STATE");

    API.login(loginState)
      .then((res) => {
        console.log(res.data, "!!!!!!!!!");
        console.log("success!");
        localStorage.setItem("token", res.data.token);
        setemployeeState({
          id: res.data.employee.id,
          manager: res.data.employee.manager,
          name: res.data.employee.name,
          token: res.data.token,
          isLoggedIn: true,
        });
        setLoginState({
          id: "",
          login: "",
        });
        console.log("LOGIN SUCCESS ABOUT TO CALLABACK");
        callBack();
      })
      .catch((err) => {
        console.log(err);
        localStorage.removeItem("token");
        console.log("ERRORRR");
      });
  };

  const handleLoginInput = (event) => {
    const { name, value } = event.target;
    setLoginState({
      ...loginState,
      [name]: value,
    });
  };

  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Landing
              handleLoginInput={handleLoginInput}
              handleLoginSubmit={handleLoginSubmit}
              setLoginState={setLoginState}
              loginState={loginState}
            />
          </Route>

          <Route
            exact
            path="/dashboard"
            component={Dashboard}
            render={() => <Dashboard />}
          />
          <Route exact path="/employees">
            <Employees token={employeeState.token}></Employees>
          </Route>
          <Route
            exact
            path="/sales"
            component={Sales}
            render={() => <Sales />}
          />
          <Route
            exact
            path="/products"
            component={Products}
            render={() => <Products />}
          />
          <Route
            exact
            path="/orders"
            component={Orders}
            render={() => <Orders />}
          />
          <Route
            exact
            path="/stats"
            component={Stats}
            render={() => <Stats />}
          />
        </Switch>
      </div>
    </Router>
  ); //TODO perhaps something in App to render only when the user is a manager/owner, and to not render when the user is an employee
}

export default App;
