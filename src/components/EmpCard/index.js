import React from "react";
import clsx from "clsx";
import { red } from "@material-ui/core/colors";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import {
  Avatar,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  //   CardMedia, meant for img's
  Collapse,
  IconButton,
  Tooltip,
  Typography,
} from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import ExpandMore from "@material-ui/icons/ExpandMore";
import "./style.css";
import { BorderLeft } from "@material-ui/icons";

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      maxWidth: 345,
      minWidth: 250,
      width: "calc(100% / 4)",
      margin: ".75rem",
      position: "relative",
      justifyContent: "center",
      // EMPLOYEE CARD COLOR
      backgroundColor: "whitesmoke",
      flexGrow: 1,
      textAlign: "center",
      display: "flex",
      flexFlow: "column",
    },
    // ===========Img Stuff====================================
    // media: {
    //   height: 0,
    //   paddingTop: "56.25%", // 16:9
    // },
    //=========================================================
    expand: {
      transform: "rotate(0deg)",
      marginLeft: "auto",
      transition: theme.transitions.create("transform", {
        duration: theme.transitions.duration.shortest,
      }),
    },
    expandOpen: {
      transform: "rotate(180deg)",
    },
    avatar: {
      backgroundColor: red[500],
    },

    title: {
      fontWeight: "bold",
      fontSize: "24px",
    },
  })
);

export default function EmpCard(props) {
  const classes = useStyles(); //the line stops here...
  const [expanded, setExpanded] = React.useState(false);

  // API calls here

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <div>
      <Card className={classes.root}>
        {/* <p>Name and ID</p> */}
        <CardHeader
          avatar={
            <Avatar
              aria-label="recipe"
              className={classes.avatar}
              alt={props.name}
            />
            //   this would be where the first letter of an employees name will go
          }
          className={classes.title}
          title={props.name}
          subheader={props.emp_id}
        />
        {/* <CardMedia
        className={classes.media}
        image=""
        title=""
      /> */}
        <CardContent>
          <Typography
            variant="h5"
            className={classes.title}
            color="textSecondary"
            title={props.is_manager}
          >
            Manager {props.is_manager}
            <br />
            {/* Other employee details to come? */}
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <Tooltip title="Delete Employee">
            <IconButton
              onClick={() => props.handleDeleteEmployee(props.emp_id)}
            >
              <DeleteIcon />
            </IconButton>
          </Tooltip>

          <Tooltip title="Expand">
            <IconButton
              className={clsx(classes.expand, {
                [classes.expandOpen]: expanded,
              })}
              onClick={handleExpandClick}
              aria-expanded={expanded}
              aria-label="show more"
            >
              <ExpandMore />
            </IconButton>
          </Tooltip>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography paragraph className={classes.title}>
              This is where the employee details will go
              {props.login}
            </Typography>
          </CardContent>
        </Collapse>
      </Card>
    </div>
  );
}
