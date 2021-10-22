import Head from 'next/head'
import Navbar from './navbar'
import { Box, Container } from '@chakra-ui/react'

type MainProps = {
  children: React.ReactNode
  router: any
}

const Main = ({ children, router }: MainProps) => {
  return (
    <Box as="main" pb={8}>
      <Head>
        <meta name="viewport" content="width=device-width, inital-scale=1" />
        <title>Pierre-Emmanuel Goffi - Homepage</title>
      </Head>
      <Navbar path={router.asPath} />
      <Container maxW="container.md" pt={14}>
        {children}
      </Container>
    </Box>
  )
}

export default Main
