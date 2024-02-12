import React from 'react';
import '../../App.scss';
import { Button } from '../Button';
import '../HeroSection.scss';

function RegisterChoice() {
  return (
    <div className='hero-container2'>
      <h1>BIENVENUE</h1>
      <p>Choisissez votre catégories</p>
      <div className='hero-btns'>
        <Button
          path='/registerentreprise'
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          ENTREPRISE
        </Button>
        <Button
          path='/register'
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          UTILISATEUR
        </Button>
      </div>
    </div>
  );
}

export default RegisterChoice;
