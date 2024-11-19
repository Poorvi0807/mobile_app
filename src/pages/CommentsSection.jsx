import React from 'react';
import './CommentsSection.css';
import profileimage from '../assets/21.png';

function CommentsSection() {
  return (
    <div className="comments-section">
      <h3>Comments</h3>
      <div className="comment-box">
        <div className="user-comment">
          <img
            src={profileimage}
            alt="User"
            className="user-avatar"
          />
          <div className="comment-content">
            <p className="user-name">Kristie Robson</p>
            <p className="comment-date">Gave feedback on 17th Sept 2024</p>
            <p className="comment-text">
              The template I bought looked great in the preview, but the actual file was poorly designed and hard to customize. Definitely not worth the price.
            </p>
          </div>
        </div>

        <div className="comment-input">
          <input
            type="text"
            placeholder="Drop a comment, be helpful"
            className="comment-text-input"
          />
          <button type="submit" className="submit-button">Submit</button>
        </div>
      </div>
    </div>
  );
}

export default CommentsSection;