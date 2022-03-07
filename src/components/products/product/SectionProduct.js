import React from 'react'

import img1 from "../../../assets/images/product-img-1.png"
import img2 from "../../../assets/images/product-img-2.png"
import img3 from "../../../assets/images/product-img-3.png"

import { useDispatch } from 'react-redux'
import { addItem } from '../../../redux/reducers/cart.reducer'

const SectionProduct = ({ product }) => {
  const dispatch = useDispatch()

  const addToCard = () => {
    dispatch(addItem(product))
  }

  return (
    <section className="row section-product">
      <div className="product-image col-xl-6 col-lg-8 col-md-10 col-sm-12 mx-auto mb-4">
        <img src={ product.image } alt="couverture" />
      </div>
      <div className="product-detail col-xl-6 col-lg-8 col-md-10 col-sm-12 mx-auto">
        <div>
          <h2> { product.name } </h2>
          <span className="product-price"> { Number.parseFloat(product.price).toFixed(2) }€ </span>
        </div>
        <p className="product-description"> { product.description } </p>
        <div className="product-meta-icons">
          <div>
            <img src={img1} alt="img1" />
            <span> 4 semaines de menus </span>
          </div>
          <div>
            <img src={img2} alt="img2" />
            <span> Des produits de saison </span>
          </div>
          <div>
            <img src={img3} alt="img3" />
            <span> Recettes et conseils </span>
          </div>
        </div>
        <button type="button" className="btn submit" onClick={addToCard}> Ajouter au panier </button>
      </div>
    </section>
  )
}

export default SectionProduct