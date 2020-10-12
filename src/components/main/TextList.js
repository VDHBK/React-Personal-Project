import React from "react";
import {
  Grid,
  makeStyles,
  Avatar,
  ListItemText,
  Typography,
} from "@material-ui/core";
import List from "@material-ui/core/List";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Heading from "./Heading";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    margin: " 30px auto",
    backgroundColor: "#F4FBFF",
  },
  h: {
    height: "20px",
  },
  p: {
    textAlign: "justify",
    fontSize: "14px",
    padding: " 0 50px 30px 50px",
    [theme.breakpoints.up('md')]: {
      textAlign: "center",
     },
  },

  textleft: {
    textAlign: "justify",
  },
  info: {
    height:"200px",
    padding: '0 30px',
    [theme.breakpoints.down('md')]: {
      height:"220px",
    },
    [theme.breakpoints.down('sm')]: {
      height:"250px",
      padding: '0 10px',
    },
    [theme.breakpoints.down('xs')]: {
      height:"320px",
      padding: '0 10px',
    },
  },
  avatar: {
    width: "65px",
    height: "65px",
  },
  title: {
    color: "blue",
    fontSize: "18px",
    paddingBottom: "10px",
  },
  image: {
    display: "block",
    width: "80%",
    height: "auto",
    margin: "20% auto",
    padding: "5px 0",
    height: "300px",
    width: "300px",
    [theme.breakpoints.down("sm")]: {
      display: "none",
      width: "0%",
    },
  },
}));

function getImgPath(imgSrc) {
  return require("../../img/" + imgSrc);
}

export default function TextList(props) {
  const classes = useStyles();
  return (
    <div className={classes.root} id="reason">
      <Heading data={props.data} />
      <Grid container spacing={1} className={classes.content}>
        <Grid item item xs={12}>
          <p className={classes.p}>{props.data.content}</p>
        </Grid>
      </Grid>
      <Grid container spacing={3}>
        <Grid
          item
          xs
          md
          container
          direction="column"
          justify="center"
          alignItems="center"
        >
          {props.data.items.map((item, index) => {
            return (
              <List className={classes.info} align="center" key={index}>
                <ListItemAvatar>
                  <img
                    className={classes.avatar}
                    src={getImgPath(item.image.src)}
                    alt={item.image.alt}
                  />
                </ListItemAvatar>
                <ListItemText>
                  <Typography className={classes.title}>
                    {item.title}
                  </Typography>
                  <Typography variant="body2" className={classes.textleft}>
                    {item.text}
                  </Typography>
                </ListItemText>
              </List>
            );
          })}
        </Grid>
        <Grid>
          <Avatar
            className={classes.image}
            src={getImgPath(props.data.images.src)}
            alt={props.data.images.alt}
          />
        </Grid>
        <Grid
          item
          xs
          md
          container
          direction="column"
          justify="center"
          alignItems="center"
        >
          {props.data.paragraphs.map((para, index) => {
            return (
              <List className={classes.info} align="center" key={index}>
                <ListItemAvatar>
                  <img
                    className={classes.avatar}
                    src={getImgPath(para.image.src)}
                    alt={para.image.alt}
                  />
                </ListItemAvatar>
                <ListItemText>
                  <Typography className={classes.title}>
                    {para.title}
                  </Typography>
                  <Typography variant="body2" className={classes.textleft}>
                    {para.text}
                  </Typography>
                </ListItemText>
              </List>
            );
          })}
        </Grid>
      </Grid>
    </div>
  );
}


