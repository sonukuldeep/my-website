import React, { useContext } from 'react'
import Products from '../context/ProductContext'

const order = () => {
    const {products} = useContext(Products)
  return (
    <div>
        <h2>Orders page</h2>
        <h3>What you will get?</h3>
        {products.shopify_v1.map(item=><p>{item}</p>)}
    </div>
  )
}

export default order