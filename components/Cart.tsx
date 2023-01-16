import React, { useContext, useEffect, useState } from 'react'
import styles from '../styles/Cart.module.scss'
import CartContext from '../context/CartContext'
import CartItem from './CartItem'

const Cart = () => {
  const { cartStatus } = useContext(CartContext)
  const { cartItems } = useContext(CartContext)
  const [total, setTotal] = useState(0)

  useEffect(()=>{
    const total = cartItems.reduce((acc, current)=> acc + current.price, 0)
    setTotal(total)
  },[cartItems])

  return (
    <div className={cartStatus ? `${styles.container}` : `${styles.disabled}`}>
      <h3 className={styles.cartHeading}>Your cart</h3>
      <div className={styles.cartContainer}>
        {cartItems.map(item => <CartItem key={item.id} item={item} />
        )}
      </div>
      {total === 0 ? "" : <div className={styles.total}>Total <span className={styles.textSmall}>{total}</span>$ <button className={styles.checkoutBtn}>Go to Checkout</button></div>}
    </div>
  )
}

export default Cart

