import React from "react";
import "./style.css";
import Buttons from "../components/Buttons";
import DataTable from "../components/DataTable";
import Sales from "./Sales";

function Landing() {
  return (
    <div>
      <Buttons />

      <DataTable />

      <Sales />
    </div>
  );
}

export default Landing;
