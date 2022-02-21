import React from 'react'
import { Link } from 'react-router-dom'

const Ebook = ({ item }) => {
  return (
    <div className="ebook col-xl-6 col-lg-7 col-md-11 col-sm-12 mx-auto mb-4">
      <header>
        <div className="image">
          <img src={item.image} alt={item.image}/>
        </div>
        <div className="header-content">
          <h4> {item.name} </h4>
          <p> {item.description} </p>
        </div>
      </header>
      <footer>
        <div className="price"> {item.price === 0
          ? 'GRATUIT'
          : `${item.price}€`} </div>
        <Link to={item.file} className="dl-link" target="_blank" download>
          <button className="submit"> TELECHARGER </button>
        </Link>
      </footer>
    </div>
  )
}

export default Ebook