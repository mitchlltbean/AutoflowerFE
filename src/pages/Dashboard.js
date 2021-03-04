import React from "react";
import Footer from "../components/Footer";
import Menu from "../components/Menu";
import { makeStyles } from "@material-ui/core/styles";
import Img from "./not_cantabis.png";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  h1: {
    fontFamily: ["Chilanka", "cursive"].join(","),
  },
});

const useStyles = makeStyles({
  page: {
    maxHeight: "100%",
    height: "100%",
    // backgroundColor: "#99bd8fc5",
  },

  headerprimus: {
    position: "relative",
    left: "20%",
    width: "60%",
    fontSize: "100px",
    textAlign: "center",
    fontFamily: "Chilanka",
  },
  // imageprimus: {
  //   position: "absolute",
  //   left: "23%",
  //   top: "9%",
  //   transform: "scaleX(-1)",
  // },
  // imagesecundus: {
  //   position: "absolute",
  //   right: "23%",
  //   top: "9%",
  // },
  // textprimus: {
  //   marginBottom: "2.5%",
  //   fontSize: "18px",
  //   textAlign: "center",
  // },
  // headersecundus: {
  //   marginLeft: 0,
  //   position: "relative",
  //   left: 0,
  //   textAlign: "left",
  //   width: "100%",
  //   fontSize: "30px",
  // },
  // textsecundus: {
  //   marginBottom: "2.5%",
  //   fontSize: "18px",
  //   textAlign: "left",
  // },
  // headertertius: {
  //   marginRight: 0,
  //   position: "relative",
  //   right: 0,
  //   textAlign: "right",
  //   width: "100%",
  //   fontSize: "30px",
  // },
  // texttertius: {
  //   marginBottom: "2.5%",
  //   fontSize: "18px",
  //   textAlign: "right",
  // },
  // leftdiv: {
  //   position: "relative",
  //   left: "5%",
  // },
  // rightdiv: {
  //   position: "relative",
  //   right: "5%",
  // },
});

function Dashboard() {
  const classes = useStyles();
  return (
    <ThemeProvider theme={theme}>
      <div id="dashboardPage">
        <Menu />

        <h1 className={classes.headerprimus}>Welcome to Autoflower!</h1>
        {/* <img
          src={Img}
          alt="Giving Hand"
          height={150}
          width={150}
          className={classes.imageprimus}
        />
        <img
          src={Img}
          alt="Giving Hand"
          height={150}
          width={150}
          className={classes.imagesecundus}
        /> */}
        {/* <div className={classes.page}>
        <h1 className={classes.headerprimus}>Initial Welcome Message!</h1>
        <p className={classes.textprimus}>
          THE NAMES OF THOSE WHO HELPED TO MAKE THIS APP
          <br />
          (ALL CHANGES HERE ARE SUBJECT TO CHANGE)
        </p>

        <div className={classes.leftdiv}>
          <h1 className={classes.headersecundus}>
            A DESCRIPTION OF THE APP IN ITS FULL ONCE FINISHED
          </h1>
          <p className={classes.textsecundus}>AFOREMENTIONED DESCRIPTION</p>
        </div>
        <div className={classes.rightdiv}>
          <h1 className={classes.headertertius}>
            A DESCRIPTION OF THE APP WHERE IT IS NOW
          </h1>
          <p className={classes.texttertius}>AFOREMENTIONED DESCRIPTION</p>
        </div>
        <div className={classes.leftdiv}>
          <h1 className={classes.headersecundus}>
            A DESCRIPTION OF OUR IMMEDIATE STEPS MOVING FORWARD
          </h1>
          <p className={classes.textsecundus}>AFOREMENTIONED DESCRIPTION</p> */}
        {/* //TODO add image to each div and play around with the positioning and maybe you can fenagle it into position */}
        {/* </div> */}
        {/* </div> */}
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default Dashboard;
