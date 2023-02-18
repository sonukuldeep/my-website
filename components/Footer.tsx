import React from 'react'
import styles from '../styles/Footer.module.scss'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer>
      <div className={styles.container}>
        <div className={styles.flex}>
          <div className={styles.columns_3}>
            <h5>About Us</h5>
            <ul>
              <li><Link href="/underconstruction">Company Information</Link></li>
              <li><Link href="/underconstruction">Contact Us</Link></li>
              <li><Link href="/underconstruction">Careers</Link></li>
            </ul>
          </div>
          <div className={styles.columns_3}>
            <h5>Support</h5>
            <ul>
              <li><Link href="/underconstruction">FAQ</Link></li>
              <li><Link href="/underconstruction">Help Desk</Link></li>
              <li><Link href="/underconstruction">Forums</Link></li>
            </ul>
          </div>
          <div className={styles.columns_3}>
            <h5>Legal</h5>
            <ul>
              <li><Link href="/underconstruction">Terms of Service</Link></li>
              <li><Link href="/underconstruction">Privacy Policy</Link></li>
            </ul>
          </div>
          <div className={styles.columns_3}>
            <h5>Social</h5>
            <ul>
              <li><Link href="/underconstruction">Facebook</Link></li>
              <li><Link href="/underconstruction">Twitter</Link></li>
              <li><Link href="/underconstruction">Instagram</Link></li>
            </ul>
          </div>
        </div>
        <div className={styles.copyright}>
            <p>All Rights reserved &copy; {new Date().getFullYear()} CodeThatDev</p>
        </div>
      </div>
    </footer>

  )
}

export default Footer