import { url } from 'inspector'
import React from 'react'
import styles from '../styles/Blog.module.scss'

const Blog = ({ heading, desc, img }: { heading: string, desc: string, img: string }) => {
    return (
        <div className={styles.container}>
            <div className={styles.heading}>
                <h2>{heading}</h2>
                <p>{desc}</p>
            </div>
            <img className={styles.img} src={img} alt="image" />
        </div>
    )
}

export default Blog