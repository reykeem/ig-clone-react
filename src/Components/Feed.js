import React from "react";
import GetImages from "./GetImages";
import "../Styles/feed.css";

function Feed(props) {
  return (
    <div className="feed">
      <div className="feed-container">
        <GetImages />
      </div>
    </div>
  );
}

export default Feed;
