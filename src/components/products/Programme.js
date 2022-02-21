import React from 'react'
import { Link } from 'react-router-dom';

const Programme = ({ item, name }) => {

  return (
    <div className="programme col-xl-6 col-lg-7 col-md-11 col-sm-12 mx-auto mb-4">
      <header>
        <div className="image">
          <img src={item.image} alt="couverture" />
        </div>
        <div className="header-content">
          <h4> { item.name } </h4>
          <p> { item.description } </p>
        </div>
      </header>
      <footer>
        <div className="price">{ Number.parseFloat(item.price).toFixed(2) }€</div>
        <Link to={`/produits/${name}`} style={{textDecoration: "none"}}><button className="submit"> DETAIL </button></Link>
      </footer>
    </div>
  )
}

export default Programme