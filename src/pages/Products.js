import React from "react";
import "./style.css";
import DataTable from "../components/DataTable";
import ItemCard from "../components/ItemCard";
import products from "../products.json";

function Products() {
  return (
    <div>
                <h1>Sales</h1>

                <h1>Projects</h1>

                {products.map(product => (
                
                    <ItemCard
                    item={product.item}
                    description={product.description}
                    price={product.price}
                    instock={product.instock}
                    />
                    ))}   
                    
          <DataTable />


    </div>
  );
}

export default Products;