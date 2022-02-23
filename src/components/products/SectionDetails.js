import React from 'react'
import toxines from "../../assets/images/toxines.png"
import alimentation from "../../assets/images/diet.png"
import diarrhea from "../../assets/images/diarrhea.png"

const SectionDetails = () => {
  return (
    <div className="row section-details d-flex align-items-center">
      <div className="detail col-4 mx-auto">
        <img src={diarrhea} alt="diarrhea" />
        <span> Transit naturel et régulier </span>
      </div>
      <div className="detail col-4 mx-auto">
        <img src={alimentation} alt="alimentation" />
        <span> Alimentation digeste </span>
      </div>
      <div className="detail col-4 mx-auto">
        <img src={toxines} alt="toxines" />
        <span> Adieu les toxines </span>
      </div>
    </div>
  )
}

export default SectionDetails