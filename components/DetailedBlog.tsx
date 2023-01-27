import DetailedBlogDescUtility from './DetailedBlogDescUtility'
import styles from '../styles/DetailedBlog.module.scss'

const DetailedBlog = () => {
    return (
        <div className={styles.container}>
            <img className={styles.image} alt="crypto" src="https://source.unsplash.com/random/600x300" />
            <div className={styles.features}>
                <h1>Random heading</h1>
                <ul>
                    <li>1</li>
                    <li>2</li>
                    <li>3</li>
                    <li>4</li>
                    <li>5</li>
                </ul>
            </div>
            <div className={styles.desc}>
                <DetailedBlogDescUtility />
                <DetailedBlogDescUtility />
                <DetailedBlogDescUtility />
                <DetailedBlogDescUtility />
                <DetailedBlogDescUtility />
            </div>
            {/* Price calculator */}
            <div className={styles.priceCalculator}>Hello world</div>
        </div>
    )
}

export default DetailedBlog