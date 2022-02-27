import { Fragment } from 'react'

import Document, { Html, Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components'

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) => sheet.collectStyles(<App {...props} />),
        })

      const initialProps = await Document.getInitialProps(ctx)
      return {
        ...initialProps,
        styles: (
          <Fragment>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </Fragment>
        ),
      }
    } finally {
      sheet.seal()
    }
  }

  render() {
    return (
      <Fragment>
        <Html lang="en">
          <Head>
            <script async src="/scripts/checkBrowser.js" />
            <link rel="manifest" href="/manifest.webmanifest" />
            <link rel="apple-touch-icon" href="/icon/logo192.png" />
            <link rel="icon" href="/icon/favicon.ico" />

            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
            <link
              href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap"
              rel="stylesheet"
            />

            {/* Global Site Tag (gtag.js) - Google Analytics */}
            <script
              async
              src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
            />
            <script
              dangerouslySetInnerHTML={{
                __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
              page_path: window.location.pathname,
            });
          `,
              }}
            />
            <script src="https://unpkg.com/mixitup@3.3.1" defer />
          </Head>
          <body>
            <Main />
            <NextScript />
          </body>
        </Html>
      </Fragment>
    )
  }
}
