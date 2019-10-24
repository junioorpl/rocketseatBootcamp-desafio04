import React from 'react';
import Comment from '../comment/index';

import './styles.css';

function Post({ data }) {
  return (
    <div className="mainBox">
      <div className="post">
        <div className="postHeader">
          <img src={data.author.avatar} alt="" className="author" />
          <p>
            <strong>{data.author.name}</strong><br />
            <small>{data.date}</small><br />&nbsp;
        </p>
        </div>
        <p>{data.content}</p><br />
        <hr />
        {data.comments.map(comment => <Comment key={comment.id} data={comment} />)}
      </div>
    </div>
  );
}

export default Post;