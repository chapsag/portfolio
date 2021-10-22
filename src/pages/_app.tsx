import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import Layout from '../components/layouts/main'

// Component is the page view that will be rendered
// pageProps is props that each page will receive when rendered
const Portfolio = ({ Component, pageProps, router }: AppProps) => {
  return (
    <ChakraProvider>
      <Layout router={router}>
        <Component {...pageProps} key={router.route} />
      </Layout>
    </ChakraProvider>
  )
}

export default Portfolio
