import NextDocument, { Html, Head, Main, NextScript } from 'next/document'
import React from 'react'
import { ColorModeScript } from '@chakra-ui/react'
import theme from '../lib/theme'

class Document extends NextDocument {
  render() {
    return (
      <Html lang="en">
        <Head />
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
