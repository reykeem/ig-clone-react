import React from "react";
import "../Styles/description.css";

function Description(props) {
  return (
    <div className="description">
      <div className="poster-pfp">
        <img src={props.userpfp} alt="" />
      </div>
      <div className="caption-container">
        <p className="post-username">
          <strong>{props.username}</strong>
        </p>
        <p className="caption">{props.description}</p>
      </div>
    </div>
  );
}

export default Description;
