import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  HomeOutlined,
  DetailsOutlined,
  GroupWorkOutlined,
  RecordVoiceOverOutlined,
  BusinessCenterOutlined,
  MenuOpenRounded,
} from "@material-ui/icons";
import Background from "../../img/background.png";
import IconButton from "@material-ui/core/IconButton";
import AppBar from "@material-ui/core/AppBar";
import Logo from "../../img/logo.jpg";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  bgImg: {
    backgroundImage: `url(${Background})`,
    maxWidth: "100%",
    backgroundSize: "cover",
    paddingBottom: "45%",
    position: "relative",
    [theme.breakpoints.down("sm")]: {
      paddingBottom: "65%",
    },
  },
  header: {
    position: "absolute",
    top: 0,
    left: 0,
    padding: "0 100px",
    width: "100%",
    boxSizing: "border-box",
    background: `rgba(0,0,0,.3)`,
    "& nav": {
      float: "right",
      marginRight: "-100px",
      "& ul": {
        margin: 0,
        padding: 0,
        display: "flex",
        "& li": {
          listStyle: "none",
          "& a": {
            position: "relative",
            height: "50px",
            lineHeight: "50px",
            margin: "10px 0px",
            padding: "0 20px",
            color: "#fff",
            textDecoration: "none",
            display: "block",
            textShadow: `0 2px 5px rgba(0,0,0,.5)`,
            fontWeight: "bold",
            "&::before": {
              content: `' '`,
              position: "absolute",
              bottom: "5px",
              left: "10px",
              width: "100%",
              height: "5px",
              background: "#A3C6FA",
              zIndex: "-1",
              transform: `scaleX(0)`,
              transformOrigin: "left",
              transition: `transform 0.5s`,
              zIndex: 999,
            },
            "&:hover::before": {
              transform: `scaleX(1)`,
              zIndex: 999,
            },
          },
        },
      },
    },
  },
  [theme.breakpoints.down("sm")]: {
    header: {
      padding: "0 20px",
      "& nav": {
        position: "absolute",
        width: "100%",
        height: `calc(100vh - 50px)`,
        background: `rgba(0,0,0,.2)`,
        top: "72px",
        left: "-100%",
        transition: 0.5,
        "&.active": {
          left: 0,
        },
        "& ul": {
          display: "block",
          textAlign: "center",
          "& li": {
            fontSize: "2rem",
            "& a": {
              position: "relative",
              margin: "20px 0px 20px 0",
              textAlign: "right",
              "&::before": {
                content: `' '`,
                position: "absolute",
                bottom: "5px",
                left: "75%",
                width: "35%",
                height: "5px",
                background: "#A3C6FA",
                zIndex: "-1",
                transform: `scaleX(0)`,
                transformOrigin: "left",
                transition: `transform 0.5s`,
                zIndex: 999,
              },
              "&:hover::before": {
                transform: `scaleX(1)`,
                zIndex: 999,
              },
            },
          },
        },
      },
    },
  },

  activeItem: {
    left: 0,
  },
  logo: {
    margin: "10px 0 0px -80px",
    float: "left",
    [theme.breakpoints.down("sm")]: {
      margin: "10px 10px 0 10px",
    },
  },
  icon: {
    margin: "-4px 5px -4px 0px",
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  toggleButton: {
    position: "fixed",
    right: "1%",
    top: "2%",
    padding: "5px",
    cursor: "pointer",
    display: "none",
    zIndex: 999,
    fontSize: "4rem",
    [theme.breakpoints.down("sm")]: {
      display: "flex",
      zIndex: 999,
    },
  },
}));

function show() {
  let element = document.getElementById("sidebar");
  element.classList.toggle("active");
}

function Header() {
  const classes = useStyles();
  return (
    <React.Fragment>
        <AppBar 
            position="sticky"
            color = "transparent"
        >
            <section> 
                <header className={classes.header}>
                    <div className={classes.logo}><a href = "#"><img src={Logo}></img></a></div>
                    <nav id = "sidebar" className = {classes.sidebar}>
                        <ul>
                            <li><a href="https://world-works.co.jp/"><HomeOutlined className={classes.icon}/>Trang chủ</a></li>
                            <li><a href="#reason"><DetailsOutlined className={classes.icon} />Lý do</a></li>
                            <li><a href="#impression"><RecordVoiceOverOutlined className={classes.icon} />Cảm nhận</a></li>
                            <li><a href="#entry"><BusinessCenterOutlined className={classes.icon} />Ứng tuyển</a></li>
                        </ul>
                    </nav>
                    <IconButton onClick={() => {show();}}>
                            <MenuOpenRounded  color="primary" className= {classes.toggleButton} />
                    </IconButton>
                </header>
            </section>
    </AppBar>
    <div className={classes.bgImg}></div>
    </React.Fragment>
  );
}

export default Header;
