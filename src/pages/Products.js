import React from "react";
import Menu from "../components/Menu";
import DataTable from "../components/DataTable";
import ItemCard from "../components/ItemCard";
import Wrapper from "../components/Wrapper";
import products from "../products.json";


function Products() {
  return (
    <div>

      <Wrapper>

        <h1>Products</h1>

        {products.map(product => (

          <ItemCard 
            item={product.item}
            description={product.description}
            price={product.price}
            instock={product.instock}
          />
        ))}

        <DataTable />

      </Wrapper>

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
