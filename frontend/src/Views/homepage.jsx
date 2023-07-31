import React, { useEffect, useState } from "react";
import "./styles/homepage.css";
import { Grid } from "@mui/material";
import { BsPen } from "react-icons/bs";

// import CustomButton from "../Components/CustomButton";
import TopBar from "../Components/TopBar";
import Image from "../Components/Image";
import homepage from "../assets/home.png";
import BlogCard from "../Components/BlogCard";
import SearchBar from "../Components/SearchBar";
import CustomButton from "../Components/CustomButton";
import { Link } from "react-router-dom";
import CategoriesBar from "../Components/CategoriesBar";
import axios from "axios";

function HomePage() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get("http://localhost:3000/api/posts");
      setPosts(res.data.reverse());
    };
    fetchPosts();
  }, []);

  useEffect(() => {
    console.log(posts);
  }, [posts]);

  return (
    <Grid item className="homepage_root">
      <Grid container direction="column">
        <Grid item>
          <TopBar />
        </Grid>
        <Grid item className="homepage_main">
          <Grid container direction="column">
            <Grid item className="homepage_mainsection">
              <Grid
                container
                justifyContent="space-evenly"
                direction="row"
                alignItems="center"
              >
                <Grid item className="homepage_image">
                  <Image src={homepage} />
                </Grid>
                <Grid item className="homepage_remainning">
                  <Grid item className="homepage_intro">
                    Welcome to my space.
                  </Grid>
                  <Grid item className="homepage_subintro">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Inventore beatae sint animi ..
                  </Grid>
                  <Link to="/writeblog">
                    <Grid item className="writeblog_btn">
                      <CustomButton
                        name="Write Blog"
                        Icon={BsPen}
                        addStyles="write_btn"
                      />
                    </Grid>
                  </Link>
                </Grid>
              </Grid>
            </Grid>
            <Grid item>
              <SearchBar />
            </Grid>
            <Grid item>
              <CategoriesBar />
            </Grid>
            <Grid item className="home_latest">
              The Latest and Greatest:
            </Grid>
            <Grid item>
              {posts.map((p) => (
                <BlogCard post={p} key={p.id} />
              ))}
              {/* <BlogCard />
              <BlogCard /> */}
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default HomePage;
