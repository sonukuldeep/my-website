import styles from '../styles/CartItem.module.scss'

interface IData {
    item: {
        'id': number;
        'logo': string;
        'heading': string;
        'price': number;
    }
}

const CartItem = ({ item }: IData) => {
    return (
        (<div className={styles.container}>
            <img className={styles.img} src={item.logo} alt="logo" />
            <div>
                <h3 className={styles.h3}>{item.heading}</h3>
                <h4 className={styles.h4}>{item.price}$</h4>
            </div>
            <span className={styles.span}><button className={styles.btn}>&times;</button></span>
        </div>)
    )
}

export default CartItem