import { React, useEffect, useState } from "react";
// import Menu from "../components/Menu";
import DataTable from "../components/DataTable";
import ItemCard from "../components/ItemCard";
import Grid from "@material-ui/core/Grid";
// import Menu from "@material-ui/core/Menu";
// import products from "../products.json";
import API from "../utils/API";

function Products() {
  const [products, setProducts] = useState([]);
  // const [newTank,setNewTank]= useState("");
  const token = localStorage.getItem("token");
  useEffect(() => {
    API.getAllproducts(token)
      .then(({ data }) => {
        console.log(data);
        setProducts(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
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
    </div>
  );
}

export default Products;
