import React, {createContext, useReducer} from 'react'
import {CartReducer, sumItems} from './CartReducer'

export const CartContext = createContext()

// const storage = [{item: 1}]
const storage = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [];
const initialState = {cartItems: storage, ...sumItems(storage), checkout: false}

const CartContextProvider = ({children}) => {
  const [state, dispatch] = useReducer(CartReducer, initialState)

  const addProduct = payload => {
    dispatch({type: 'ADD_PRODUCT', payload})
  }

  const removeProduct = payload => {
    dispatch({type: 'REMOVE_PRODUCT', payload})
  }

  const increase = payload => {
    dispatch({type: 'INCREASE', payload})
  }

  const decrease = payload => {
    dispatch({type: 'DECREASE', payload})
  }

  const clearCart = () => {
    dispatch({type: 'CLEAR'})
  }

  const handleCheckout = () => {
    dispatch({type: 'CHECKOUT'})
  }

  const contextValues = {
    ...state,
    addProduct,
    removeProduct,
    increase,
    decrease,
    clearCart,
    handleCheckout
  }

  return (
    <CartContext.Provider value={contextValues}>
      {children}
    </CartContext.Provider>
  )
}
export default CartContextProvider