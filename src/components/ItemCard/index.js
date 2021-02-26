import React from "react";
import { Card, CardContent, Typography, CardActions, Button } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
// import useStyles from "./sideBarStyles";
import "./style.css";

//perhaps card or Buttons interface ?

const useStyles = makeStyles({
    root: {
      minWidth: 275,
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
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
  
    return (
      <Card className={classes.root}>
        <CardContent>

          <Typography className={classes.title} color="textSecondary" gutterBottom>
            {props.item}
          </Typography>

          <Typography className={classes.title} color="textSecondary" gutterBottom>
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
