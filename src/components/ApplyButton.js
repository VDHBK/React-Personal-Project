import React from "react";
import "./ApplyButton.css";

export default function ApplyButton(props) {
  return(
    <a href={props.path} className="button">Ứng tuyển</a>
  );
}
