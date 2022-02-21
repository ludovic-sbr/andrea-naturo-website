import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  items: {},
  value: 0,
  itemsNb: 0,
  status: "unpaid"
}

const cartSlice = createSlice({
  name: "cart",
  initialState: initialState,
  reducers: {
    addItem: (state, action) => {
      try {
        // On vérifie si le panier ne comporte pas déjà ce produit
        if (Object.keys(state.items).includes(action.payload.name)) throw new Error()

        // Ajout du produit au panier
        let cartValue = state.items
        cartValue[action.payload.name] = action.payload
        state.items = cartValue

        // Mise à jour du compteur de produits
        state.itemsNb = Object.keys(state.items).length

        // Mise à jour de la valeur totale du panier
        let newCartValue = parseFloat(state.value) + action.payload.price
        state.value = newCartValue.toFixed(2)

      } catch (err) {
        return state
      }
    },
    updateCartStatus: (state, action) => {
      state.status = action.payload
    },
    deleteItem: (state, action) => {
      try {
        // Suppression de l'item du panier avec la méthode "delete"
        Object.keys(state.items).forEach(item => {
          if (item === action.payload.name) {
            delete state.items[item]
          }
        })

        // Mise à jours du compteur de produits
        state.itemsNb = Object.keys(state.items).length

        // Mise à jour de la valeur totale du panier
        let newCartValue = parseFloat(state.value) - action.payload.price
        state.value = newCartValue.toFixed(2)

      } catch (err) {
        console.log(err.message)
        return state
      }
    },
    cleanCart: (state) => {
      state.items = {}
      state.itemsNb = 0
      state.value = 0
      state.status = "unpaid"
    },
  }
})

export const { addItem, deleteItem, cleanCart, updateCartStatus } = cartSlice.actions

export default cartSlice.reducer
