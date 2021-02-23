import React from "react";
import { Button } from "semantic-ui-react";
// import 'semantic-ui-css/semantic.min.css'

class Buttons extends React.Component {
  feelNum = (e) => {
    const numeral = e.target.value;
    // ran into an issue of the buttons having no value, then changed it to e.target.value to get proper response
    console.log(numeral);
  };
  render() {
    return (
      <div id="btnHolder">
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
          <Button className="numLock">Clear</Button>
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
          <Button className="numLock">Check</Button>
        </Button.Group>
      </div>
    );
  }
}

export default Buttons;
