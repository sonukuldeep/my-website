import style from '../styles/Cards.module.scss'
import Card from './Card'
import { data } from './mock_data.js'

const Cards = () => {
    return (
        <div id="productCategory" className={`${style.container} globalContainer`}>
            <h2>Choose the type of website you want</h2>
            <div className={style.cards}>
                {data.map((item) => (<Card key={item.id} data={item} />))}
            </div>
        </div>
    )
}

export default Cards