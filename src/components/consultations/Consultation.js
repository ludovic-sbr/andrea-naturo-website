import React, { useState } from 'react'
import { HashLink } from 'react-router-hash-link'
import ItemDetails from './ItemDetails'
import {
  BsFillArrowDownCircleFill,
  BsFillArrowUpCircleFill,
} from 'react-icons/bs'
import image from '../../assets/images/consultation_illustration.png'

const Consultation = () => {
  const [extended, setExtended] = useState(false)

  return (
    <div
      className="consultation col-xl-6 col-lg-7 col-md-11 col-sm-12 mx-auto mb-4">
      <header className="row">
        <div className="image d-none d-sm-block col-sm-5">
          <img src={image} alt="illustration"/>
        </div>
        <div className="header-content col-12 col-sm-7">
          <h3> PREMIER BILAN </h3>
          <p>
            Echange actif axé autour d'une anamnèse qui me permettra de
            créer votre bilan d'hygiène vitale sur mesure
          </p>
        </div>
      </header>
      <ItemDetails style={extended ? { height: '300px' } : { height: '0' }}/>
      <footer>
        <HashLink to="/consultations#appointments" className="link-btn">
          <button className="submit"> PRENDRE RDV</button>
        </HashLink>
      </footer>
      <div className="item-extend" onClick={() => setExtended(!extended)}>
        {extended ? <BsFillArrowUpCircleFill size={20}/> :
          <BsFillArrowDownCircleFill size={20}/>}
      </div>
    </div>
  )
}

export default Consultation