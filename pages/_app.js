import { Fragment } from 'react'
import Head from 'next/head'

import { DefaultSeo } from 'next-seo'
import SEO from './../next-seo.config'

import '../styles/normalize.css'
import { GlobalStyle } from '../styles/Style'

const App = ({ Component, pageProps }) => {
  return (
    <Fragment>
      <Head>
        <meta name="theme-color" content="#000000" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
      </Head>
      <GlobalStyle />
      <DefaultSeo {...SEO} />
      <Component {...pageProps} />
    </Fragment>
  )
}

export default App
