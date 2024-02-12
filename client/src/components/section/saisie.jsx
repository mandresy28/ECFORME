import React from 'react'
import './section.scss'
import CardItem from '../CardItem';

function saisie() {
  return (
    <div>
    <CardItem
              src='images/saisie-clavier.jpg'
              text={
                <div>conditions :
                    <li> femme/homme</li>
                    <li> entre 18 ans et 35 ans</li>
                    <br/>
                    Ecolage:
                    100 000 Ar
                    <br/>
                    Durrée:
                    2 mois
                    <br/>
                      <ul>
                        <li>Dossiers requis:</li>
                          <ul>
                            <li>Photocopie CIN et baccalauréat</li>
                            <li>Certificat de résidence</li>
                            <li>Curriculum vitae</li>
                            <li>3 photos identiques</li>
                            <li></li>
                          </ul>
                      </ul>
                    </div>
                    }
              label='Operrateur de saisie'
              path='/services'
            />
    </div>
  )
}

export default saisie
