/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import axios from 'axios';
import '../../App.scss';

import video from '../../LoginAssets/video-1.59e75226d30ad48f9ede.mp4';
import logo from '../../LoginAssets/FB_IMG_16910915699834628__2_-removebg-preview.png';

import { Link, useNavigate } from 'react-router-dom';
import { FaUserShield } from 'react-icons/fa';
import { BsFillShieldLockFill } from 'react-icons/bs';
import { AiOutlineSwapRight } from 'react-icons/ai';

import LoginValidation from './LoginValidation';

const Login = () => {
  const [errors, setErrors] = useState({
    email: '',
    password: '',
  });

  const [values, setValues] = useState({
    email: '',
    password: '',
  });

  const navigate = useNavigate();

  const handleInput = (event) => {
    setValues((prev) => ({ ...prev, [event.target.name]: event.target.value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const validationErrors = LoginValidation(values);
    setErrors(validationErrors);

    if (!validationErrors.email && !validationErrors.password) {
        axios
            .post('http://localhost:8081/login', values)
            .then((res) => {
                if (res.data.isAdmin) {
                    navigate('/admin'); // Redirect to the admin page
                } else {
                    navigate('/');
                }
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }
};


  return (
    <div className="loginPage flex">
      <div className="container flex">
        <div className="videoDiv">
          <video src={video} loop muted autoPlay />
          <div className="textDiv">
            <h2 className="title">"Elargissez et certifiez vos connaissances"</h2>
            <p>suivez nos formations</p>
          </div>

          <div className="footerDiv flex">
            <span className="text">Vous n'avez pas de compte?</span>
            <Link to="/register">
              <button className="btn">Sign up</button>
            </Link>
          </div>
        </div>

        <div className="formDiv flex">
          <div className="headerDiv">
            <img src={logo} alt="logo img" />
            <h3>Bienvenue</h3>
          </div>

          <form action="" className="form grid" onSubmit={handleSubmit}>
            <span className="showMessage">Se connecter</span>
            <div className="inputDiv">
              <label htmlFor="username">email</label>
              <div className="input flex">
                <FaUserShield className="icon" />
                <input
                  type="email"
                  id="email"
                  onChange={handleInput}
                  placeholder="Enter email"
                  name="email"
                  value={values.email}
                />
                {errors.email && <span className="text-danger">{errors.email}</span>}
              </div>
            </div>

            <div className="inputDiv">
              <label htmlFor="password">password</label>
              <div className="input flex">
                <BsFillShieldLockFill className="icon" />
                <input
                  type="password"
                  id="password"
                  onChange={handleInput}
                  placeholder="Enter password"
                  name="password"
                  value={values.password}
                />
                {errors.password && <span className="text-danger">{errors.password}</span>}
              </div>
            </div>

            <div className="buttonDiv flex">
              <button type="submit" className="btn flex">
                <Link to="/">
                  <span>Login</span>
                  <AiOutlineSwapRight className="icon" />
                </Link>
              </button>
            </div>
            <span className="forgotPassword">
              Mot de passe oublié? <a href="">Cliquez ici</a>
            </span>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
