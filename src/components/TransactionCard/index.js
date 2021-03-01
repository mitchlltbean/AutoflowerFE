import React from "react";
import {
  Card,
  CardContent,
  Typography,
  CardActions,
  Button,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import "./style.css";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    maxWidth: 300,
      width: 'calc(100% / 4)',
      margin: '1rem',
      position:'relative',
      justifyContent: 'center',
      backgroundColor: '#9FC680',
      flexGrow: 1,
      textAlign: 'center',
      display: 'flex',
      flexFlow: 'column',
      columnGap: '20px',
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gridTemplateRows: '100px',
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

export default function TransactionCard(props) {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography
          className={classes.title}
          color="textSecondary"
          gutterBottom
        >
          {props.name}
        </Typography>
        <Typography
          className={classes.title}
          color="textSecondary"
          gutterBottom
        >
          {props.category}
        </Typography>
        <Typography
          className={classes.title}
          color="textSecondary"
          gutterBottom
        >
          {props.product_id}
        </Typography>
        <Typography
          className={classes.title}
          color="textSecondary"
          gutterBottom
        >
          {props.quantity}
        </Typography>
        <Typography
          className={classes.title}
          color="textSecondary"
          gutterBottom
        >
          {props.unit_price}
        </Typography>
        <Typography
          className={classes.title}
          color="textSecondary"
          gutterBottom
        >
          {props.order_id}
        </Typography>
        <Typography
          className={classes.title}
          color="textSecondary"
          gutterBottom
        >
          {props.status}
        </Typography>
      </CardContent>

      <CardActions>
        <Button size="small">Button</Button>
      </CardActions>
    </Card>
  );
}
