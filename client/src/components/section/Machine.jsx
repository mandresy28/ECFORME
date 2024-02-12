import React from 'react'
import './section.scss'
import CardItem from '../CardItem';

function machine() {
  return (
    <div>
    <CardItem
              src='images/machine-industrielle.jpg'
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
                            <li>Photocopie CIN</li>
                            <li>Certificat de résidence</li>
                            <li>Curriculum vitae</li>
                            <li>3 photos identiques</li>
                          </ul>
                      </ul>
                    </div>
                    }
              label='Machine Industrielle'
              path='/services'
            />
    </div>
  )
}

export default machine
