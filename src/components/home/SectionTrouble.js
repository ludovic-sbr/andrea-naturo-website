import React from 'react'
import acne from '../../assets/images/acne.png'
import stomach from '../../assets/images/stomach.png'
import overweight from '../../assets/images/overweight.png'

const SectionTrouble = () => {
  return (
    <section className="row section-trouble d-flex justify-content-end">
      <div className="section-image d-none d-lg-block col-lg-5" />
      <div className="section-content col-12 col-lg-7 pt-5 pb-4">
        <div className="inner row">
          <h2 className="mb-5 col-12 col-sm-8">
            Les principaux troubles que j'accompagne
          </h2>
          <div className="troubles-list col-12">
            <div className="trouble-item">
              <img src={stomach} alt="Troubles cutanés" />
              <div>
                <span> Désordres digestifs </span>
                <p>
                  Mauvaise digestion, maladies inflammatoires, colon irritable...
                </p>
              </div>
            </div>
            <div className="trouble-item">
              <img src={overweight} alt="Troubles cutanés" />
              <div>
                <span> Déséquilibre pondéral </span>
                <p>
                  Perte et prise de poids, troubles du comportement alimentaire...
                </p>
              </div>
            </div>
            <div className="trouble-item">
              <img src={acne} alt="Troubles cutanés" />
              <div>
                <span> Troubles cutanés </span>
                <p>
                  Acné, eczéma, dermatite atopique, psoriasis, urticaire...
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SectionTrouble