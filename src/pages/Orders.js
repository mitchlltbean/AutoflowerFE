import React from "react";
import Grid from "@material-ui/core/Grid";
import InventoryPanel from "../components/InventoryPanel";
import Products4Sale from "../components/Products4Sale/Product4Sale";
import products from "../products.json";
import { makeStyles } from "@material-ui/core/styles";
import "./style.css";
import Footer from "../components/Footer";
import "./style.css";
import Menu from "../components/Menu";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    maxWidth: "85%",
    // width: "calc(100% / 4)",
    height: "8em",
    margin: "1rem",
    position: "relative",
  },

  cardgrid: {
    marginLeft: "auto",
    marginRight: "auto",
    flexWrap: "wrap",
    flexFlow: "column",
    display: "flex",
    flexFlow: "row",
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
      <Menu />
      {/* <Grid
        container
        className={classes.maingrid}
        justify="space-evenly"
        direction="row"
      > */}
      <div>
        <h1>Orders</h1>
        <InventoryPanel />
      </div>
      {/* <Grid item xs={4} className={classes.cardgrid}>
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
      </Grid> */}
      <Footer />
    </div>
  );
}
