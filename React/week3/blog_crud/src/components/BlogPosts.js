import React from 'react';
import BlogPost from './BlogPost';
import NewBlogForm from './NewBlogForm';

const BlogPosts = (props) => {
  console.log(props);
  return (
    <div>
      <h1>{props.title}</h1>
      {props.posts.map((post, index) => (
        <BlogPost key={index} post={post} onDelete={props.onDelete} />
      ))}

      <NewBlogForm addPost={props.addPost} />
    </div>
  );
};

export default BlogPosts;
