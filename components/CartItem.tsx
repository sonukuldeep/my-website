import { useContext } from 'react';
import CartContext from '../context/CartContext';
import styles from '../styles/CartItem.module.scss'

interface IData {
    item: {
        'id': number;
        'logo': string;
        'heading': string;
        'price': number;
    }
}

interface ICartItemsType {
    id: number;
    logo: string;
    heading: string;
    price: number;
    excerpt: string;
    img: string;
}

const CartItem = ({ item }: IData) => {
    const { cartItems, setCartItems } = useContext(CartContext)
    console.log(item.logo)
    return (
        (<div className={styles.container}>
            <img className={styles.img} src={item.logo} alt="logo" />
            <div>
                <h3 className={styles.h3}>{item.heading}</h3>
                <h4 className={styles.h4}>{item.price}$</h4>
            </div>
            <span onClick={() => removeItemsFromCart(setCartItems, cartItems, item.id)} className={styles.span}><button className={styles.btn}>&times;</button></span>
        </div>)
    )
}

export default CartItem

function removeItemsFromCart(setCartItems: React.Dispatch<React.SetStateAction<ICartItemsType[]>>, cartItems: ICartItemsType[], id: number) {
    const filteredCartItem = cartItems.filter(item => (item.id !== id))
    setCartItems(filteredCartItem)
}