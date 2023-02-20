import React, { useContext, useEffect, useState } from 'react'
import styles from '../styles/Cart.module.scss'
import CartContext from '../context/CartContext'
import CartItem from './CartItem'

interface ICartItemsType {
  id: number;
  logo: string;
  heading: string;
  price: number;
  excerpt: string;
  img: string;
}

const Cart = () => {
  const { cartStatus } = useContext(CartContext)
  const { cartItems } = useContext(CartContext)
  const [total, setTotal] = useState(0)

  useEffect(() => {
    const total = cartItems.reduce((acc, current) => acc + current.price, 0)
    setTotal(total)
  }, [cartItems])

  return (
    <div className={cartStatus ? `${styles.container}` : `${styles.disabled}`}>
      <h3 className={styles.cartHeading}>Your cart</h3>
      <div className={styles.cartContainer}>
        {cartItems.map(item => <CartItem key={item.id} item={item} />
        )}
      </div>
      {total === 0 ? "" : <div className={styles.total}>Total <span className={styles.textSmall}>{total}</span>$ <button onClick={() => checkoutHandler(cartItems)} className={styles.checkoutBtn}>Go to Checkout</button></div>}
    </div>
  )
}

export default Cart

function checkoutHandler(cartItems: ICartItemsType[]) {
  const listItems = cartItems.map(item => ({ id: item.id }))
  // fetch('http://localhost:5000/create-checkout', {
  fetch('https://codethatdev.com/.netlify/functions/payment', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ items: listItems })
  })
    .then(res => res.json())
    .then(data => {
      console.log(data)
      window.location.href = data.url})
}