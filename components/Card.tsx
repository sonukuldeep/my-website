import style from '../styles/Cards.module.scss'

interface proptype { imgLink: string, heading: string, excerpt: string }

const Card = ({ imgLink, heading, excerpt }: proptype) => {
  return (
    <div className={style.card}>
      <img src={imgLink} alt="image" />
      <h3>{heading}</h3>
      <p>{excerpt}</p>
      <div className={style.btn}>
        <button>Demo</button>
        <button>Buy</button>
      </div>
    </div>
  )
}

export default Card