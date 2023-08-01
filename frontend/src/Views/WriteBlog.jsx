import React, { useRef, useState } from "react";
import { Grid } from "@mui/material";
import TopBar from "../Components/TopBar";
import "./styles/WriteBlog.css";
import JoditEditor from "jodit-react";
import CustomButton from "../Components/CustomButton";
import axios from "axios";
import { Link } from "react-router-dom";

function WriteBlog() {
  const [title, setTitle] = useState("");
  const [subtitle, setsubTitle] = useState("");
  const [username, setUsername] = useState("");
  const [content, setcontent] = useState("");

  const handleSubmit = async (e) => {
    console.log(title);
    e.preventDefault();
    const newPost = {
      title: title,
      subtitle: subtitle,
      username: username,
      desc: content,
    };
    try {
      const res = await axios.post("http://localhost:3000/api/posts", newPost);
      console.log(res);
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
            <Grid item>Create Blog</Grid>
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
                <CustomButton name="Publish" onClicked={handleSubmit} />
              </Grid>
            </Grid>
          </Grid>
          {/* {HtmlParser(content)} */}
        </Grid>
      </Grid>
    </Grid>
  );
}

export default WriteBlog;
