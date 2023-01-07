import { useContext } from 'react'
import DataContext from '../context/DataContext'
import style from '../styles/Cards.module.scss'
import Card from './Card'
import { data } from './mock_data.js'

const Cards = () => {
    const { goTo } = useContext(DataContext)
    return (
        <div className={style.container}>
            <h2 ref={goTo}>Choose the style you are go for</h2>
            <div className={style.cards}>
                {data.map((item, index) => (<Card key={index} heading={item.heading} excerpt={item.excerpt} imgLink={item.img} />))}
            </div>
        </div>
    )
}

export default Cards