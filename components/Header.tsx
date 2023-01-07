import styles from '../styles/Header.module.scss'
import { useContext } from 'react';
import DataContext from '../context/DataContext';

const Header = () => {
    const {goTo} = useContext(DataContext)
    return (
        <header className={styles.header}>
            <div className={styles.hero}></div>
            <h1>Choose and order your dream website now!</h1>
            <button onClick={()=>{goTo.current.scrollIntoView({behavior:"smooth"})}} className={styles.btn}>Explore</button>
        </header>
    )
}

export default Header