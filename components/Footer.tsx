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
              <li><a href="#">Company Information</a></li>
              <li><a href="#">Contact Us</a></li>
              <li><a href="#">Careers</a></li>
            </ul>
          </div>
          <div className={styles.columns_3}>
            <h5>Support</h5>
            <ul>
              <li><a href="#">FAQ</a></li>
              <li><a href="#">Help Desk</a></li>
              <li><a href="#">Forums</a></li>
            </ul>
          </div>
          <div className={styles.columns_3}>
            <h5>Legal</h5>
            <ul>
              <li><a href="#">Terms of Service</a></li>
              <li><a href="#">Privacy Policy</a></li>
            </ul>
          </div>
          <div className={styles.columns_3}>
            <h5>Social</h5>
            <ul>
              <li><a href="#">Facebook</a></li>
              <li><a href="#">Twitter</a></li>
              <li><a href="#">Instagram</a></li>
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