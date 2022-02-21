import React from 'react'
import andrea_img from "../../assets/images/andrea_img.jpg"

const SectionWelcome = () => {
  return (
    <div className="row section-welcome d-flex align-items-center">
      <div className="title col-md-12 col-lg-4 mx-auto">
        <h1 className="mx-auto">
          Andrea Sobrero
          <br />
          Naturopathe
        </h1>
        <p> Une approche holistique. </p>
        <p>Pour des résultats qui changent la vie.</p>
      </div>
      <div className="image col-md-12 col-lg-4 mx-auto d-flex justify-content-center">
        <img src={andrea_img} alt="andrea" />
      </div>
    </div>
  )
}

export default SectionWelcome