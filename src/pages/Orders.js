import React from "react";
import Grid from "@material-ui/core/Grid";
import InventoryPanel from "../components/InventoryPanel";
import Products4Sale from "../components/Products4Sale/Product4Sale";
import products from "../products.json";
import { makeStyles } from "@material-ui/core/styles";
import "./style.css";

// import Menu from "../components/Menu";
import "./style.css";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    maxWidth: "85%",
    // width: "calc(100% / 4)",
    height: "8em",
    margin: "1rem",
    position: "relative",
    justifyContent: "space-evenly",
    backgroundColor: "gold",
    flexGrow: 1,
    display: "flex",
    flexFlow: "row",
    // flexWrap: "wrap",
  },

  cardgrid: {
    margin: "auto",
    flexWrap: "wrap",
    flexFlow: "column",
  },

  maingrid: {
    margin: "auto",
    flexWrap: "wrap",
    flexFlow: "column",
  },
});

export default function Orders() {
  const classes = useStyles();

  return (
    <div>
      <Grid className={classes.maingrid}>
        {/* <div> */}
        <h1>Orders</h1>
        <InventoryPanel />
        {/* </div> */}
        <Grid
          container
          direction="row"
          justify="space-evenly"
          xs={4}
          spacing={3}
          className={classes.cardgrid}
        >
          {products.map((product) => (
            <Products4Sale
              img={product.img}
              item={product.item}
              description={product.description}
              price={product.price}
              instock={product.instock}
              className={classes.root}
            />
          ))}
        </Grid>
      </Grid>
    </div>
  );
}
