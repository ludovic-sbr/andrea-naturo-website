import React from 'react'

import Andrea from '../../assets/images/andrea_img.jpg'

const SectionAbout = () => {
  return (
    <div className="row section-about">
      <div className="col-md-6 img-deco d-flex justify-content-center">
        <img src={Andrea} alt="andrea"/>
      </div>
      <div className="col-md-6 content">
        <h2>ANDREA, NATUROPATHE</h2>
        <p>
          Je suis infirmière et diplômée en tant que naturopathe au CERFPA.
          <br/><br/>
          Je souhaite vous transmettre la voie de la nature car vous avez en
          chacun de vous un pouvoir incroyable d’autoguérison.
          <br/><br/>
          Je suis à l’écoute de chacun de vous pour vous aider à vous maintenir
          en santé
          et à devenir acteur de votre bien-être !
          <br/><br/>
          Choisir la naturopathie c’est faire le choix d’être à l’écoute et de
          respecter son corps physique, psychique et spirituel en devenant le
          meilleur de vous même !
        </p>
      </div>
    </div>
  )
}

export default SectionAbout