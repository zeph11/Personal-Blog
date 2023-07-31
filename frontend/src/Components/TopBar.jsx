import React from "react";
import "./TopBar.css";
import { Grid } from "@mui/material";
import { TopBarData } from "./TopBarData";
import { Link } from "react-router-dom";
import { BsFacebook, BsTwitter, BsInstagram, BsLinkedin } from "react-icons/bs";

function TopBar() {
  return (
    <Grid item className="topbar_root">
      <Grid
        container
        direction="row"
        className="topbar_main"
        // justifyContent={"space-evenly"}
      >
        <Grid item className="blog_name">
          Jane Blogs ___
        </Grid>
        <Grid item className="blog_options">
          <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
          >
            {TopBarData.map((val, key) => (
              <Grid
                item
                className={`${
                  val.link.includes(window.location.pathname)
                    ? "each_blogoptionselected"
                    : "each_blogoption"
                }`}
                key={key}
              >
                <Link to={val.link[0]}>
                  <div>{val.title}</div>
                </Link>
              </Grid>
            ))}
          </Grid>
        </Grid>
        <Grid item className="socialmedia_section">
          <BsFacebook className="social_space" />
          <BsTwitter className="social_space" />
          <BsInstagram className="social_space" />
          <BsLinkedin className="social_space" />
        </Grid>
      </Grid>
    </Grid>
  );
}

export default TopBar;

{
  /* <Grid item className="each_blogoption">
              Home
            </Grid>
            <Grid item className="each_blogoption">
              Blogs
            </Grid>
            <Grid item className="each_blogoption">
              About
            </Grid> */
}
