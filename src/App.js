import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import "./App.css";

function App() {
  return (
    <Router>
      <div>
        <Route exact path="/" component={Landing} />
      </div>
    </Router>
  );
}

export default App;
