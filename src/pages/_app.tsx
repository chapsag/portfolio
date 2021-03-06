import type { AppProps } from 'next/app'
import type { ReactElement } from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import Layout from '../components/layouts/main'
import { AnimatePresence } from 'framer-motion'
import theme from '../lib/theme'
import Fonts from '../lib/fonts'
import { useEffect } from 'react'
import TagManager from 'react-gtm-module'

const Portfolio = ({
  Component,
  pageProps,
  router
}: AppProps): ReactElement => {
  useEffect(() => {
    TagManager.initialize({ gtmId: 'GTM-N3WVPBB' })
  }, [])

  return (
    <ChakraProvider theme={theme}>
      <Fonts />
      <Layout router={router}>
        <AnimatePresence exitBeforeEnter initial={true}>
          <Component {...pageProps} key={router.route} />
        </AnimatePresence>
      </Layout>
    </ChakraProvider>
  )
}

export default Portfolio
