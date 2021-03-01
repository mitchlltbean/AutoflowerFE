import React from "react";
import "./style.css";
import Buttons from "../components/Buttons";

function Landing(props) {
  console.log("Landing page props", props);
  return (
    <div>
      <Buttons
        handleLoginInput={props.handleLoginInput}
        handleLoginSubmit={props.handleLoginSubmit}
        setLoginState={props.setLoginState}
        loginState={props.loginState}
      />
    </div>
  );
}

export default Landing;
