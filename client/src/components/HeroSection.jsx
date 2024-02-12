import React from 'react';
import '../App.scss';
import { Button } from './Button';
import './HeroSection.scss';

function HeroSection() {
  return (
    <div className='hero-container'>
      {/*<video src='../../public/images/img-2.jpg' autoPlay loop muted />*/}
      <h1>BIENVENUE</h1>
      <p>Suivez nos formations</p>
      <div className='hero-btns'>
        <Button
          path='/register'
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          S'INSCRIRE
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
