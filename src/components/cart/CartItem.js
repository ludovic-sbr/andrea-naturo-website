import React from 'react'
import { MdOutlineCancel } from 'react-icons/md'

const CartItem = ({ item, deleteFromCard, paymentStatus }) => {
  return (
    <div className="cart-item">
      {!paymentStatus ? <MdOutlineCancel className="delete" onClick={deleteFromCard} /> : null}
      <div className="item-image">
        <img src={item.image} alt='test' />
      </div>
      <div className="item-name">
        { item.name }
      </div>
      <div className="item-price">
        <p> { Number.parseFloat(item.price).toFixed(2) }€ </p>
      </div>
    </div>
  )
}

export default CartItem