import React from "react";

const Like = (props) => {
  let heart = "fa fa-heart";
  return (
    <i
      onClick={props.onClick}
      style={{ cursor: "pointer" }}
      className={props.liked ? heart : heart + "-o"}
    ></i>
  );
};

export default Like;
