import styles from '../styles/Slider.module.scss'
import Image from 'next/image'

const Slider = () => {
  return (
    <div className={styles.container}>
      <SliderComponent />
      <SliderComponent />
    </div>
  )
}

export default Slider

function SliderComponent() {
  return (
    <div className={styles.slider}>
      <div className={styles.slide}>
        <Image className={styles.img} width={300} height={225} src="/assets/images/hero/1.webp" alt='img' />
      </div>
      <div className={styles.slide}>
        <Image className={styles.img} width={300} height={225}  src="/assets/images/hero/2.webp" alt='img' />
      </div>
      <div className={styles.slide}>
        <Image className={styles.img} width={300} height={225}  src="/assets/images/hero/10.webp" alt='img' />
      </div>
      <div className={styles.slide}>
        <Image className={styles.img} width={300} height={225}  src="/assets/images/hero/4.webp" alt='img' />
      </div>
      <div className={styles.slide}>
        <Image className={styles.img} width={300} height={225}  src="/assets/images/hero/5.webp" alt='img' />
      </div>
    </div>
  )
}