import React, { useContext } from 'react'
import styles from '../styles/Cart.module.scss'
import CartContext from '../context/CartContext'
import CartItem from './CartItem'

const Cart = () => {
  const { cartStatus } = useContext(CartContext)

  const data = [
    {
      'id': 1,
      'logo': 'https://d3h2k7ug3o5pb3.cloudfront.net/image/2020-12-04/7a3607e0-3635-11eb-a219-73e9ca8fa2ef.jpg',
      'heading': 'Big website',
      'price': 100
    },
    {
      'id': 2,
      'logo': 'https://d3h2k7ug3o5pb3.cloudfront.net/image/2020-12-04/7a3607e0-3635-11eb-a219-73e9ca8fa2ef.jpg',
      'heading': 'Big website',
      'price': 100
    
    },
    {
      'id': 3,
      'logo': 'https://d3h2k7ug3o5pb3.cloudfront.net/image/2020-12-04/7a3607e0-3635-11eb-a219-73e9ca8fa2ef.jpg',
      'heading': 'Big website',
      'price': 100
    },
    {
      'id': 4,
      'logo': 'https://d3h2k7ug3o5pb3.cloudfront.net/image/2020-12-04/7a3607e0-3635-11eb-a219-73e9ca8fa2ef.jpg',
      'heading': 'Big website',
      'price': 100
    
    }]

  return (
    <div className={cartStatus ? `${styles.container}` : `${styles.disabled}`}>
      <div className={styles.cartContainer}>
        {data.map(item => <CartItem item={item} />
        )}
      </div>
      
    </div>
  )
}

export default Cart

