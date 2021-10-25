import NextLink from 'next/link'
import {
  Box,
  Heading,
  Text,
  Container,
  Divider,
  Button
} from '@chakra-ui/react'

const NotFound = () => {
  return (
    <Container align="center" mt={{ base: 300, md: 200 }}>
      <Heading as="h1">Don&apos;t cry</Heading>
      <Text>The page you&apos;re looking for was not found. 🙈 🙊 🙉</Text>
      <Divider my={6} />
      <Box my={6} align="center">
        <NextLink href="/">
          <Button colorScheme="teal">Return to home</Button>
        </NextLink>
      </Box>
    </Container>
  )
}

export default NotFound
