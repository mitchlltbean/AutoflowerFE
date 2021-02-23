import React from "react";
import { Button } from "semantic-ui-react";

function Buttons() {
  return (
    <div id="btnHolder">
      <Button.Group vertical>
        <Button>1</Button>
        <Button>4</Button>
        <Button>7</Button>
        <Button>Clear</Button>
      </Button.Group>
      <Button.Group vertical>
        <Button>2</Button>
        <Button>5</Button>
        <Button>8</Button>
        <Button>0</Button>
      </Button.Group>
      <Button.Group vertical>
        <Button>3</Button>
        <Button>6</Button>
        <Button>9</Button>
        <Button>Check</Button>
      </Button.Group>
    </div>
  );
}

export default Buttons;
