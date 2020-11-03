export const sumItems = (cartItems) => {
  let itemCount = cartItems.reduce(
    (total, product) => total + product.quantity,
    0
  )
  let totalPrice = cartItems
    .reduce((total, product) => total + product.price * product.quantity, 0)
    .toFixed(2)
  return { itemCount, totalPrice }
}

export const CartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_PRODUCT":
      // cek apakah ada itemnya di dalam cart item
      if (!state.cartItems.find((item) => item.id === action.payload.id)) {
        state.cartItems.push({
          ...action.payload,
          quantity: 1,
        })
      }

      return {
        ...state,
        ...sumItems(state.cartItems),
        cartItems: [...state.cartItems],
      }

    case "REMOVE_PRODUCT":
      return {
        ...state,
        ...sumItems(state.cartItems.filter(item => item.id !== action.payload.id)),
        cartItems: [...state.cartItems.filter(item => item.id !== action.payload.id)]
    }


    case "INCREASE":
      state.cartItems[
        state.cartItems.findIndex((item) => item.id === action.payload.id)
      ].quantity++
      return {
        ...state,
        ...sumItems(state.cartItems),
        cartItems: [...state.cartItems],
      }

    case "DECREASE":
      state.cartItems[
        state.cartItems.findIndex((item) => item.id === action.payload.id)
      ].quantity--
      return {
        ...state,
        ...sumItems(state.cartItems),
        cartItems: [...state.cartItems],
      }

    case "CLEAR":
      return {
        ...state,
        ...sumItems([]),
        cartItems: [],
      }

    case "CHECKOUT":
      return {
        checkout: true,
        ...sumItems([]),
        cartItems: [],
      }

    default:
      return state
  }
}
