import React, { useState } from 'react';
import axios from 'axios';
import { useLocation, useNavigate } from 'react-router-dom';
import "../products.scss";

const Update = () => {
  const [post,setpost] = useState({
    title: "",
    desc: "",
    cover: ""
  });

  const navigate = useNavigate();
  const location = useLocation();

  const postId = location.pathname.split("/")[2]

const handleChange = (e) => {
  setpost((prev) => ({...prev, [e.target.name]: e.target.value}));
};

const handleClick = async e =>{

  e.preventDefault();
  try{
    await axios.put("http://localhost:8800/products/" + postId , post)
    navigate('/products')
  }catch(err){

  }
}

console.log(post)
  return (
    <div className='form'>
      <h1>update the post</h1>
      <input type="text" placeholder='title'onChange={handleChange} name='title'/>
      <input type="text" placeholder='desc'onChange={handleChange} name='desc'/>
      <input type="text" placeholder='cover' onChange={handleChange} name='cover'/>


      <button onClick={handleClick}>Update</button>
    </div>
  )
}

export default Update
