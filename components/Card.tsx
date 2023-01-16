import React, { useContext } from 'react'
import style from '../styles/Cards.module.scss'
import CartContext from '../context/CartContext'

interface proptype {
  data: {
    img: string;
    heading: string;
    excerpt: string;
    logo: string;
    id: number;
    price: number;
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

const Card = ({ data }: proptype) => {
  const { img, heading, excerpt } = data
  const { cartItems, setCartItems } = useContext(CartContext)

  return (
    <div className={style.card}>
      <img src={img} alt="image" />
      <h3>{heading}</h3>
      <p>{excerpt}</p>
      <div className={style.btn}>
        <button>Demo</button>
        <button onClick={() => pupulateCartItems(setCartItems, cartItems, data)}>Buy</button>
      </div>
    </div>
  )
}

export default Card

function pupulateCartItems(setCartItems: React.Dispatch<React.SetStateAction<ICartItemsType[]>>, cartItems: ICartItemsType[], data: ICartItemsType) {
  const itemAlreadyExist = cartItems?.find(item => item.id === data.id)

  if (itemAlreadyExist)
    return

  setCartItems([...cartItems, data])
}