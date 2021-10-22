import { Container, Box } from '@chakra-ui/react'

const Page = () => {
  return (
    <Container>
      <Box
        borderRadius="lg"
        bgGradient="linear(to-l, #C8D3D5, #6E8387)"
        p={3}
        align="center"
      >
        Hello, I&apos;m a Belgium developer based in Montreal, CA.
      </Box>
    </Container>
  )
}

export default Page
