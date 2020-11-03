import React, {useContext} from 'react'
import Layout from '../../components/Layout'
import {CartContext} from '../../context/CartContext'
import { formatNumber } from '../../helpers/utils'

const Cart = () => {
  const {totalPrice, itemCount, cartItems, clearCart} = useContext(CartContext)

  return (
    <Layout title="Cart" description="This is the Cart Page">
      <div className="text-center mt-5">
        <h1>Cart</h1>
        <p>This is the cart Page</p>
      </div>

      {
        cartItems.length > 0 &&
        <div className="col-sm-3 p-3">
          <div className="card card-body">
            <p className="mb-1">Total Items</p>
            <h4 className="mb-3 txt-right">{itemCount}</h4>
            <p className="mb-1">Total Payment</p>
            <h3 className="m-0 txt-right">{formatNumber(totalPrice)}</h3>
            <hr className="my-4"/>
            <div className="text-center">
              <button type="button" className="btn btn-primary mb-2">CHECKOUT</button>
              <button type="button" className="btn btn-outlineprimary btn-sm" onClick={clearCart}>CLEAR</button>
            </div>
          </div>
        </div>
      }
    </Layout>
  )
}

export default Cart
