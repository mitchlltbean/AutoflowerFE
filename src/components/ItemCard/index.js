import React from "react";
import {
  Card,
  CardContent,
  Typography,
  CardActions,
  Button,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
// import useStyles from "./sideBarStyles";
import "./style.css";

//Card styling below
const useStyles = makeStyles({
  root: {
    minWidth: 275,
    maxWidth: 300,
    width: "calc(100% / 4)",
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
});

export default function SimpleCard(props) {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  //Api (get)

  return (
    <Card className={classes.root}>
      <Button>Delete</Button>
      <CardContent>
        <Typography
          className={classes.title}
          color="textSecondary"
          gutterBottom
        >
          {props.item}
        </Typography>

        <Typography variant="h5" component="h2">
          Price: {props.price}
        </Typography>

        <Typography className={classes.pos} color="textSecondary">
          In Stock: {props.instock}
        </Typography>

        <Typography
          className={classes.title}
          color="textSecondary"
          gutterBottom
        >
          {props.description}
        </Typography>

        <Typography variant="h5" component="h2">
          {props.price}
        </Typography>

        <Typography className={classes.pos} color="textSecondary">
          {props.instock}
        </Typography>
      </CardContent>

      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}
