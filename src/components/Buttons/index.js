import React from "react";
import { Button, Container } from "semantic-ui-react";
import "./style.css";
import { withRouter } from "react-router";

class Buttons extends React.Component {
  constructor(props) {
    super(props);
    console.log(props, " !!!!!!");
  }

  feelNum = (e) => {
    e.preventDefault();
    let keycodeCopy = this.state.keycode;
    const numeral = e.target.value;
    // ran into an issue of the buttons having no value, then changed it to e.target.value to get proper response
    console.log(numeral, "!!!!!!!!!!!!!!");
    keycodeCopy += numeral;

    this.setState({ keycode: keycodeCopy });
  };

  //Method to clear numbers by creating an empty string

  clearNum = () => {
    this.setState({ keycode: "" });
  };

  reDirect = () => {
    console.log("REDIRECT");
    this.props.history.push("/dashboard");
  };

  //Method to verify the input is correct/meets length requirements.
  //Is it correct?
  // checkNum = (e) => {
  //   const keycode = this.state.keycode.length;
  //   this.setState({ [e.target.name]: e.target.value });
  //   console.log(e.target, "@@@@");
  //   if (keycode < 4) {
  //     // alert("Make it longer!");
  //     return false;
  //   } else if (keycode > 4) {
  //     // alert("Make it shorter!");
  //     return false;
  //   } else {
  //     // alert("Welcome to Autoflower!");
  //     window.location.href = "/dashboard";
  //     return true;
  //   }
  // };

  render() {
    return (
      <div>
        <div className="container">
          <div className="keypad">
            <input
              placeholder="Employee ID #"
              name="id"
              className="input"
              value={this.props.loginState.id}
              onChange={this.props.handleLoginInput}
              type="password"
              // On error display a message on page (no alerts)
              error={{
                content: "Please enter a valid key",
                pointing: "below",
              }}
            />

            <input
              name="login"
              className="input"
              placeholder="Employee Key"
              value={this.props.loginState.login}
              onChange={this.props.handleLoginInput}
              type="password"
              // On error display a message on page (no alerts)
              error={{
                content: "Please enter a valid key",
                pointing: "below",
              }}
            />

            <div className="button_container">
              <div className="button_row">
                <Button
                  className="num"
                  onClick={(e) => this.feelNum(e, "value")}
                  value="1"
                >
                  1
                </Button>

                <Button
                  className="num"
                  onClick={(e) => this.feelNum(e, "value")}
                  value="4"
                >
                  2
                </Button>

                <Button
                  className="num"
                  onClick={(e) => this.feelNum(e, "value")}
                  value="7"
                >
                  3
                </Button>
              </div>

              <div className="button_row">
                <Button
                  className="num"
                  onClick={(e) => this.feelNum(e, "value")}
                  value="6"
                >
                  4
                </Button>

                <Button
                  className="num"
                  onClick={(e) => this.feelNum(e, "value")}
                  value="2"
                >
                  5
                </Button>

                <Button
                  className="num"
                  onClick={(e) => this.feelNum(e, "value")}
                  value="5"
                >
                  6
                </Button>
              </div>

              <div className="button_row">
                <Button
                  className="num"
                  onClick={(e) => this.feelNum(e, "value")}
                  value="8"
                >
                  7
                </Button>

                <Button
                  className="num"
                  onClick={(e) => this.feelNum(e, "value")}
                  value="0"
                >
                  8
                </Button>

                <Button
                  className="num"
                  onClick={(e) => this.feelNum(e, "value")}
                  value="3"
                >
                  9
                </Button>
              </div>

              <div className="button_row">
                <Button
                  onClick={(e) => this.clearNum(e, "value")}
                  className="numLock"
                  id="clear"
                >
                  Clear
                </Button>

                <Button
                  className="num"
                  onClick={(e) => this.feelNum(e, "value")}
                  value="9"
                >
                  0
                </Button>

                <Button
                  onClick={() => this.props.handleLoginSubmit(this.reDirect)}
                  className="numLock"
                  id="check"
                >
                  Check
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Buttons);
