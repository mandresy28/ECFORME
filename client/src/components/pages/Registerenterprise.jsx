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
import { AiOutlineSwapRight } from 'react-icons/ai';
import { AiTwotoneMail } from 'react-icons/ai';
import { IoMdBusiness } from 'react-icons/io';
import { AiTwotonePhone } from 'react-icons/ai'

const Registerentreprise = () => {

    const [errors, setErrors] = useState({
    email: '',
    username: '',
    password: ''
  });
  const [values, setValues] = useState({
    email: '',
    username: '',
    password: ''

  })

  const navigate =useNavigate();
  const handleInput = (event) => {
    setValues((prev) => ({ ...prev, [event.target.name]: event.target.value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const validationErrors = RegisterValidation(values);
    setErrors(validationErrors);

    if (!validationErrors.email && !validationErrors.password && !validationErrors.username) {
      axios
        .post('http://localhost:8081/registerentreprise', values) // Correct the axios request
        .then((res) => {
          navigate('/');
        })
        .catch((error) => {
          console.error('Error:', error);
        });
    } else {
      console.log('error');
    }
  };
  
  return (
    <div className='registerPage flex'>
      <div className='container flex'>
        <div className="videoDiv">
          <video src={video} autoPlay loop muted/>
                <div className='textDiv'>
                    <h2 className='title'>"Découvrez les possibles recrues!"</h2>
                    <p>Inscrivez-vouz</p>
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
            <img src={logo} alt="logo img"/>
            <h3>Bonjour</h3>
            </div>  


          <form action='' className='form grid'>
            <div className='inputDiv'>
              <label htmlFor='email'>email</label>
              <div className='input flex'>
                <AiTwotoneMail className='icon' />
                <input type='email' id='email_entreprise' placeholder='Enter email' />
              </div>
            </div>
            <div className='inputDiv'>
              <label htmlFor='name'>Entreprise</label>
              <div className='input flex'>
                <IoMdBusiness className='icon' />
                <input type='text' id='entreprise' placeholder='Enter business name' />
              </div>
            </div>
            <div className='inputDiv'>
              <label htmlFor='telephone'>Telephone</label>
              <div className='input flex'>
                <AiTwotonePhone className='icon' />
                <input type='int' id='tel_entreprise' placeholder='Enter business name' />
              </div>
            </div>

            <div className='buttonDiv flex'>
              <button type='submit' className='btn flex'>
                <span>S'inscrire</span>
                <AiOutlineSwapRight className='icon' />
              </button>
            </div>

            <span className='forgotPassword'>
            Utilisateur? <Link to='/register'>cliquez ici</Link>
            </span>
          </form>
        
        </div>

        </div>
      </div>
  );
};

export default Registerentreprise;

