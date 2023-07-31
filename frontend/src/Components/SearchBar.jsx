import React from "react";
import { Grid, InputLabel } from "@mui/material";
import "./SearchBar.css";
import FormControl from "@mui/material/FormControl";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";
import { IoSearch } from "react-icons/io5";
import CustomButton from "./CustomButton";

function SearchBar() {
  const [value, setValue] = React.useState("");

  const handleChange = (event) => {
    setValue(event.target.value);
  };
  return (
    <Grid item className="searchbar_root">
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <Grid item className="searchbox">
          <FormControl style={{ width: "100%" }}>
            <InputLabel
              className="input_label"
              // htmlFor="searchBox"
              style={{ backgroundColor: "white" }}
            >
              Blogs/Categories
            </InputLabel>
            <OutlinedInput
              id="searchBox"
              value={value}
              onChange={handleChange}
              style={{ width: "100%" }}
              endAdornment={
                <InputAdornment>
                  {/* <IconButton aria-label="search" edge="end"> */}
                  <IoSearch />
                  {/* </IconButton> */}
                </InputAdornment>
              }
              label="search"
            />
          </FormControl>
        </Grid>
        <Grid item className="searchbar_btn">
          <CustomButton
            name="Search"
            addStyles="searchbtn_extra"
          ></CustomButton>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default SearchBar;
