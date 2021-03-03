import React from "react";
import Footer from "../components/Footer";
import Menu from "../components/Menu";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  page: {
    maxHeight: "100%",
    height: "100%",
    backgroundColor: "#71b068",
  },
  headerprimus: {
    position: "relative",
    left: "20%",
    width: "60%",
    fontSize: "60px",
    textAlign: "center",
  },
  headersecundus: {
    marginLeft: 0,
    position: "relative",
    left: 0,
    textAlign: "left",
    width: "100%",
  },
  headertertius: {
    marginRight: 0,
    position: "relative",
    right: 0,
    textAlign: "right",
    width: "100%",
  },
  textprimus: {
    marginBottom: "5%",
    fontSize: "18px",
    textAlign: "center",
  },
  textsecundus: {
    marginBottom: "5%",
    fontSize: "18px",
    textAlign: "left",
  },
  texttertius: {
    marginBottom: "5%",
    fontSize: "18px",
    textAlign: "right",
  },
});

function Dashboard() {
  const classes = useStyles();
  return (
    <div id="dashboardPage">
      <Menu />
      <div className={classes.page}>
        <h1 className={classes.headerprimus}></h1>
        <p className={classes.textprimus}>
          Lorem Ipsum is simply dummy text on the Internet and is therefore not
          safe for mass assignment Lorem Ipsum to any person. Lorem Ipsum has
          been around for a long time and it has never been
        </p>
        <h1 className={classes.headersecundus}>
          We keep track of your weed so you do not have to! You can trust us!
          Who wouldn't trust a pothead with weed?
        </h1>
        <p className={classes.textsecundus}>
          Sorry, Data. You did exactly what you had to do. You considered all
          your options, you tried every alternative and then you made the hard
          choice. Mr. Crusher, ready a collision course with the Borg ship. In
          all trust, there is the possibility for betrayal. This is not about
          revenge. This is about justice. Yesterday I did not know how to eat
          gagh. Sure. You'd be surprised how far a hug goes with Geordi, or
          Worf. We know you're dealing in stolen ore. But I wanna talk about the
          assassination attempt on Lieutenant Worf.
        </p>
        <h1 className={classes.headertertius}>
          Here it is simple and easy to organise and run your dispensary without
          the hassle and all the features!
        </h1>
        <p className={classes.texttertius}>
          Sorry, Data. You did exactly what you had to do. You considered all
          your options, you tried every alternative and then you made the hard
          choice. Mr. Crusher, ready a collision course with the Borg ship. In
          all trust, there is the possibility for betrayal. This is not about
          revenge. This is about justice. Yesterday I did not know how to eat
          gagh. Sure. You'd be surprised how far a hug goes with Geordi, or
          Worf. We know you're dealing in stolen ore. But I wanna talk about the
          assassination attempt on Lieutenant Worf.
        </p>
      </div>
      <Footer />
    </div>
  );
}

export default Dashboard;
