import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
// import { useFlexLayout } from "react-table";
// import BottomNavigation from '@material-ui/core/BottomNavigation';

const useStyles = makeStyles({
    root: {
      width: '100%',
      height: '100px',
      marginTop:'5em',
      bottom: 0,
      position:'fixed',
      backgroundColor: 'black',
    //   display: 'flex',
      textAlign: 'center',
    },

    title:{
        color: 'white',
    }

    
  });

export default function Footer() {
    const classes = useStyles();
    return (

        <footer className={classes.root}>
            <Typography variant="h4" className={classes.title}>Footer Placeholder</Typography>
            <Typography variant="h6" className={classes.title}>Content Placeholder</Typography>
            
        </footer>
        );
}