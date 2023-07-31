import React, { useEffect, useState } from "react";
import { Grid } from "@mui/material";
import "./blogpage.css";
import TopBar from "../Components/TopBar";
// import { BsFacebook, BsTwitter, BsInstagram, BsLinkedin } from "react-icons/bs";
// import CustomButton from "../Components/CustomButton";
import { BiShare } from "react-icons/bi";
// import { CiEdit } from "react-icons/ci";
import { MdDeleteForever } from "react-icons/md";
import { GrEdit } from "react-icons/gr";
import { Link, useLocation } from "react-router-dom";
import axios from "axios";
import HtmlParser from "react-html-parser";
import CustomButton from "../Components/CustomButton";

// import Image from "../Components/Image";
// import aaa from "./../assets/image2.webp";
// import BlogCard from "../Components/BlogCard";

function BlogPage() {
  const [confirm, setconfirm] = useState(false);
  const location = useLocation();
  const path = location.pathname.split("/")[2];
  const [blog, setBlog] = useState([]);

  useEffect(() => {
    const getPost = async () => {
      const res = await axios.get("http://localhost:3000/api/posts/" + path);
      setBlog(res.data);
    };
    getPost();
  }, []);

  useEffect(() => {
    console.log(blog);
    // console.log(path);
  }, [blog]);

  function confirmdelete() {
    setconfirm(!confirm);
  }

  const handleDelete = async () => {
    try {
      const res = await axios.delete(`http://localhost:3000/api/posts/${path}`);
      window.location.replace("/");
      console.log(res);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <Grid item>
      <Grid container direction="column">
        <Grid item>
          <TopBar />
        </Grid>
        {confirm ? (
          <Grid item className="confirm_root">
            <Grid item className="confirm_main">
              <Grid
                container
                direction="column"
                justifyContent="center"
                alignItems="center"
              >
                <Grid item className="confirm_text">
                  Are you sure you want to delete?
                </Grid>
                <Grid item className="confirm_btns">
                  <Grid container>
                    <Grid item className="confirm_btn" onClick={confirmdelete}>
                      <CustomButton name="No, Return" addStyles="return_btn" />
                    </Grid>
                    <Link to="/">
                      <Grid item onClick={handleDelete}>
                        <CustomButton name="Yes, Delete" on />
                      </Grid>
                    </Link>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        ) : null}
        <Grid item>
          <Grid container direction="column" className="blog_main">
            <Grid item className="blogtitleblock">
              <Grid container direction="column">
                <Grid item className="blogtitle">
                  {blog.title}
                </Grid>
                <Grid item className="blogpage_subtitle">
                  {blog.subtitle}
                </Grid>

                <Grid item>
                  <Grid
                    container
                    direction="row"
                    justifyContent="space-between"
                    alignItems="center"
                  >
                    <Grid item className="blogpg_date">
                      Created at: {new Date(blog.createdAt).toDateString()}
                    </Grid>
                    <Grid item>
                      <Grid container direction="row" alignItems="center">
                        <Grid item className="share_icons">
                          <BiShare size={27} />
                        </Grid>
                        <Grid item className="edit_icon">
                          <GrEdit size={23} />
                        </Grid>
                        {/* <Link to="/confirmation"> */}
                        <Grid item className="delete_icon">
                          <MdDeleteForever onClick={confirmdelete} size={28} />
                        </Grid>
                        {/* </Link> */}

                        <Grid item>{/* <CustomButton name="Edit" /> */}</Grid>
                        <Grid item>{/* <CustomButton name="Delete" /> */}</Grid>
                        {/* <Grid item>Share on :</Grid>
                        <Grid item>
                          <BsFacebook className="social_space" />
                          <BsTwitter className="social_space" />
                          <BsInstagram className="social_space" />
                          <BsLinkedin className="social_space" />
                        </Grid> */}
                      </Grid>
                    </Grid>
                  </Grid>
                  <hr />
                </Grid>
              </Grid>
            </Grid>
            <Grid item>
              <Grid container>
                {/* <Grid item className="blog_mainimage">
                  
                  <Image src={aaa} />
                </Grid> */}
                {HtmlParser(blog.desc)}
                {/* {} */}
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        {/* <Grid item className="blog_bar">
          <Grid container direction="row" justifyContent="space-evenly">
            <Grid item>
              <Grid container direction="column">
                <Grid item>Blog</Grid>
                <Grid item> Explanation about the blog</Grid>
              </Grid>
            </Grid>
            <Grid item>blog image</Grid>
          </Grid>
        </Grid> */}
        {/* <Grid item className="blog_remaining">
          <BlogCard />
        </Grid> */}
      </Grid>
    </Grid>
  );
}

export default BlogPage;
