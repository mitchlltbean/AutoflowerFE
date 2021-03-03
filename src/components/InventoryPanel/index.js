import { React, useEffect, useState } from "react";
import API from "../../utils/API";
import {
  Card,
  CardContent,
  Typography,
  Divider,
  CardActions,
  Button,
  TextField,
  Grid,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
// import useStyles from "./sideBarStyles";
import "./style.css";
// import products from "../products.json";

//perhaps card or Buttons interface ?

const useStyles = makeStyles({
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },

  table: {
    minWidth: 650,
  },

  summarypanel: {
    minWidth: 275,
    maxWidth: "25%",

    width: "25%",
    height: "50em",
    margin: "auto",
    position: "absolute",
    left: "11%",
    top: "15%",
    justifyContent: "center",
    backgroundColor: "#A9BCD0",
    flexGrow: 1,
    textAlign: "center",
  },
});

// The meat and potatos
export default function InventoryPanel() {
  const [allCategoryProducts, setallCategoryProducts] = useState([]);
  const [categories, setcategories] = useState([]);
  const classes = useStyles();

  useEffect(() => {
    const token = localStorage.getItem("token");
    API.getAllcategories(token)
      .then(({ data }) => {
        console.log(data, "ALL CATEGORY DATA");
        setcategories(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleSelectcategory = (id) => {
    console.log("HANDLE SELECT CAT FIRES", id);
    const token = localStorage.getItem("token");
    API.getSingleCategoryWithProducts(id, token)
      .then(({ data }) => {
        console.log(data, "SET single catogry to products");
        setallCategoryProducts(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const [tax, setTax] = useState([]);
  // const [newTank,setNewTank]= useState("");
  const token = localStorage.getItem("token");
  useEffect(() => {
    console.log(token, "tokentax");
    API.getTax(token)
      .then(({ data }) => {
        console.log(data, "TAXXXXXX");
        setTax(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <div className="one">
        <div className="two">
          {" "}
          {categories.map((category) => {
            return (
              <Button
                onClick={() => handleSelectcategory(category.id)}
                className={classes.root}
                container
                spacing={1}
              >
                <Typography
                  variant="h2"
                  className={classes.title}
                  color="textSecondary"
                  gutterBottom
                >
                  {category.group}
                </Typography>
              </Button>
            );
          })}
          {/* The Order Panel with the products buttons. These need formatting, autopopulate, on click events*/}
          <div>
            <div className={classes.buttoncontainer}>
              <div className={classes.buttonrow}>
                {allCategoryProducts.products &&
                  allCategoryProducts.products.map((product) => {
                    return (
                      <ul>
                        <li>
                          <Button
                            className="button"
                            className={classes.root}
                            // onClick={}
                          >
                            {product.item}
                          </Button>
                        </li>
                      </ul>
                    );
                  })}
                <div
                  style={{ width: "400px", overflow: "auto", height: "100px" }}
                >
                  <pre>{JSON.stringify(allCategoryProducts, null, 4)}</pre>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <Card className={classes.summarypanel}>
          <CardContent>
            <Typography
              className={classes.title}
              color="textSecondary"
              gutterBottom
            >
              Orders
            </Typography>

            <Typography variant="h5" component="h2">
              quick access menu with buttons reflecting current sale and user is
              engaged with. Options to manage the sale as its happening. CRUD
              FUNTIONALITY
            </Typography>

            <Typography className={classes.pos} color="textSecondary">
              Item name
            </Typography>

            <Typography variant="body2" component="p">
              Price
            </Typography>

            <Divider variant="middle" />

            {/* Data Table */}

            <Grid container spacing={2}>
              <Grid container item xs={6} direction="column">
                <Typography>Subtotal</Typography>
                <Typography>Tax</Typography>
                <Typography>State</Typography>
                <Typography>Total</Typography>
              </Grid>

              <Grid container item xs={6} direction="column">
                <TextField />
                <TextField />
                <TextField />
                <TextField />
              </Grid>
            </Grid>
          </CardContent>

          <CardActions>
            <Button size="large">Send</Button>
            <Button size="large">Clear</Button>
          </CardActions>
          <div style={{ width: "280px", overflow: "auto", height: "400px" }}>
            <pre>{JSON.stringify(tax.response, null, 4)}</pre>
          </div>
        </Card>
      </div>
    </div>
  );
}
