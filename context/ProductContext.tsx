import React, { useState, createContext } from 'react'

const data = {
    shopify_v1: [
        'Ecommerce website with Eye-catching design',
        'A total of 5 different pages besides products page',
        'SEO friendly website',
        'Mobile, laptop & tablet friendly design',
        'Shipping methods',
        'Domain and SSL setup',
        'Newsletter subscription',
        'User account setup',
        'Payment Gateway setup',
        'Database setup',
        '24/7 Support for 6 months',
        'Guidence on adding products for future expansion'
    ],
    blog_v1: [
        'Blog website with flwless design',
        'A total of 5 different pages',
        'SEO friendly website',
        'Mobile, laptop & tablet friendly design',
        'Domain and SSL setup',
        'Newsletter subscription',
        '24/7 Support for 6 months',
        'Guidence on how to upload new blogs, etc.'
    ],
    advertisement_v1: [
        'Advertisement website with stunning design',
        'A total of 5 different pages',
        'SEO friendly website',
        'Mobile, laptop & tablet friendly design',
        'Domain and SSL setup',
        'Newsletter subscription',
        '24/7 Support for 6 months',
        'Guidence on how to update hero section, etc.'
    ],
}

interface IProductsProps {
    shopify_v1: string[];
    blog_v1: string[];
    advertisement_v1: string[];
}

interface IProductsContextProps {
    products: IProductsProps
}

const ProductContext = createContext({} as IProductsContextProps)

export const ProductContextProvider = ({ children }: { children: React.ReactNode }) => {
    const [products] = useState(data)
    return (
        <ProductContext.Provider value={{ products }}>
            {children}
        </ProductContext.Provider>
    )
}

export default ProductContext