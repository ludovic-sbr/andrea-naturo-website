import React from 'react'
import { Link } from "react-router-dom"

import wave from '../../assets/images/footer-wave.png'
import { BsFacebook, BsInstagram } from 'react-icons/bs'
import { HashLink } from 'react-router-hash-link'

const Index = () => {
  return (
    <div className="container-fluid website-footer">
      <div className="container website-footer-inner d-flex flex-column justify-content-between">
        <div className="row footer-header">
          <h1> ANDREA SOBRERO </h1>
        </div>
        <div className="row footer-inner">
          <div className="col-12 pb-3 col-md-4 pb-md-0 useful-links">
            <HashLink className="link" to="/a-propos#sectionContact"><span>Me contacter</span></HashLink>
            <br/>
            <span>Thermes et conditions</span>
            <br/>
            <span>Conditions générales d'utilisation</span>
          </div>
          <div className="col-12 pb-3 col-md-4 pb-md-0 social">
            <a href="https://www.facebook.com/andrea.naturopathie" rel="noreferrer" target="_blank">
              <BsFacebook size={25} className="media" />
            </a>
            <a href="https://www.instagram.com/andrea.naturopathie" rel="noreferrer" target="_blank">
              <BsInstagram size={25} className="media" />
            </a>
          </div>
          <div className="col-12 pb-3 col-md-4 pb-md-0 website-tree d-flex flex-column align-items-start align-items-md-end">
            <Link to="/a-propos" className="link">A propos</Link>
            <Link to="/consultations" className="link">Consultations</Link>
            <HashLink className="link" to="/produits#programs">Programmes</HashLink>
            <HashLink className="link" to="/produits#ebooks">E-books</HashLink>
          </div>
        </div>
        <div className="row pt-3 pb-3 credits">
          <span className="w-auto mx-auto">Développé par <a href="https://ludovicsobrero.com/" rel="noreferrer" target="_blank">Ludovic Sobrero</a></span>
        </div>
      </div>
      <img src={wave} alt="wave" />
    </div>
  )
}

export default Index
