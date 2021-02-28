import React from "react";
import Grid from "@material-ui/core/Grid";
import InventoryPanel from "../components/InventoryPanel";
import Products4Sale from "../components/Products4Sale";

// import Menu from "../components/Menu";
import "./style.css";

export default function Orders() {
  return (
    <div>
      {/* Side Bar Menu commented out for this page */}
      {/* <Menu /> */}
      <Grid container direction="row">
        <div>
          <h1>Orders</h1>
          <InventoryPanel />
        </div>
        <div>
          <Products4Sale />
        </div>
      </Grid>
    </div>
  );
}
