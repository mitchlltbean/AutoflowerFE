import React from "react";
import { Button, Card, CardContent, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  title: {
    fontSize: 12,
  },
});

export default function Products4Sale(props) {
  const classes = useStyles();

  return (
    // <div>
    <Card className={classes.root}>
        {/* //TODO Add Dropdown Menu Here!!!*/}
        {/* /* Category Buttons. They need to render appropriate products. */}
  
        {/* The Order Panel with the products buttons. These need formatting, autopopulate, on click events*/}
        <CardContent>
          <img src={props.img} alt={props.img} />
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
