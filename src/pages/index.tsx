import { Container, Box, Heading } from '@chakra-ui/react'

const Page = () => {
  return (
    <Container>
      <Box
        borderRadius="lg"
        bgGradient="linear(to-l, #C8D3D5, #6E8387)"
        p={3}
        mb={6}
        align="center"
      >
        Hello, I&apos;m a Belgium developer based in Montreal, CA.
      </Box>
      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Pierre-Emmanuel Goffi
          </Heading>
          <p>Cloud architect/developer</p>
        </Box>
      </Box>
    </Container>
  )
}

export default Page
