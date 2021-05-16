import { useState, useEffect } from 'react';
import BlogPosts from './components/BlogPosts';

const postsApi =
  'https://crudcrud.com/api/10c35ec7fd7f44239eaaa059958ba2fc/posts';

const App = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    //GET
    const getPosts = async () => {
      const apiPosts = await fetchPosts();
      setPosts(apiPosts);
    };

    getPosts();
  }, []);

  //Retrieve api data
  const fetchPosts = async () => {
    const res = await fetch(postsApi);
    const data = res.json();
    return data;
  };

  const fetchPost = async (id) => {
    const res = await fetch(`${postsApi}/${id}`);
    const data = res.json();
    return data;
  };

  // POST
  const addPost = async (post) => {
    await fetch(postsApi, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(post),
    });
    const newPost = { ...post };
    setPosts([...posts, newPost]);
  };

  //PUT
  const editPost = async (post) => {
    await fetch(`${postsApi}/${post._id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(post),
    });

    setPosts(...posts);
  };

  const deletePost = async (id) => {
    try {
      await fetch(`${postsApi}/${id}`, {
        method: 'DELETE',
      });
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className='App'>
      <BlogPosts
        posts={posts}
        title='My multidimensional record of space travel'
        addPost={addPost}
        editPost={editPost}
        onDelete={deletePost}
      />
    </div>
  );
};

export default App;
