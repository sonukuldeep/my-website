import Meta from './Meta'
import Navbar from './Navbar'
import styles from '../styles/Layout.module.scss'
import Footer from './Footer'
import React from 'react'
import { Elements } from "@stripe/react-stripe-js"
import { DataContextProvider } from '../context/DataContext'
import { OverlayContextProvider } from '../context/OverlayContext'
import { CartContextProvider } from '../context/CartContext'
import { UserContextProvider } from '../context/UserContext'
import { ProductContextProvider } from '../context/ProductContext'
import { Toaster } from 'react-hot-toast'

const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <>
                <Meta />
                <UserContextProvider>
                    <DataContextProvider>
                        <CartContextProvider>
                            <ProductContextProvider>
                                <OverlayContextProvider>
                                    <Toaster />
                                    <Navbar />
                                </OverlayContextProvider>
                                <div>
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