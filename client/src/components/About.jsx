import React from "react";
import Ecforme from "../LoginAssets/img-4.jpg";
import "./About.scss";

function About() {
  return (
    <div>
        <h1>A PROPOS DE NOUS</h1>
    
    <div className="about">
        
      <div
        className="aboutleft"
        style={{ backgroundImage: `url(${Ecforme})` }}
      ></div>
      <div className="aboutBottom">
        <p>
        C.E.FOR. a été créée en 2001 pour mettre en œuvre le programme d’Accès à l’Emploi lancé en 1995 par Inter Aide. Une convention d’assistance financière et technique a été signée de 2005 à 2016 avec Inter Aide.
        En décembre 2018, la dissolution de CEFOR fut validée par le Conseil d’Administration après 17 ans d’existence.<br/><n/>
        En février 2019,  ECFORME fut créée avec un statut d’ONG. Avec une équipe opérationnelle de 12 personnes, ECFORME continua les activités existantes par transfert de compétence, telle que prévoyait le statut de l’ex CEFOR.
        Un nouveau Conseil d’Administration fut créé, avec les membres du  Conseil d’Administration de CEFOR et de 4  nouveaux membres, connus par leur expertise dans le domaine de la formation professionnelle.
        </p>
      </div>
    </div>
    </div>
  );
}

export default About;
