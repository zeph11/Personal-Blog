import React, { useEffect, useRef, useState } from "react";
import { Grid } from "@mui/material";
import TopBar from "../Components/TopBar";
import "./styles/WriteBlog.css";
import JoditEditor from "jodit-react";
import CustomButton from "../Components/CustomButton";
import axios from "axios";
import { Link, useLocation } from "react-router-dom";
// import HtmlParser from "react-html-parser";

function EditBlog() {
  const location = useLocation();
  const path = location.pathname.split("/")[2];

  const [title, setTitle] = useState("");
  const [subtitle, setsubTitle] = useState("");
  const [username, setUsername] = useState("");
  const [content, setcontent] = useState("");
  const [blog, setBlog] = useState([]);

  useEffect(() => {
    const getPost = async () => {
      const res = await axios.get("http://localhost:3000/api/posts/" + path);
      setBlog(res.data);
    };
    getPost();
  }, []);

  useEffect(() => {
    setcontent(blog.desc);

    console.log(blog);
  }, [blog]);

  // const handleSubmit = () => {
  //   console.log("sc");
  // };
  const handleSubmit = async () => {
    try {
      await axios.put(`http://localhost:3000/api/posts/${path}`, {
        username: username,
        title: title,
        subtitle: subtitle,
        desc: content,
      });
      window.location.reload();
      window.location.replace("/");
    } catch (error) {
      console.error(error);
    }
  };

  const editor = useRef(null);

  return (
    <Grid item>
      <Grid container direction="column">
        <Grid item>
          <TopBar />
        </Grid>
        <Grid item className="writeblog_main">
          <Grid item className="writeblog_black">
            <Grid item>Edit Blog</Grid>
            <Grid item>
              <hr />
            </Grid>
            {/* <center ></center> */}
          </Grid>
          <Grid item className="wrtblog_main">
            <Grid container direction="row" alignItems="center">
              <Grid item className="writeblog_title">
                Title
              </Grid>
              <Grid item className="small">
                <input
                  className="small_input"
                  type="text"
                  onChange={(e) => setTitle(e.target.value)}
                  defaultValue={blog.title}
                ></input>
              </Grid>
            </Grid>
          </Grid>
          <Grid item>
            <Grid container direction="row" alignItems="center">
              <Grid item className="writeblog_title">
                UserName
              </Grid>
              <Grid item className="small">
                <input
                  className="small_input"
                  type="text"
                  onChange={(e) => setUsername(e.target.value)}
                  defaultValue={blog.username}
                ></input>
              </Grid>
            </Grid>
          </Grid>

          <Grid item>
            <Grid container direction="row" alignItems="center">
              <Grid item className="writeblog_title">
                Sub-heading
              </Grid>
              <Grid item className="small">
                <input
                  className="small_input"
                  type="text"
                  onChange={(e) => setsubTitle(e.target.value)}
                  defaultValue={blog.subtitle}
                ></input>
              </Grid>
            </Grid>
          </Grid>

          <Grid item className="writeblog_title">
            Content
          </Grid>
          <Grid item className="write_editor">
            <JoditEditor
              ref={editor}
              value={content}
              onChange={(newContent) => setcontent(newContent)}
              // defaultValue={blog.desc}
            />
          </Grid>
          <Grid item className="write_bottombtn">
            <Grid container direction="row" justifyContent="end">
              <Link to="/">
                <Grid item className="cancel_btnspace">
                  <CustomButton name="Cancel" addStyles="cancel_btn" />
                </Grid>
              </Link>

              <Grid item>
                <CustomButton name="Save Changes" onClicked={handleSubmit} />
              </Grid>
            </Grid>
          </Grid>
          {/* {HtmlParser(content)} */}
        </Grid>
      </Grid>
    </Grid>
  );
}

export default EditBlog;
