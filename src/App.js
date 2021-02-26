import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Landing from "./pages/Landing";
import Dashboard from "./pages/Dashboard";
import Employees from "./pages/Employees";
import Sales from "./components/Sales/index";
import Products from "./components/Products/index";
import Stats from "./components/Stats/index";
import "./App.css";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route
            exact
            path="/dashboard"
            component={Dashboard}
            render={() => <Dashboard />}
          />
          <Route
            exact
            path="/employees"
            component={Employees}
            render={() => <Employees />}
          />
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
