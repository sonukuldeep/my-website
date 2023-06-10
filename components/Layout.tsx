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
import Script from 'next/script'

const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <>
            <Meta />
            <Script src='https://www.googletagmanager.com/gtag/js?id=G-932D5P3HNK' strategy='lazyOnload' />
            <Script id='google-analytics' strategy='lazyOnload'>
                {` window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());

                gtag('config', 'G-932D5P3HNK');`}
            </Script>
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