import React from "react";
import { Button, Container } from "semantic-ui-react";
import "./style.css";

class Buttons extends React.Component {
  state = {
    keycode: "",
  };

  feelNum = (e) => {
    let keycodeCopy = this.state.keycode;
    const numeral = e.target.value;
    // ran into an issue of the buttons having no value, then changed it to e.target.value to get proper response
    console.log(numeral);
    keycodeCopy += numeral;

    this.setState({ keycode: keycodeCopy });
  };

  //Method to clear numbers by creating an empty string

  clearNum = () => {
    this.setState({ keycode: "" });
  };

  //Method to verify the input is correct/meets length requirements.
  //Is it correct?
  checkNum = () => {
    const keycode = this.state.keycode.length;
    if (keycode < 5) {
      alert("Make it longer!");
      return false;
    } else if (keycode > 5) {
      alert("Make it shorter!");
      return false;
    } else {
      alert("Welcome to Autoflower!");
      window.location.href = "/owner";
      return true;
    }
  };

  render() {
    return (
      <div>
        <form>
          <input
            id="input"
            value={this.state.keycode}
            onChange={this.checkNum}
            type="password"
          />
        </form>

        <Container id="btnHolder" className="flex-container">
          <Button.Group vertical className="key-group">
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
              4
            </Button>

            <Button
              className="num"
              onClick={(e) => this.feelNum(e, "value")}
              value="7"
            >
              7
            </Button>

            <Button
              onClick={(e) => this.clearNum(e, "value")}
              className="numLock"
              id="clear"
            >
              Clear
            </Button>
          </Button.Group>

          <Button.Group vertical className="key-group">
            <Button
              className="num"
              onClick={(e) => this.feelNum(e, "value")}
              value="2"
            >
              2
            </Button>
            <Button
              className="num"
              onClick={(e) => this.feelNum(e, "value")}
              value="5"
            >
              5
            </Button>
            <Button
              className="num"
              onClick={(e) => this.feelNum(e, "value")}
              value="8"
            >
              8
            </Button>
            <Button
              className="num"
              onClick={(e) => this.feelNum(e, "value")}
              value="0"
            >
              0
            </Button>
          </Button.Group>

          <Button.Group vertical className="key-group">
            <Button
              className="num"
              onClick={(e) => this.feelNum(e, "value")}
              value="3"
            >
              3
            </Button>
            <Button
              className="num"
              onClick={(e) => this.feelNum(e, "value")}
              value="6"
            >
              6
            </Button>
            <Button
              className="num"
              onClick={(e) => this.feelNum(e, "value")}
              value="9"
            >
              9
            </Button>
            <Button
              onClick={(e) => this.checkNum(e, "value")}
              className="numLock"
              id="check"
            >
              Check
            </Button>
          </Button.Group>
        </Container>
      </div>
    );
  }
}

export default Buttons;
