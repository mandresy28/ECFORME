import React, { useState } from 'react';
import axios from 'axios';
import "../products.scss";

const Add = () => {
  const [post,setpost] = useState();

const handleChange = (e) => {
  setpost((prev) => ({...prev, [e.target.name]: e.target.value}));
};
const handleFile = (e) => {
  setpost(e.target.files[0])
}
const handleClick = async e =>{
  e.preventDefault();
  axios.post('http://localhost:8081/products')
  .then(res => console.log(res))
  .catch(err => console.log(err));
}

console.log(post)
  return (
    <div className='form'>
      <h1>Add new post</h1>
      <input type="text" placeholder='title'onChange={handleChange} name='title'/>
      <input type="text" placeholder='description'onChange={handleChange} name='description'/>


      <button className='formButton' onClick={handleClick}>Post</button>
    </div>
  )
}

export default Add
