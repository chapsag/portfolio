import NextDocument, { Html, Head, Main, NextScript } from 'next/document'
import type { DocumentContext } from 'next/document'
import React from 'react'
import { ColorModeScript } from '@chakra-ui/react'
import theme from '../lib/theme'

class Document extends NextDocument {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await NextDocument.getInitialProps(ctx)

    return initialProps
  }
  render() {
    return (
      <Html lang="en">
        <Head>
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="true"
          />
          <link
            rel="preload"
            as="style"
            href="https://fonts.googleapis.com/css2?family=Work+Sans:wght@200&display=swap"
          />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css2?family=Work+Sans:wght@200&display=swap"
            media="print"
          />
        </Head>
        <body>
          <ColorModeScript initialColorMode={theme.config} />
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default Document
