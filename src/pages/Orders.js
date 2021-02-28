import React from "react";
import InventoryPanel from "../components/InventoryPanel";
import Products4Sale from "../components/Products4Sale";

// import Menu from "../components/Menu";
import "./style.css";

export default function Orders() {
  return (
    <div>
      {/* Side Bar Menu commented out for this page */}
      {/* <Menu /> */}

      <h1>Orders</h1>

      <InventoryPanel />

      <Products4Sale />
    </div>
  );
}
