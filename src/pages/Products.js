import React from "react";
// import Menu from "../components/Menu";
import DataTable from "../components/DataTable";
import ItemCard from "../components/ItemCard";
import Wrapper from "../components/Wrapper";
import Grid from "@material-ui/core/Grid";
import products from "../products.json";


function Products() {
  return (
    <div>

      <Wrapper>

        <h1>Products</h1>

{/* Creates a grid with 3 columns  */}
      <Grid container spacing={1}>
        {products.map((product) => (
          <Grid item xs={4}>
            <ItemCard
              item={product.item}
              description={product.description}
              price={product.price}
              instock={product.instock}
            />
          </Grid>
          ))}
    </Grid>

  
    <DataTable />

</Wrapper>

    </div>
  );
}

export default Products;
