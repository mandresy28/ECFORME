import React from 'react';
import './Cards.scss';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Etudiez nos formations</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/machine-industrielle.jpg'
              text='Apprenez le textile industrielle'
              label='Machine Industrielle'
              path='/services'
            />
            <CardItem
              src='images/coupe_couture.jpeg'
              text='Soyez un styliste hors-pair'
              label='Coupe et Couture'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/saisie-clavier.jpg'
              text='Ameliorez vos connaissances informatique'
              label='Operateur de saisie'
              path='/saisie'
            />
            <CardItem
              src='images/entreupre.jpg'
              text='Apprenez a créer votre propre entreprise'
              label='Entreprenariat'
              path='/products'
            />
            <CardItem
              src='images/form-rurale.jpg'
              text='Connaissez toutes les technique du monde rurale'
              label='Formation rurale'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
          <CardItem
              src='images/img-7.jpg'
              text='Connaissez toutes les technique du monde rurale'
              label='formation pratique et qualifiante'
              path='/services'
            />
            <CardItem
              src='images/entreupre.jpg'
              text='Connaissez toutes les technique du monde rurale'
              label='Enreupreunariat'
              path='/services'
            />
            <CardItem
              src='images/aide-personne.jpg'
              text='Connaissez toutes les technique du monde rurale'
              label='Auxilliaire de vie'
              path='/services'
            />
            <CardItem
              src='images/Personnel-maison.jpg'
              text='Connaissez toutes les technique du monde rurale'
              label='gens de maison'
              path='/services'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
