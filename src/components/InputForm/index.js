import React from "react";
import { Input } from "semantic-ui-react";

function InputForm() {
  return (
    <div>
      <div className="ui huge icon input">
        <Input id="numInput" type="text" placeholder="Employee #" />
        <i className="search icon"></i>
      </div>
    </div>
  );
}

export default InputForm;
