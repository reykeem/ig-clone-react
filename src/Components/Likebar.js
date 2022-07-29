import React from "react";
import heart from "../Images/like.png";
import threeDot from "../Images/more.png";
import "../Styles/likebar.css";

function Likebar(props) {
  return (
    <div className="likebar">
      <div className="heart">
        <img
          src={heart}
          alt="heart-icon"
          style={{
            filter:
              props.liked === true
                ? "invert(13%) sepia(91%) saturate(6356%) hue-rotate(359deg) brightness(101%) contrast(108%)"
                : "invert(91%) sepia(0%) saturate(529%) hue-rotate(228deg) brightness(83%) contrast(91%)",
          }}
        />
      </div>
      <div className="likers">
        <span>Be the first to like this photo!</span>
      </div>
      <div className="more">
        <img src={threeDot} alt="more-icon" />
      </div>
    </div>
  );
}

export default Likebar;
