import React from "react";
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

  pos: {
    marginBottom: 12,
  },

  table: {
    minWidth: 650,
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

// The meat and potatos
export default function InventoryPanel() {
  const classes = useStyles();

  return (
    <div>
      {/* All components here into a grid for layout  */}

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
        </Card>
      </div>
    </div>
  );
}
