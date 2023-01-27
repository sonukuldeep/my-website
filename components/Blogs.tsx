import React from 'react'
import Blog from './Blog'
import styles from '../styles/Blogs.module.scss'
import { data } from './blog_data.js'

const Blogs = () => {
  return (
    <div className={`${styles.container} globalContainer`}>
      {data.map((data, index) => <Blog key={index} heading={data.heading} desc={data.desc} img={data.img} />)}
    </div>
  )
}

export default Blogs