import React, { useState } from 'react';

const NewBlogForm = (props) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    props.addPost({ title, content });
    setTitle('');
    setContent('');
  };

  return (
    <div>
      <p>
        Assuming it is me, post a blog! If someone else, maybe don't?
        #iDontNeedYourValidation
      </p>
      <form onSubmit={onSubmit}>
        <label>Post Title:</label>
        <br />
        <input
          type='text'
          placeholder='Enter a title'
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <br />
        <br />
        <label>Post Content:</label>
        <br />
        <input
          type='textarea'
          placeholder="Enter your thoughts or whatever you'd like."
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <br />
        <br />
        <input type='submit' value='Add Post' />
      </form>
    </div>
  );
};

export default NewBlogForm;
