import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
// import { useFlexLayout } from "react-table";
// import BottomNavigation from '@material-ui/core/BottomNavigation';

const useStyles = makeStyles({
  root: {
    width: "100%",
    height: "10%",
    borderTop: "8px solid #c3d5ab",
    bottom: 0,
    position: "fixed",
    backgroundColor: "#070d0d",
    //   display: 'flex',
    textAlign: "center",
  },

  title: {
    color: "white",
  },
});

export default function Footer() {
  const classes = useStyles();
  return (
    <footer className={classes.root}>
      <Typography variant="h4" className={classes.title}>
        AutoFlower
      </Typography>
      <Typography variant="h6" className={classes.title}></Typography>
    </footer>
  );
}
