import React from "react";
import Menu from "../components/Menu";
import DataTable from "../components/DataTable";
import ItemCard from "../components/ItemCard";
import products from "../products.json";

function Products() {
  return (
    <div id="productsPage">
      <Menu />
      <div id="productsWrapper">
        <h1>Products</h1>

        <DataTable />

        {products.map((product) => (
          <ItemCard
            item={product.item}
            description={product.description}
            price={product.price}
            instock={product.instock}
          />
        ))}
      </div>
    </div>
  );
}

export default Products;
