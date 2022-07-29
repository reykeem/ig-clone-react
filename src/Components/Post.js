import React from "react";
import Comments from "./Comments";
import Description from "./Description";
import Likebar from "./Likebar";
import "../Styles/post.css";

function Post(props) {
  return (
    <div className="post">
      <div className="img-container">
        <img
          width="600px"
          height="600px"
          src={props.src}
          alt=""
          onDoubleClick={() => props.toggleLike(props.id)}
        />
      </div>
      <Likebar key={props.id} liked={props.liked} />
      <Description
        username={props.username}
        description={props.description}
        userpfp={props.userpfp}
      />
      <Comments comments={props.comments} />
    </div>
  );
}

export default Post;
