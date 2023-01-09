import Meta from './Meta'
import Navbar from './Navbar'
import styles from '../styles/Layout.module.scss'
import Footer from './Footer'
import { DataContextProvider } from '../context/DataContext'
import React from 'react'

const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <>
            <Meta />
            <DataContextProvider>
                <Navbar />
                <div className={styles.container}>
                    <main>{children}</main>
                </div>
                <Footer />
            </DataContextProvider>
        </>
    )
}

export default Layout