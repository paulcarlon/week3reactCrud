import React from 'react';
import { FaTimes } from 'react-icons/fa';

const BlogPost = ({ post, onDelete }) => {
  return (
    <div>
      <div style={{ border: '2px solid #333' }}>
        <h3>
          {post.title}{' '}
          <FaTimes
            style={{ color: 'red', cursor: 'pointer' }}
            onClick={() => onDelete(onDelete)}
          />
        </h3>
        <p>{post.content}</p>
      </div>
    </div>
  );
};
export default BlogPost;
