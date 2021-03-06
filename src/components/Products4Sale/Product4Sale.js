import React from "react";
import { Button, Card, CardContent, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  title: {
    fontSize: 14,
  },
  controlled: {
    maxWidth: "45%",
    alignItems: "flex-start",
    justify: "space-evenly",
    display: "flex",
    flex: "right",
  },
  img: {
    margin: "auto",
    display: "block",
    maxWidth: "100%",
    maxHeight: "100%",
  },
});

export default function Products4Sale(props) {
  const classes = useStyles();

  return (
    // <div>
    <Card item className={classes.controlled}>
      {/* //TODO Add Dropdown Menu Here!!!*/}
      {/* /* Category Buttons. They need to render appropriate products. */}

      {/* The Order Panel with the products buttons. These need formatting, autopopulate, on click events*/}
      <CardContent>
        <img src={props.img} alt={props.img} className="img" />
        <Typography gutterBottom className={classes.title} varient="body1">
          Item: {props.item}
        </Typography>
        <Typography gutterBottom className={classes.title}>
          Description: {props.description}
        </Typography>
        <Typography gutterBottom className={classes.title}>
          Price: {props.price}
        </Typography>
        <Typography gutterBottom className={classes.title}>
          In Stock: {props.instock}
        </Typography>
      </CardContent>
    </Card>
    // </div>
    // class InventoryPanel extends React.Component
  );
}
