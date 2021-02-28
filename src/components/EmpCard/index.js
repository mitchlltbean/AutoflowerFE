import React from "react";
import clsx from "clsx";
import { red } from "@material-ui/core/colors";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import {
  Avatar,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  //   CardMedia, meant for img's
  Collapse,
  IconButton,
  Typography,
} from "@material-ui/core";
import ExpandMore from "@material-ui/icons/ExpandMore";
import "./style.css";

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      maxWidth: 345,
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
  })
);

export default function EmpCard(props) {
  const classes = useStyles(); //the line stops here...
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <div>
      <Card className={classes.root}>
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
            variant="body1"
            className={classes.title}
            color="textSecondary"
            component="h4"
            title={props.is_manager}
          >
            Manager: {props.is_manager}
            <br />
            Other employee details to come?
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
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
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography paragraph className={classes.title} title={props.login}>
              This is where the employee details will go, like their login code;{" "}
              {props.login}
            </Typography>
          </CardContent>
        </Collapse>
      </Card>
    </div>
  );
}