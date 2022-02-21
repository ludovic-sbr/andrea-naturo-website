import React, { useState } from 'react'
import ReactLoading from 'react-loading'

const PaymentSuccess = ({ submit, emailStatus }) => {
  const [email, setEmail] = useState('')

  return (
    <div className="payment-success">
      <h3> Merci !</h3>
      <p>
        Ton paiement a bien été effectué!
        <br /><br/>
        Renseigne ton adresse mail afin d'y recevoir tes achats !
      </p>
      <form onSubmit={(e) => submit(e, email)}>
        <label htmlFor="email"> E-MAIL </label>
        <input
          type="email"
          name="email"
          required
          onChange={(e) => setEmail(e.target.value)}
          disabled={emailStatus.processing || emailStatus.succeeded || emailStatus.disabled ? "disabled" : null}
        />
        {
          emailStatus.processing ? <button type="button" className="btn btn-secondary w-50 mx-auto" disabled><ReactLoading type={'bubbles'} color={'white'} /></button>
          : emailStatus.succeeded ? <button type="button" className="btn btn-success w-50 mx-auto"> Envoyé ! </button>
          : emailStatus.disabled ? <button type="button" className="btn btn-danger w-50 mx-auto"> Erreur lors de l'envoi... </button>
          : <button type="submit" className="btn btn-primary submit"> ENVOYER </button>
        }
      </form>
    </div>
  )
}

export default PaymentSuccess