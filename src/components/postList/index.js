import React, { Component } from 'react';
import Post from '../post/index';

class PostList extends Component {
  state = {
    posts: [
      {
        id: 1,
        author: {
          name: "Julio Alcantara",
          avatar: "https://avatars0.githubusercontent.com/u/1?v=4"
        },
        date: "04 Jun 2019",
        content: "Pessoal, alguém sabe se a Rocketseat está contratando?",
        comments: [
          {
            id: 1,
            author: {
              name: "Diego Fernandes",
              avatar: "https://avatars0.githubusercontent.com/u/2?v=4"
            },
            content: "Conteúdo do comentário"
          },
          {
            id: 2,
            author: {
              name: "Rafael Fernandes",
              avatar: "https://avatars0.githubusercontent.com/u/3?v=4",
            },
            content: "Outro conteúdo do comentário"
          },
        ]
      },
    ]
  };

  render() {
    return (
      <>
        {this.state.posts.map(post => <Post key={post.id} data={post} />)}
      </>
    );
  }
}

export default PostList;
