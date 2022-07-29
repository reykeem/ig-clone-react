import React, { useState } from "react";
import "../Styles/comments.css";
import pfp from "../Images/pfp.jpeg";

function Comments(props) {
  const [input, setInput] = useState(props.comments);
  const [comments, setComments] = useState([]);

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setComments((prevState) => [...prevState, input]);
    setInput("");
  };

  return (
    <div className="comments">
      <div className="new-comments">
        <ul className="comment-section">
          {comments.map((comment, index) => (
            <li key={index}>
              <div className="commenter">
                <img src={pfp} alt="pfp" />
                <p>
                  <strong>reykeem</strong>
                </p>
              </div>
              <div className="the-comment">{comment}</div>
            </li>
          ))}
        </ul>
      </div>
      <div className="input-and-button">
        <form className="comment-text" onSubmit={handleSubmit}>
          <input
            className="new-comment"
            type="text"
            placeholder="Add a comment..."
            onChange={handleChange}
          />
        </form>
        <div className="submit-btn">
          <button className="submitter" onClick={handleSubmit}>
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}

export default Comments;
