import React from 'react';

import './styles.css';

function Comment({ data }) {
  return (
    <div className="commentBox">
      <img src={data.author.avatar} alt="" className="comment" />
      <div className="comment">
        <strong>{data.author.name}</strong>&nbsp;
        <span>{data.content}</span>
      </div>
    </div>
  );
}

export default Comment;