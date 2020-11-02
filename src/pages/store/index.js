import React from 'react'
import Layout from '../../components/Layout'
import ProductsGrid from './ProductsGrid'

const Store = () => {
  return (
    <Layout title="Store" description="This is the store page">
      <div className="text-center mt-5">
        <h1>Store</h1>
        <p>This is store page</p>
      </div>
      <ProductsGrid />
    </Layout>
  )
}

export default Store
