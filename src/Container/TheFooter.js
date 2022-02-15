import React from "react";
import "./Styles/TheFooter.scss"
import {  BrowserRouter as Router } from "react-router-dom";


export default function Footer() {
  return (

    <Router >

    

      <footer>   
        <div className="container">
          <div className="row">

            <div className="col-md-4 footer-column">
              <img src="assets/img/Logo/Logo2.png" alt=""/>
              <hr />
              <h5>Société de transcription audio: France, Belgique, Suisse, Luxembourg</h5>
              <hr />
            </div>

            <div className="col-md-3 footer-column">
              <h4>Liens Utiles</h4>
              <h6>Transcription Audio</h6>
              <h6>Saisie de document</h6>
              <h6>Secrétariat externalisé</h6>
              <h6>Relecture / Correction de document</h6>
              <h6>Notre Solution</h6>
              <h6>Nos packs</h6>
              <h6>Contact</h6>
              <h6>Mentions légales</h6>
            </div>

            <div className="col-md-2 footer-column">
              <h4>Métiers</h4>
              <h6>Avocat</h6>
              <h6>huissier</h6>
              <h6>Notaire</h6>
              <h6>Expert</h6>
              <h6>Assurances</h6>
            </div>

            <div className="col-md-3 footer-column">
              <h4>Contact</h4>
              <h6>(+216) 98 118 216</h6>
              <h6>contact@dactylos-service.com </h6>
              <h6> www.dactylos-service.com </h6>
              <h6>Adresse: App n°2, 4ème étage Immeuble Carrefour, rue 14 janvier, Bizerte </h6>
            </div>

          </div>

          <div className="row copyright ">
            <div className="col-md-6 droits">
              <h6>DactylosPad Copyright 2022 - Tous droits réservés</h6>
            </div>
            <div className="col-md-6 mention">
              <h6>Mentions légales - Politique de confidentialités</h6>
            </div>

          </div>





        </div>
      </footer>
    </Router>
  );
}