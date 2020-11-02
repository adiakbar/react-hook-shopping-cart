export const sumItems = cartItems => {
  let itemCount = cartItems.reduce((total, product) => total + product.quantity, 0)
  let totalPrice = cartItems.reduce((total, product) => total + product.price * product.quantity, 0).toFixed(2)
  return {itemCount, totalPrice}
}

export const CartReducer = (state, action) => {
  switch(action.type) {
    case "ADD_ITEM":
      // cek apakah ada itemnya di dalam cart item
      if(!state.cartItems.find(item => item.id === action.payload.id)) {
        const cartItems = [...state.cartItems, {...action.payload, quantity: 1}]
        return {
          ...state,
          cartItems
        }
      } else {
        return state
      }  
    default:
      return state
  }
}