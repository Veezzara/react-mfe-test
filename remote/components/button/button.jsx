import "./style.css";
import Icon from "../../assets/button.svg";
import React from "react";

export const Button = (props) => (
  <button className="button" onClick={props.onClick}>
    <Icon/>
    {props.children}
  </button>
);

export default Button;
