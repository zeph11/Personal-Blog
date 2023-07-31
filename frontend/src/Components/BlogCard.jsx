import React from "react";
import { Grid } from "@mui/material";
import "./Blogcard.css";
import Image from "./Image";
// import blog1 from "./../assets/landing.svg";
import blog1 from "../assets/homepage.png";

import CustomButton from "./CustomButton.jsx";
import { CiEdit } from "react-icons/ci";
import { Link } from "react-router-dom";

function BlogCard({ post }) {
  return (
    <Grid item className="blogcard_root">
      <Grid container direction="row">
        <Grid item className="blogcard_image">
          <Image src={blog1} />
        </Grid>
        <Grid item className="blogcard_desc">
          <Grid container direction="column">
            <Grid item className="blogcard_date">
              <Grid
                container
                direction="row"
                justifyContent="space-between"
                alignItems="center"
              >
                <Grid item>{new Date(post.createdAt).toDateString()}</Grid>
                <Grid item>
                  <Grid container alignItems="center">
                    <Grid item className="blogcard_icon" alignItems="center">
                      <CiEdit className="icon" size={25} />
                    </Grid>
                    <Grid item className="blogcard_edit">
                      Edit the blog
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            <Grid item className="blogcard_author">
              {post.username}
            </Grid>

            <Grid item className="blogcard_blogname">
              {post.title}
            </Grid>
            <Grid item>{post.subtitle}</Grid>
            <Grid item className="blogcard_button">
              <Link to={`/blog/${post._id}`}>
                <CustomButton name="Read More..."></CustomButton>
              </Link>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <hr />
    </Grid>
  );
}

export default BlogCard;
