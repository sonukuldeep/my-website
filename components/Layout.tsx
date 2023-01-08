import Meta from './Meta'
import Navbar from './Navbar'
import Header from './Header'
import styles from '../styles/Layout.module.scss'
import Footer from './Footer'
import DataState from '../context/DataState'
import React from 'react'

const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <>
            <Meta />
            <DataState>
                <Navbar />
                <Header />
                <div className={styles.container}>
                    <main>{children}</main>
                </div>
                <Footer />
            </DataState>
        </>
    )
}

export default Layout