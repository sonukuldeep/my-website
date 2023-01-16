import Meta from './Meta'
import Navbar from './Navbar'
import styles from '../styles/Layout.module.scss'
import Footer from './Footer'
import React from 'react'
import { DataContextProvider } from '../context/DataContext'
import { OverlayContextProvider } from '../context/OverlayContext'
import { CartContextProvider } from '../context/CartContext'

const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <>
            <Meta />
            <DataContextProvider>
                <CartContextProvider>
                    <OverlayContextProvider>
                        <Navbar />
                    </OverlayContextProvider>
                <div className={styles.container}>
                    <main>{children}</main>
                </div>
                <Footer />
                </CartContextProvider>
            </DataContextProvider>
        </>
    )
}

export default Layout