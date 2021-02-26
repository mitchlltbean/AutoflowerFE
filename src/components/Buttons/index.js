import React from "react";
import { Button, Container} from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import "./style.css";

class Buttons extends React.Component {
  state = {
    keycode: "",
    // errormessage: "",
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
      window.location.href = "/home";
      return true;
    }
  };

  render() {
    return (
      <div>

        <Container className="container">
          <div className="keypad">

            <input
              id="input"
              value={this.state.keycode}
              onChange={this.checkNum}
              type="text"
              // On error display a message on page (no alerts)
              error={{
                content: 'Please enter a valid key',
                pointing: 'below',
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
                  onClick={(e) => this.checkNum(e, "value")}
                  className="numLock"
                  id="check"
                >
                  Check
                </Button>
              </div>
            </div>
        </div>


      </Container>
     </div>
    );
  }
}

export default Buttons;
