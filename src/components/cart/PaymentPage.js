import React, { useState } from 'react'
import { useElements, useStripe } from '@stripe/react-stripe-js'
import CheckoutForm from './CheckoutForm'
import PaymentSuccess from './PaymentSuccess'
import { useDispatch } from 'react-redux'
import axios from 'axios'

import { cleanCart, updateCartStatus } from "../../redux/reducers/cart.reducer"

const PaymentPage = ({ cart, payment }) => {
  const [paymentStatus, setPaymentStatus] = useState(false)
  const [emailStatus, setEmailStatus] = useState({
    succeeded: false,
    processing: false,
    disabled: false
  })
  const dispatch = useDispatch()

  const stripe = useStripe()
  const elements = useElements()

  const handleSubmit = async (event) => {
    event.preventDefault();

    dispatch(updateCartStatus("processing"))

    const result = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: "/",
      },
      redirect: "if_required"
    });

    if (result.error) {
      dispatch(updateCartStatus("unpaid"))
    } else {
      dispatch(updateCartStatus("paid"))
    }
  };

  const sendProducts = (e, email) => {
    e.preventDefault();

    setEmailStatus({
      succeeded: false,
      processing: true,
      disabled: false
    })

    axios.post('https://api.andrea-naturopathie.com/send-products-by-email', {
      email: email,
      products: cart.items
    }).then(res => {
      setEmailStatus({
        succeeded: true,
        processing: false,
        disabled: false
      })
      setPaymentStatus(true)

      dispatch(cleanCart())
    })
  }

  return (
    <div className={payment ? "col-12 col-md-6 col-lg-7 col-xl-9 payment-page" : "col-0 col-md-6 col-lg-7 col-xl-9 payment-page"}>
      {
        cart.status === "paid" || paymentStatus ?
          <PaymentSuccess submit={sendProducts} emailStatus={emailStatus} />
        : <CheckoutForm submit={handleSubmit} cart={cart} />
      }
    </div>
  )
}

export default PaymentPage