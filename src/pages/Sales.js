import React from "react";
import Menu from "../components/Menu";
import TransactionCard from "../components/TransactionCard";
import sales from "../sales.json";
// Sale is Status boolean
// need name of product, date purchased, order id as int, product id as int, quantity as int, unit price as int
function Sales() {
  return (
    <div id="salesPage">
      <Menu />
      <div id="salesWrapper">
        <h1>Sales</h1>

        {sales.map((sale) => (
          <TransactionCard
            name={sale.name}
            category={sale.category}
            product_id={sale.product_id}
            quantity={sale.quantity}
            unit_price={sale.unit_price}
            order_id={sale.order_id}
            status={sale.status}
          />
        ))}
      </div>
    </div>
  );
}

export default Sales;
