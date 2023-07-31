import React from "react";
import { Grid } from "@mui/material";
import "./styles/CategoriesBar.css";
import { Category } from "./Category";

function CategoriesBar() {
  return (
    <Grid item className="categories_root">
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        {Category.map((val, key) => (
          <Grid item key={key} className="each_category">
            {val.title}
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
}

export default CategoriesBar;
