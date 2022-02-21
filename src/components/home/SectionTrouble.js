import React from 'react'
import acne from '../../assets/images/acne.png'
import stomach from '../../assets/images/stomach.png'
import overweight from '../../assets/images/overweight.png'

const SectionTrouble = () => {
  return (
    <div className="row section-trouble d-flex justify-content-end">
      <div className="section-image d-none d-lg-block col-lg-5" />
      <div className="section-content col-12 col-lg-7">
        <h1 className="mb-5">Les principaux troubles que j'accompagne</h1>
        <div className="troubles-list">
          <div className="trouble-item">
            <img src={stomach} alt="Troubles cutanés" />
            <div>
              <span> Désordres digestifs </span>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod.
              </p>
            </div>
          </div>
          <div className="trouble-item">
            <img src={overweight} alt="Troubles cutanés" />
            <div>
              <span> Perte de poids </span>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod.
              </p>
            </div>
          </div>
          <div className="trouble-item">
            <img src={acne} alt="Troubles cutanés" />
            <div>
              <span> Troubles cutanés </span>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SectionTrouble