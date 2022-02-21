import React from 'react'
import { GiCottonFlower } from 'react-icons/gi'

const SectionProductDetail = () => {
  return (
    <div className="section-product-why-people-love-it">
      <div className="container">
        <h2 className="row d-flex justify-content-center"> Pourquoi les gens l'adorent </h2>
        <div className="row why-grid">
          <div className="col-12 col-md-4 mb-4">
            <GiCottonFlower size={50} />
            <h3> Simplicité </h3>
            <p> Des recettes simples et délicieuses accompagnées de conseils. </p>
          </div>
          <div className="col-12 col-md-4 mb-4">
            <GiCottonFlower size={50} />
            <h3> Diversité </h3>
            <p> De nouveaux plats chaque jours avec des produits de saison. </p>
          </div>
          <div className="col-12 col-md-4 mb-4">
            <GiCottonFlower size={50} />
            <h3> Santé </h3>
            <p> Un programme complet pour un mode de vie sain et une peau étincelante ! </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SectionProductDetail