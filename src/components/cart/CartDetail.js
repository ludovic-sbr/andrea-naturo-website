import React from 'react'
import CartItem from './CartItem'
import { deleteItem } from '../../redux/reducers/cart.reducer'
import { useDispatch } from 'react-redux'

const CartDetail = ({ cart, goToCheckout, payment }) => {
  const dispatch = useDispatch()

  const deleteFromCard = (item) => {
    dispatch(deleteItem(cart.items[item]))
  }

  const itemList = Object.keys(cart.items).map(item => (
    <CartItem
      key={item}
      item={cart.items[item]}
      deleteFromCard={() => deleteFromCard(item)}
      paymentStatus={payment}
    />
  ))

  return (
    <div className={payment ? "col-0 col-md-6 col-lg-5 col-xl-3 cart-detail" : "col-12 col-md-6 col-lg-5 col-xl-3 cart-detail"}>
      <header>
        { !payment ? <h2>PANIER</h2> : <h2 style={{fontSize: '21px', margin: 'auto'}}> RECAPITULATIF DE COMMANDE </h2>}
      </header>
      <section>
        { cart.itemsNb > 0 ? itemList : <span> Votre panier est vide.</span>}
      </section>
      {
        cart.itemsNb > 0 ? (
          <footer>
            <div>
              <div className="top-info">
                TOTAL
              </div>
              <div className="top-info text-right">
                { cart.value }€
              </div>
            </div>
            { !payment ? <button className="btn btn-primary submit" onClick={goToCheckout}> PAYER </button> : null }
          </footer>
        ) : null
      }
    </div>
  )
}

export default CartDetail