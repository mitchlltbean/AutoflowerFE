import { React, useEffect, useState } from "react";
import API from "../../utils/API";
import {
  Card,
  CardContent,
  Typography,
  Divider,
  Container,
  CardActions,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TextField,
  Grid,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
// import useStyles from "./sideBarStyles";
import "./style.css";
// import products from "../products.json";

//perhaps card or Buttons interface ?

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    maxWidth: 300,
    width: "calc(100% / 4)",
    height: "4em",
    margin: "1rem",
    position: "relative",
    justifyContent: "center",
    backgroundColor: "#90BE6D",
    flexGrow: 1,
    textAlign: "center",
  },

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

  buttonrow: {
    display: "flex",
    float: "right",
    width: "33%",
  },

  buttoncontainer: {
    backgroundColor: "lightgray",
    width: "40%",
    height: "100%",
  },

  summarypanel: {
    minWidth: 275,
    maxWidth: 500,
    width: "60rem",
    height: "80em",
    margin: "1rem",
    position: "relative",
    justifyContent: "center",
    backgroundColor: "#A9BCD0",
    flexGrow: 1,
    textAlign: "center",
  },
});

// Attempting to render products as cards =========================

// class InventoryPanel extends React.Component {

//     render(){
//     const classes = useStyles();
//     return (
//       <div>
//      {products.map((products) => {
//           console.log(products);
//           return (
//       <Card className={classes.root} container spacing={1} key={products.id}>

//         <CardContent>
//           <Typography variant="h2" className={classes.title} color="textSecondary" gutterBottom>
//             {products.category}
//           </Typography>

//         </CardContent>

//       </Card>
//     )})}
//     </div>
//     );
//   }
// }

// The meat and potatos
export default function InventoryPanel() {
  const [allCategoryProducts, setallCategoryProducts] = useState([]);
  const [categories, setcategories] = useState([]);
  const classes = useStyles();

  useEffect(() => {
    const token = localStorage.getItem("token");
    API.getAllcategories(token)
      .then(({ data }) => {
        console.log(data);
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
        console.log(data, "!!!!!!");
        setallCategoryProducts(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      {/* All components here into a grid for layout  */}
      {/* Category Buttons. They need to render appropriate products. */}

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
            {allCategoryProducts.products.map((product) => {
              return (
                <Button
                  className={classes.root}
                  // onClick={}
                >
                  {product.item}
                </Button>
              );
            })}
            <pre>{JSON.stringify(allCategoryProducts, null, 4)}</pre>
          </div>
        </div>

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
        </Card>
      </div>
    </div>
  );
}
