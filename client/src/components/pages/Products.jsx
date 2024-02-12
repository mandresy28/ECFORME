import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import '../products.scss';

const apiUrl = "http://localhost:8800"; // Replace with your API base URL

export default function Products() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchAllPosts = async () => {
      try {
        const res = await axios.get(`${apiUrl}/products`);
        setPosts(res.data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchAllPosts();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`${apiUrl}/products/${id}`);
      setPosts((prevPosts) => prevPosts.filter((post) => post.id !== id));
    } catch (err) {
      console.log(err);
    }
  };


  return (
    <div className='App'>
      <h1>Pub</h1>
      <div className='posts'>
        {posts.map((post) => (
          <div className='post' key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.desc}</p>
            <button className='delete' onClick={() => handleDelete(post.id)}>
              SUPPRIMER
            </button>
            <button className='update'>
              <Link to={`/update/${post.id}`}>UPDATE</Link>
            </button>
          </div>
        ))}
      </div>
      <button className='formButtton'>
        <Link to='/add'>add New post</Link>
      </button>
      <button className='formButtton'>
        <Link to='/entrepriseform'>add New offer</Link>
      </button>
    </div>
  );
}
