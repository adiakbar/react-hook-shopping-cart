import React, {useContext} from 'react'
import {ProductsContext} from '../../context/ProductsContext'
import {CartContext} from '../../context/CartContext'
import ProductItem from './ProductItem';

import styles from './ProductsGrid.module.scss';

const ProductsGrid = () => {
  const {products} = useContext(ProductsContext)
  const dataCart = useContext(CartContext)
  
  return (
    <div className={styles.p__container}>
      <div className="row">
        <div className="col-sm-8">
          <div className="py-3">
            {products.length} Products
          </div>
        </div>
        <div className="col-sm-4">
          <div className="form-group">
            <input type="text" name="" placeholder="Search product" className="form-control" id=""/>
          </div>
        </div>
      </div>

      <div className={styles.p__grid}>
        {
          products.map(product => (
            <ProductItem 
              key={product.id} 
              product={product}
              dataCart={dataCart}
            />
          ))
        }
      </div>

      <div className={styles.p__footer}>
        {/* this is a footer */}
      </div>
    </div>
  )
}

export default ProductsGrid
