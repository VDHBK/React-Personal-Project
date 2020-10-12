import React from "react";
import { Typography, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {},
}));

export default function Text(props) {
  var classes = useStyles();

  return (
    <Typography className={classes.root} {...props}>
      {props.children}
    </Typography>
  );
}
