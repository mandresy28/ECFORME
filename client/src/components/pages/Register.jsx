/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import axios from 'axios';
import '../../App.scss';
import RegisterValidation from './RegisterValidation';
import video from '../../LoginAssets/Royalty Free Stock Video Footage panorama of a forest shot in Israel at 4k with Red..mp4';
import logo from '../../LoginAssets/FB_IMG_16910915699834628__2_-removebg-preview.png';

import { Link, useNavigate } from 'react-router-dom';
import { FaUserShield } from 'react-icons/fa';
import { BsFillShieldLockFill } from 'react-icons/bs';
import { AiOutlineSwapRight, AiTwotoneMail } from 'react-icons/ai';

const Register = () => {
  const [errors, setErrors] = useState({
    email: '',
    username: '',
    password: ''
  });
  const [values, setValues] = useState({
    email: '',
    username: '',
    password: ''
  });

  const navigate = useNavigate();

  const handleInput = (event) => {
    setValues((prev) => ({ ...prev, [event.target.name]: event.target.value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const validationErrors = RegisterValidation(values);
    setErrors(validationErrors);

    if (!validationErrors.email && !validationErrors.password && !validationErrors.username) {
      try {
        const response = await axios.post('http://localhost:8081/register', values);
        navigate('/login');
      } catch (error) {
        console.error('Error:', error);
      }
    } else {
      console.log('error');
    }
  };

  return (
    <div className='registerPage flex'>
      <div className='container flex'>
        <div className='videoDiv'>
          <video src={video} autoPlay loop muted />
          <div className='textDiv'>
            <h2 className='title'>"Rejoignez-nous aujourd'hui !"</h2>
            <p>Inscrivez-vous</p>
          </div>

          <div className='footerDiv flex'>
            <span className='text'>Vous avez un compte?</span>
            <Link to='/login'>
              <button className='btn'>Log In</button>
            </Link>
          </div>
        </div>

        <div className='formDiv flex'>
          <div className='headerDiv'>
            <img src={logo} alt="logo img" />
            <h3>Bonjour</h3>
          </div>

          <form action='' className='form grid' onSubmit={handleSubmit}>
            <div className='inputDiv'>
              <label htmlFor='email'>email</label>
              <div className='input flex'>
                <AiTwotoneMail className='icon' />
                <input type='email' id='email' placeholder='Enter email' onChange={handleInput} name='email' />
                {errors.email && <span className="text-danger">{errors.email}</span>}
              </div>
            </div>
            <div className='inputDiv'>
              <label htmlFor='username'>username</label>
              <div className='input flex'>
                <FaUserShield className='icon' />
                <input type='text' id='username' onChange={handleInput} placeholder='Enter Username' name='username' />
                {errors.username && <span className="text-danger">{errors.username}</span>}
              </div>
            </div>

            <div className='inputDiv'>
              <label htmlFor='password'>password</label>
              <div className='input flex'>
                <BsFillShieldLockFill className='icon' />
                <input type='password' id='password' onChange={handleInput} placeholder='Enter password' name='password' />
                {errors.password && <span className="text-danger">{errors.password}</span>}
              </div>
            </div>

            <div className='buttonDiv flex'>
              <button type='submit' className='btn flex'>
                <Link to="/login">
                <span>S'inscrire</span>
                <AiOutlineSwapRight className='icon' />
                </Link>
              </button>
            </div>
            <span>vous acceptez nos conditions et notre politique</span>
            <span className='forgotPassword'>
              Entreprise? <Link to='/registerentreprise'>cliquez ici</Link>
            </span>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
