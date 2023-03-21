import { useContext, useEffect, useRef, useState } from 'react'
import { FiShoppingBag } from 'react-icons/fi'
import styles from '../styles/Navbar.module.scss'
import { FirebaseApp } from '../Firebase/FirebaseConfig.js'
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider, signOut } from 'firebase/auth'
import Cart from './Cart'
import CartContext from '../context/CartContext'
import OverlayContext from '../context/OverlayContext'
import UserContext from '../context/UserContext'
import Link from 'next/link'

const auth = getAuth(FirebaseApp);
const GoogleProvider = new GoogleAuthProvider();
const Navbar = () => {
  const { overlayStatus, setOverlayStatus } = useContext(OverlayContext)
  const { setCartStatus, cartItems } = useContext(CartContext)
  const cart = useRef(null)
  const { userName } = useContext(UserContext)
  const [userStatus, setUserStatus] = useState(false)
  useOutsideAlerter(cart, setCartStatus)
  const domain = process.env.NEXT_PUBLIC_DOMAIN

  useEffect(() => {
    if (userName.uid !== null)
      setUserStatus(true)
    else
      setUserStatus(false)
  }, [userName])

  return (
    <nav className={styles.nav}>
      <div className={overlayStatus ? `${styles.overlay} ${styles.activate}` : `${styles.overlay}`}></div>
      <ul className={styles.navbar}>
        <li className={`${styles.nav_left} ${styles.logo}`}><Link href='/'><img src="/assets/images/Logo.svg" alt="logo" /></Link></li>
        <li className={styles.nav_right}>
          {/* <div data-cartsize={cartItems.length === 0 ? '' : cartItems.length} ref={cart} className={`${styles.menu_title} ${styles.cart} ${styles.item_count}`}>
            <FiShoppingBag style={{ color: '#fff' }} onClick={() => { setCartStatus(pre => !pre) }} />
            <Cart />
          </div> */}
          <div className={styles.dropdown}><div className={overlayStatus ? `${styles.menu_title} ${styles.activate}` : `${styles.menu_title}`}><span onClick={() => { setOverlayStatus(pre => !pre) }}><HambugerIcon /></span></div>
            <ul onClick={() => { setOverlayStatus(pre => !pre) }} className={overlayStatus ? `${styles.dropdown_ul} ${styles.activate}` : `${styles.dropdown_ul}`}>
              <li onClick={signInHandler}>{userStatus ? "Account" : "Log in"}</li>
              <li><Link href='/orders'>Orders</Link></li>
              <li><Link href='#'>Coupons</Link></li>
              <li><Link href='/faq'>Faq</Link></li>
              <li><Link href={'https://codethatdev.com/#contact'}>Contact</Link></li>
              {userStatus ? <li onClick={signOutUser}>Log out</li> : ""}
            </ul>
          </div>
        </li>
      </ul>
    </nav>
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

function useOutsideAlerter(ref: React.RefObject<HTMLElement>, setCartStatus: React.Dispatch<React.SetStateAction<boolean>>) {
  useEffect(() => {
    // Function for click event
    function handleOutsideClick(event: MouseEvent) {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setCartStatus(false)
      }
    }

    // Adding click event listener
    document.addEventListener("click", handleOutsideClick);
    return () => document.removeEventListener("click", handleOutsideClick);
  }, [ref]);
}

function signInHandler() {
  signInWithPopup(auth, GoogleProvider)
    .then(result => {
      console.log(result.user)
    })
}

function signOutUser() {
  signOut(auth)
    .then(() => {
      // Sign-out successful.
      console.log("sigin out successful");
    })
    .catch(error => {
      // An error happened.
      console.log("encountered error during sigin out ", error);
    });
};

function goToLocation(url: string){
  const targetLocation = window.location.origin + url
  window.location.href = targetLocation
}