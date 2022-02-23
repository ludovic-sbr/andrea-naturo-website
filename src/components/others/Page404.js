import React from 'react'

const Page404 = () => {
  return (
    <div className="error-404-page container-fluid">
      <div className="container">
        <div className="row">
          <div className="col-12 mx-auto text-center d-flex flex-column">
            <h1>404</h1>
            <span>Il semblerait que tu te sois perdu !</span>
            <a href="/"><button className="btn btn-primary submit"> REVENIR A L'ACCUEIL </button></a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Page404