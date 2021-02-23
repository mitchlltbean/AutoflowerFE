import React from "react";
import { Button } from "semantic-ui-react";
// import 'semantic-ui-css/semantic.min.css'

class Buttons extends React.Component {
  state = {
    keycode: ""
  }

  feelNum = (e) => {
    let keycodeCopy = this.state.keycode
    const numeral = e.target.value;
    // ran into an issue of the buttons having no value, then changed it to e.target.value to get proper response
    console.log(numeral);
    keycodeCopy += numeral

    // if (keycodeCopy.length < 5 ) { } 

    this.setState({keycode:keycodeCopy})

  };

//Method to clear numbers by creating an empty string

  clearNum = () => {
      this.setState({keycode: ""})

  };

//Method to verify the input is correct
  checkNum = () => {
    const keycode = this.state.keycode.length
    if (keycode < 5) {
      console.log("Make it longer!")
      
    }
    else if (keycode > 5) {
      console.log("Make it shorter!")
    }
    else {
      console.log("Thats about right!")
    }

  };

//Cap the max-length (if/else) 


  render() {
    return (
      <div id="btnHolder">
        {this.state.keycode}
        <Button.Group vertical>
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
          <Button onClick={(e) => this.clearNum (e, "value")} className="numLock">Clear</Button>
        </Button.Group>
        <Button.Group vertical>
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
        <Button.Group vertical>
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
          <Button onClick={(e) => this.checkNum(e, "value")}className="numLock">Check</Button>
        </Button.Group>
      </div>
    );
  }
}

export default Buttons;
