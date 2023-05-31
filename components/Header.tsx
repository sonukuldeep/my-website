import styles from '../styles/Header.module.scss'
import full_width_style from '../styles/Utility.module.scss'

const Header = () => {
    return (
        <header className={styles.header}>
            <div className={`${styles.hero} ${full_width_style.full_width}`}></div>
            <h1>Order your dream website now!</h1>
            <div className={styles.hero_btns}>
                <button className={styles.btn} onClick={() => goToLocation("#productCategory")}>Explore</button>
                <button className={styles.btn} onClick={() => openNewTab(1)}>Order on Upwork</button>
                <button className={styles.btn} onClick={() => openNewTab(2)}>Order on Fiverr</button>
            </div>
        </header>
    )
}

export default Header

function goToLocation(url: string) {
    window.location.href = url
}
function openNewTab(key: number) {
    const urlLink: Map<number, string> = new Map();
    urlLink.set(1, 'https://www.upwork.com/freelancers/~01cacedd7652ce2fa7');
    urlLink.set(2, 'https://www.fiverr.com/s/E5mbB9');

    const url: string = urlLink.get(key)!
    window.open(url, '_blank', 'noreferrer');
};