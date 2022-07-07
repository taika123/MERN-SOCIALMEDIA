import React from 'react';
import { PostsData } from '~/components/Data/PostData';
import Post from '../Post/Post';
import './Posts';

const Posts = () => {
  return (
    <div className="Posts">
      {PostsData.map((data, i) => {
        return <Post data={data} key={i} />;
      })}
    </div>
  );
};

export default Posts;
