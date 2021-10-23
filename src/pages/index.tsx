import {
  Container,
  Box,
  Button,
  Heading,
  Image,
  useColorModeValue
} from '@chakra-ui/react'
import Section from '../components/section'
import Paragraph from '../components/paragraph'
import NextLink from 'next/link'
import { ChevronRightIcon } from '@chakra-ui/icons'
import { BioSection, BioYear } from '../components/bio'

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
      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          Work
        </Heading>
        <Paragraph>
          I am a student in Computer Vision and Entrepreneur based in Montreal
          with two years experience in the software industry.
        </Paragraph>
        <Box align="center" my={4}>
          <NextLink href="/works">
            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
              My portfolio
            </Button>
          </NextLink>
        </Box>
      </Section>
      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Bio
        </Heading>
        <BioSection>
          <BioYear>1996</BioYear>
          Born in Belgium, I moved to Canada in 2016.
        </BioSection>
        <BioSection>
          <BioYear>2021</BioYear>
          Completed my Bachelor in Computer Vision at the University of
          Sherbrooke.
        </BioSection>
        <BioSection>
          <BioYear>2021 to present</BioYear>
          Works as a Cloud Architect at piknix.
        </BioSection>
      </Section>
    </Container>
  )
}

export default Page
