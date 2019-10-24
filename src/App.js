import React from 'react';
import Header from './components/header/index';
import PostList from './components/postList/index';

import './App.css';

function App() {
  return (
    <>
      <Header />
      <div className="container">
        <PostList />
      </div>
    </>
  );
}

export default App;