import React from 'react'
import styles from '../styles/Footer.module.scss'

const Footer = () => {
  return (
    <footer>
      <div className={styles.container}>
        <div className={styles.flex}>
          <div className={styles.columns_3}>
            <h5>About Us</h5>
            <ul>
              <li><a href="/underconstruction">Company Information</a></li>
              <li><a href="/underconstruction">Contact Us</a></li>
              <li><a href="/underconstruction">Careers</a></li>
            </ul>
          </div>
          <div className={styles.columns_3}>
            <h5>Support</h5>
            <ul>
              <li><a href="/underconstruction">FAQ</a></li>
              <li><a href="/underconstruction">Help Desk</a></li>
              <li><a href="/underconstruction">Forums</a></li>
            </ul>
          </div>
          <div className={styles.columns_3}>
            <h5>Legal</h5>
            <ul>
              <li><a href="/underconstruction">Terms of Service</a></li>
              <li><a href="/underconstruction">Privacy Policy</a></li>
            </ul>
          </div>
          <div className={styles.columns_3}>
            <h5>Social</h5>
            <ul>
              <li><a href="/underconstruction">Facebook</a></li>
              <li><a href="/underconstruction">Twitter</a></li>
              <li><a href="/underconstruction">Instagram</a></li>
            </ul>
          </div>
        </div>
        <div className={styles.copyright}>
            <p>Copyright &copy;{new Date().getFullYear()} CodeThatDev</p>
        </div>
      </div>
    </footer>

  )
}

export default Footer