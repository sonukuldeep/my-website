import React from 'react'
import styles from '../styles/Blog.module.scss'

const Blog = ({ heading, desc, img }: { heading: string, desc: string, img: string }) => {
    return (
        <div className={styles.container}>
            <div className={styles.heading}>
                <h3>{heading}</h3>
                <p>{desc}</p>
            </div>
            <img className={styles.img} src={img} alt="image" />
        </div>
    )
}

export default Blog