import React from "react";
import Menu from "../components/Menu";
import TransactionCard from "../components/TransactionCard";
import sales from "../sales.json";
import Footer from "../components/Footer";
// Sale is Status boolean
// need name of product, date purchased, order id as int, product id as int, quantity as int, unit price as int
function Sales() {
  return (
    <div id="salesPage">
      <Menu />

      <h1 class="pagetitle">Sales</h1>

      <div id="salesWrapper">
        
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
      <Footer />
    </div>
  );
}

export default Sales;
