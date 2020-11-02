import React, {createContext, useReducer} from 'react'
import {CartReducer, sumItems} from './CartReducer'

export const CartContext = createContext()

// const storage = [{item: 1}]
const storage = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [];
const initialState = {cartItems: storage, ...sumItems(storage), checkout: false}

const CartContextProvider = ({children}) => {
  const [state, dispatch] = useReducer(CartReducer, initialState)

  const addProduct = payload => {
    dispatch({type: 'ADD_ITEM', payload})
  }

  const contextValues = {
    ...state,
    addProduct
  }

  return (
    <CartContext.Provider value={contextValues}>
      {children}
    </CartContext.Provider>
  )
}
export default CartContextProvider