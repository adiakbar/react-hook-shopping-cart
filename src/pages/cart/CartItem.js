import React from 'react'
import { PlusCircleIcon, MinusCircleIcon, TrashIcon } from '../../components/icons'

import { formatNumber } from '../../helpers/utils'

const CartItem = ({product, dataCart}) => {
  
  const {increase, decrease, removeProduct} = dataCart

  return (
    <div className="row no-gutters py-2">
      <div className="col-sm-2 p-2">
        <img src={product.photo} alt={product.name} className="img-fluit d-block" style={{margin: "0 auto", maxHeight: "50px"}} />
      </div>
      <div className="col-sm-4 p-2">
        <h5 className="mb-1">{product.name}</h5>
        <p className="mb-1">Price: {formatNumber(product.price)}</p>
      </div>
      <div className="col-sm-2 p-2 text-center">
        <p className="mb-0">Qty: {product.quantity}</p>
      </div>
      <div className="col-sm-4 p-2 text-right">
        <button className="btn btn-primary btn-sm mr-2 mb-2" onClick={() => increase(product)}>
          <PlusCircleIcon width="20px" />
        </button>
        {
          product.quantity > 1 &&
          <button className="btn btn-danger btn-sm mr-2 mb-2" onClick={() => decrease(product)}>
            <MinusCircleIcon width="20px" />
          </button>
        }

        {
          product.quantity === 1 &&
          <button className="btn btn-danger btn-sm mr-2 mb-2" onClick={() => removeProduct(product)}>
            <TrashIcon width="20px" />
          </button>
        }
      </div>
    </div>
  )
}

export default CartItem
