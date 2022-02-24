import React from 'react'
import { PaymentElement } from '@stripe/react-stripe-js';
import ReactLoading from 'react-loading'

const CheckoutForm = ({ submit, cart, cardError }) => {
  return (
    <form className="checkout-form" onSubmit={submit}>
      <PaymentElement />
      <span className="error text-danger mt-3"> { cardError } </span>
      {
        cart.status === "processing" ? <button className="submit"> <ReactLoading className='animation' type={'bubbles'} color={'white'} /> </button>
        : <button className="btn btn-primary submit"> PAYER {cart.value}€ </button>
      }
    </form>
  )
}

export default CheckoutForm