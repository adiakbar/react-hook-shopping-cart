import React, {useContext} from 'react'
import {CartContext} from '../../context/CartContext'
import CartItem from './CartItem';

import styles from './CartProducts.module.scss';

const CartProducts = () => {
  const dataCart = useContext(CartContext)

  return (
    <div className={styles.p__container}>
      <div className="card card-body border-0">
        {
          dataCart.cartItems.map(product => <CartItem key={product.id} product={product} dataCart={dataCart} />)
        }
      </div>
    </div>
  )
}

export default CartProducts
