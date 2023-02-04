import styles from '../styles/Header.module.scss'
import full_width_style from '../styles/Utility.module.scss'
const Header = () => {
    return (
        <header className={styles.header}>
            <div className={`${styles.hero} ${full_width_style.full_width}`}></div>
            <h1>Order your dream website now!</h1>
            <div className={styles.hero_btns}>
                <button className={styles.btn}>Explore</button>
                <button className={styles.btn}>Order on Upwork</button>
            </div>
        </header>
    )
}

export default Header