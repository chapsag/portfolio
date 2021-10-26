import Head from 'next/head'
import Navbar from '../navbar'
import SkylineGithub from '../skyline-github'
import NoSsr from '../utils/no-ssr'
import { Box, Container } from '@chakra-ui/react'
import type { NextRouter } from 'next/router'

type MainProps = {
  children: React.ReactNode
  router: NextRouter
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
