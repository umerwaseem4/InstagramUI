import React from "react";
// import postImage from "../images/postImage.jpg";
import "./Post.css";
import Avatar from "@material-ui/core/Avatar";
import { useState } from "react";
import { useEffect } from "react";
import { db } from "../firebase";

const Post = ({ username, caption, imageURL }) => {
  return (
    <div className="post">
      <div className="post__header">
        <Avatar
          className="post__avatar"
          alt="umer"
          src="/static/images/avatar/1.jpg"
        />
        <h3>{username}</h3>
      </div>

      <img className="post__image" src={imageURL} alt="imagePost" />
      <h4 className="post__text">
        <strong>{username}</strong>: {caption}
      </h4>
    </div>
  );
};

export default Post;
