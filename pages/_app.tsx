import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from '../components/Layout'
// import Script from 'next/script'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
      {/* <Script src='https://www.googletagmanager.com/gtag/js?id=G-932D5P3HNK' strategy='afterInteractive'/>
      <Script id='google-analytics' strategy='afterInteractive'>
        {` window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());

                gtag('config', 'G-932D5P3HNK');`}
      </Script> */}
    </Layout>
  )
}
