import Meta from './Meta'
import Navbar from './Navbar'
import styles from '../styles/Layout.module.scss'
import Footer from './Footer'
import React from 'react'
import { DataContextProvider } from '../context/DataContext'
import { OverlayContextProvider } from '../context/OverlayContext'
import { CartContextProvider } from '../context/CartContext'
import { UserContextProvider } from '../context/UserContext'
import { ProductContextProvider } from '../context/ProductContext'

const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <>
            <Meta />
            <UserContextProvider>
                <DataContextProvider>
                    <CartContextProvider>
                        <ProductContextProvider>
                            <OverlayContextProvider>
                                <Navbar />
                            </OverlayContextProvider>
                            <div className={styles.container}>
                                <main>{children}</main>
                            </div>
                            <Footer />
                        </ProductContextProvider>
                    </CartContextProvider>
                </DataContextProvider>
            </UserContextProvider>
        </>
    )
}

export default Layout