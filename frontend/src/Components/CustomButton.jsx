import React from "react";
import "./styles/CustomButton.css";

const CustomButton = ({
  //   children,
  name,
  addStyles,
  onClicked,
  Icon,
  //   iconbutton,
  type,
  ...rest
}) => {
  return (
    <button
      id={name}
      className={"main_button " + addStyles}
      onClick={onClicked}
      {...rest}
      type={type === "submit" ? "submit" : "button"}
    >
      {Icon && <Icon className="btn-icon" />}
      {name}
    </button>
  );
};

export default CustomButton;
