import React from 'react'

import {formatNumber} from '../../helpers/utils'

const ProductItem = ({product, dataCart}) => {

  const {cartItems, addProduct, increase} = dataCart

  const notInCart = product => {
    return !cartItems.find(item => item.id === product.id)
  }

  return (
    <div className="card card-body">
      <img src={product.photo} alt="" className="img-fluid" style={{display: "block", margin: "0 auto 10px", maxHeight: "200px"}}/>
      <p>{product.name}</p>
      <h3 className="text-left">{formatNumber(product.price)}</h3>
      <div className="text-right">
        {
          notInCart(product) &&
          <button className="btn btn-outline-primary btn-sm" onClick={() => addProduct(product)}>Add to Cart</button> // true
        }
        
        {
          !notInCart(product) &&
          <button className="btn btn-outline-primary btn-sm" onClick={() => increase(product)}>Add More</button> // false
        }
      </div>
    </div>
  )
}

export default ProductItem
