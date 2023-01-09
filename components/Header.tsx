import styles from '../styles/Header.module.scss'
import full_width_style from '../styles/Utility.module.scss'
const Header = () => {
    return (
        <header className={styles.header}>
            <div className={`${styles.hero} ${full_width_style.full_width}`}></div>
            <h1>Choose and order your dream website now!</h1>
            <button className={styles.btn}>Explore</button>
        </header>
    )
}

export default Header