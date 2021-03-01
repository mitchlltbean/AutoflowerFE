import React from "react";
import Grid from "@material-ui/core/Grid";
import InventoryPanel from "../components/InventoryPanel";
import Products4Sale from "../components/Products4Sale";
import products from "../products.json";
import { makeStyles } from "@material-ui/core/styles";
import "./style.css";

// import Menu from "../components/Menu";
import "./style.css";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    maxWidth: 300,
    width: "calc(100% / 4)",
    height: "8em",
    margin: "1rem",
    position: "relative",
    justifyContent: "center",
    backgroundColor: "gold",
    flexGrow: 1,
    display: "flex",
    flexFlow: "row",
  },
});

export default function Orders() {
  const classes = useStyles();

  return (
    <div>
      {/* Side Bar Menu commented out for this page */}
      {/* <Menu /> */}
      <Grid container direction="row">
        <div>
          <h1>Orders</h1>
          <InventoryPanel />
        </div>
        <Grid
          container
          direction="row"
          justify="space-evenly"
          xs={8}
          spacing={3}
          alignItems="baseline"
          className={classes.root}
        >
          {products.map((product) => (
            <Products4Sale
              img={product.img}
              item={product.item}
              description={product.description}
              price={product.price}
              instock={product.instock}
            />
          ))}
        </Grid>
      </Grid>
    </div>
  );
}
