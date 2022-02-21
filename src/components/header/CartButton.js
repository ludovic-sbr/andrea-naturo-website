import React, { useContext, useEffect, useState } from 'react'

import { useSelector } from 'react-redux'
import { CartContext } from '../../context/CartContext'
import { BsBasket2Fill } from 'react-icons/bs'

const CartButton = () => {
  const { setCartStatus } = useContext(CartContext)
  let itemsNb = useSelector(state => state.cart.itemsNb)
  let [totalItems, setTotalItems] = useState(itemsNb)

  useEffect(() => {
    setTotalItems(itemsNb)
  }, [itemsNb])

  return (
    <button className="btn btn-success cart-btn" onClick={() => setCartStatus(true)}>
      <BsBasket2Fill size={20} />
      { itemsNb > 0 ? <div className="counter">{ itemsNb }</div> : null}
    </button>
  )
}

export default CartButton