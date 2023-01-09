import { useContext, useState } from 'react'
import { FiShoppingBag } from 'react-icons/fi'
import styles from '../styles/Navbar.module.scss'
import Link from 'next/link'
import Cart from './Cart'
import CartContext, { CartContextProvider } from '../context/CartContext'

const Navbar = () => {
  const [activate, setActivate] = useState('inactive')

  return (
    <CartContextProvider>
      <nav className={styles.nav}>
        <div className={activate === 'activate' ? `${styles.overlay} ${styles.activate}` : `${styles.overlay}`}></div>
        <ul className={styles.navbar}>
          <li className={styles.nav_left}>logo</li>
          <li className={styles.nav_right}>
            <div className={`${styles.menu_title} ${styles.cart}`}><CartIcon />
              <Cart />
            </div>
            <div className={styles.dropdown} onClick={() => { setActivate(pre => pre === 'activate' ? 'inactive' : 'activate') }}><div className={activate === 'activate' ? `${styles.menu_title} ${styles.activate}` : `${styles.menu_title}`}><HambugerIcon /></div>
              <ul className={activate === 'activate' ? `${styles.dropdown_ul} ${styles.activate}` : `${styles.dropdown_ul}`}>
                <li>Account</li>
                <li>Orders</li>
                <li>Coupons</li>
                <li>FAQ</li>
                <li>Contact</li>
                <li>Log out</li>
              </ul>
            </div>
          </li>
        </ul>
      </nav>
    </CartContextProvider>
  )
}

export default Navbar


function HambugerIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200">
      <g strokeWidth="6.5" strokeLinecap="round">
        <path
          d="M72 82.286h28.75"
          fill="#009100"
          fillRule="evenodd"
        // stroke="#ff0000"
        />
        <path
          d="M100.75 103.714l72.482-.143c.043 39.398-32.284 71.434-72.16 71.434-39.878 0-72.204-32.036-72.204-71.554"
          fill="none"
        // stroke="#ff0000"
        />
        <path
          d="M72 125.143h28.75"
          fill="#009100"
          fillRule="evenodd"
        // stroke="#ff0000"
        />
        <path
          d="M100.75 103.714l-71.908-.143c.026-39.638 32.352-71.674 72.23-71.674 39.876 0 72.203 32.036 72.203 71.554"
          fill="none"
        // stroke="#ff0000"
        />
        <path
          d="M100.75 82.286h28.75"
          fill="#009100"
          fillRule="evenodd"
        // stroke="#ff0000"
        />
        <path
          d="M100.75 125.143h28.75"
          fill="#009100"
          fillRule="evenodd"
        // stroke="#ff0000"
        />
      </g>
    </svg>)
}

function CartIcon() {
  const { setCartStatus } = useContext(CartContext)
  return (<FiShoppingBag onClick={() => { setCartStatus(pre => !pre) }} />)
}