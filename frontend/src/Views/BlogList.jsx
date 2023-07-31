import React, { useEffect, useState } from "react";
import { Grid } from "@mui/material";
import TopBar from "../Components/TopBar";
import SearchBar from "../Components/SearchBar";
import CategoriesBar from "../Components/CategoriesBar";
import BlogCard from "../Components/BlogCard";
import "./BlogList.css";
import axios from "axios";

function BlogList() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get("http://localhost:3000/api/posts");
      setPosts(res.data);
    };
    fetchPosts();
  }, []);

  useEffect(() => {
    console.log(posts);
  }, [posts]);
  return (
    <Grid item className="bloglist_root">
      <Grid container direction="column">
        <Grid item>
          <TopBar />
        </Grid>
        <Grid item>
          <SearchBar />
        </Grid>
        <Grid item>
          <CategoriesBar />
        </Grid>
        <Grid item className="bloglist_blogs">
          {posts.map((p) => (
            <BlogCard post={p} />
          ))}
          {/* <BlogCard />
          <BlogCard /> */}
        </Grid>
      </Grid>
    </Grid>
  );
}

export default BlogList;
