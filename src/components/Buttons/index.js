import React from "react";
import { Button } from "semantic-ui-react";
// import 'semantic-ui-css/semantic.min.css'

function feelNum() {}

function Buttons() {
  return (
    <div id="btnHolder">
      <Button.Group vertical>
        <Button className="num" onClick={feelNum} value="1">
          1
        </Button>
        <Button className="num" onClick={feelNum}>
          4
        </Button>
        <Button className="num" onClick={feelNum}>
          7
        </Button>
        <Button className="numLock">Clear</Button>
      </Button.Group>
      <Button.Group vertical>
        <Button className="num" onClick={feelNum}>
          2
        </Button>
        <Button className="num" onClick={feelNum}>
          5
        </Button>
        <Button className="num" onClick={feelNum}>
          8
        </Button>
        <Button className="num" onClick={feelNum}>
          0
        </Button>
      </Button.Group>
      <Button.Group vertical>
        <Button className="num" onClick={feelNum}>
          3
        </Button>
        <Button className="num" onClick={feelNum}>
          6
        </Button>
        <Button className="num" onClick={feelNum}>
          9
        </Button>
        <Button className="numLock">Check</Button>
      </Button.Group>
    </div>
  );
}

export default Buttons;
