import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Text from "./Text";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    margin: "30px 0 50px 0",
    paddingTop: "30px",
    "& h3": {
      fontSize: "2em",
      boderBottom: "1px solid yellow",
    },
    "& p": {
      position: "relative",
      fontSize: "1.1em",
      padding: "-20px 0 50px 0",
      color: `rgba(0,0,0,0.6)`,
      "&:after": {
        content: `' '`,
        position: "absolute",
        bottom: -5,
        left: "40%",
        width: "20%",
        height: "1.2px",
        background: "#A0A6AF",
      },
    },
  },
}));

export default function Heading(props) {
  const classes = useStyles();

  return (
    <React.Fragment>
      <div className={classes.root}>
        <Text variant="title">
          <h3>{props.data.heading}</h3>
          <p>{props.data.subHeading}</p>
        </Text>
      </div>
    </React.Fragment>
  );
}
