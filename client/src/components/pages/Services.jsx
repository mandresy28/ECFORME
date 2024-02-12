import React from 'react';
import '../../App.scss';
import Saisie from '../section/saisie';
import Machine from '../section/Machine';
import '../Cards.scss';
import '../Style/Services.scss'; // Create a Services.scss file for styling
import Couture from '../section/couture';
import Footer from '../Footer';

export default function Services() {
  return (
    <>
    <div className='services__container'>
      <h1 className='services__title'>SERVICES</h1>
      <div className='cards__wrapper1'>
        <Saisie />
        <Machine />
        <Couture />
      </div>
    </div>
    <Footer/>
    </>
  );
}
