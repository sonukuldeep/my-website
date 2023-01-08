import styles from '../styles/Header.module.scss'

const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.hero}></div>
            <h1>Choose and order your dream website now!</h1>
            <button className={styles.btn}>Explore</button>
        </header>
    )
}

export default Header