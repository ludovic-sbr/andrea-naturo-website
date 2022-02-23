import React from 'react'

const ItemDetails = ({ style }) => {
  return (
    <div className="item-details" style={style}>
      <div className="timeline">
        <div className="step d-none d-sm-block">
          <span data-info="Prise de rendez-vous" />
        </div>
        <div className="step">
          <span data-info="Questionnaire de santé" />
        </div>
        <div className="step">
          <span data-info="Premier bilan" style={{fontWeight: 'bold'}} />
        </div>
        <div className="step">
          <span data-info="Séance de suivi" />
        </div>
      </div>
      <div className="details d-flex flex-column flex-sm-row">
        <p>Durée : 1h30</p>
        <p>Prix : 75€</p>
        <p>A distance</p>
      </div>
    </div>
  )
}

export default ItemDetails