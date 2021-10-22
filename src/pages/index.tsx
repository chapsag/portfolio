import {
  Container,
  Box,
  Heading,
  Image,
  useColorModeValue
} from '@chakra-ui/react'

const Page = () => {
  return (
    <Container>
      <Box
        borderRadius="lg"
        bg={useColorModeValue('#6E8387', '#C8D3D5')}
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
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          align="center"
        >
          <Image
            borderColor="witheAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            maxWidth="100px"
            display="inline-block"
            borderRadius="full"
            src="/pierre-emmanuel.png"
            alt="Profile picture"
          />
        </Box>
      </Box>
    </Container>
  )
}

export default Page
