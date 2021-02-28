import React from "react";
import { Button, Typography } from "@material-ui/core";
// import SimpleCard from "../ItemCard";
import { makeStyles } from "@material-ui/core/styles";
// import img from "marijuana-leaf.png";

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
  title: {
    fontSize: 14,
  },
  buttoncontainer: {
    backgroundColor: "lightgray",
    width: "40%",
    height: "100%",
  },
  buttonrow: {
    display: "flex",
    float: "right",
    width: "33%",
  },
});

export default function Products4Sale() {
  const classes = useStyles();

  return (
    <div>
      <Button className={classes.root} container spacing={1}>
        <Typography
          variant="h2"
          className={classes.title}
          color="textSecondary"
          gutterBottom
        >
          Flower
        </Typography>
      </Button>

      <Button className={classes.root} container spacing={1}>
        <Typography
          variant="h2"
          className={classes.title}
          color="textSecondary"
          gutterBottom
        >
          Concentrates
        </Typography>
      </Button>

      <Button className={classes.root} container spacing={1}>
        <Typography
          variant="h2"
          className={classes.title}
          color="textSecondary"
          gutterBottom
        >
          Edibles
        </Typography>
      </Button>

      {/* The Order Panel with the products buttons. These need formatting, autopopulate, on click events*/}
      <div className={classes.buttoncontainer}>
        <div className={classes.buttonrow}>
          <Button
            className={classes.root}
            //   onClick={}
          >
            Product #1
          </Button>

          <Button
            className={classes.root}
            // onClick={}
          >
            Product #2
          </Button>

          <Button
            className={classes.root}
            // onClick={}
          >
            Product #3
          </Button>
        </div>
      </div>
    </div>
    // class InventoryPanel extends React.Component
    // Attempting to render products as cards =========================

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
    /* Category Buttons. They need to render appropriate products. */
  );
}
