import React, { useContext } from 'react'
import styles from '../styles/Cart.module.scss'
import CartContext from '../context/CartContext'

const Cart = () => {
  const { cartStatus } = useContext(CartContext)
  console.log(cartStatus)
  return (
    <div className={cartStatus ? `${styles.container}` : `${styles.disabled}`}>
      Hello world
    </div>
  )
}

export default Cart