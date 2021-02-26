import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Landing from "./pages/Landing";
import Dashboard from "./pages/Dashboard";
import "./App.css";

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route
            exact
            path="/dashboard"
            component={Dashboard}
            render={() => <Dashboard />}
          />
        </Switch>
      </div>
    </Router>
  ); //TODO perhaps something in App to render only when the user is a manager/owner, and to not render when the user is an employee
}

export default App;
