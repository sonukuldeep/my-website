import styles from '../styles/Slider.module.scss'

const Slider = () => {
  return (
    <div className={styles.container}>
      <div className={styles.slider}>
        <div className={styles.slide}>
          <img className={styles.img} src="https://source.unsplash.com/random/1" alt='img' />
        </div>
        <div className={styles.slide}>
          <img className={styles.img} src="https://source.unsplash.com/random/2" alt='img' />
        </div>
        <div className={styles.slide}>
          <img className={styles.img} src="https://source.unsplash.com/random/3" alt='img' />
        </div>
        <div className={styles.slide}>
          <img className={styles.img} src="https://source.unsplash.com/random/4" alt='img' />
        </div>
        <div className={styles.slide}>
          <img className={styles.img} src="https://source.unsplash.com/random/5" alt='img' />
        </div>
      </div>
      <div className={styles.slider}>
        <div className={styles.slide}>
          <img className={styles.img} src="https://source.unsplash.com/random/1" alt='img' />
        </div>
        <div className={styles.slide}>
          <img className={styles.img} src="https://source.unsplash.com/random/2" alt='img' />
        </div>
        <div className={styles.slide}>
          <img className={styles.img} src="https://source.unsplash.com/random/3" alt='img' />
        </div>
        <div className={styles.slide}>
          <img className={styles.img} src="https://source.unsplash.com/random/4" alt='img' />
        </div>
        <div className={styles.slide}>
          <img className={styles.img} src="https://source.unsplash.com/random/5" alt='img' />
        </div>
      </div>
    </div>
  )
}

export default Slider