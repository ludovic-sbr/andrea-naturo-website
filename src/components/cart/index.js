import React, { useState, useContext, useEffect } from 'react'

import { useSelector } from 'react-redux'
import { CartContext } from '../../context/CartContext'
import CartDetail from './CartDetail'
import { MdCancelPresentation } from 'react-icons/md'
import PaymentPage from './PaymentPage'
import axios from 'axios'
import { Elements } from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js'

const stripePromise = loadStripe('pk_live_51HSjC0L539h5TLYU3kTuvu2GK802U7c344mtoPp0fFcsYHBpjf5HsZHlRBSvPdgM0OyGxm3ZvdYOoLmCfRnblDWi009DHcKRHD');

const Index = () => {
  const { cartStatus, setCartStatus } = useContext(CartContext)
  const storedCart = useSelector(state => state.cart)
  const [cart, setCart] = useState(storedCart)
  const [ payment, setPayment ] = useState(false)
  const [options, setOptions] = useState({
    clientSecret: ""
  })

  useEffect(() => {
    setCart(storedCart)
  }, [storedCart])

  useEffect(() => {
    if (cart.status === "paid") {
      goToCheckout()
    }
  }, [cartStatus])

  useEffect(() => {
    axios
    .post('http://localhost:5000/create-payment-intent', {
      amount: cart.value * 100,
      currency: 'eur'
    })
    .then(res => {
      setOptions({
        clientSecret: res.data.clientSecret
      })
    })
  }, [cart.value])

  const goToCheckout = () => {
    setPayment(true)
  }

  const closeCart = () => {
    setCartStatus(false)
    setPayment(false)
  }

  return (
    <div className={cartStatus ? "cart container-fluid open" : "cart container-fluid"}>
        <CartDetail
          cart={cart}
          goToCheckout={goToCheckout}
          payment={payment}
          setPayment={setPayment}
        />
        { cartStatus && payment ?
          <Elements stripe={stripePromise} options={options}>
            <PaymentPage cart={cart} payment={payment} />
          </Elements>
          : null
        }
      <div className="exit" onClick={closeCart}>
        <MdCancelPresentation size={30} />
      </div>
    </div>
  )
}

export default Index