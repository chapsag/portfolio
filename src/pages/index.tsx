import {
  Container,
  Box,
  Button,
  Heading,
  useColorModeValue,
  Image
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Section from '../components/section'
import Paragraph from '../components/paragraph'
import Layout from '../components/layouts/article'
import { BioSection, BioYear } from '../components/bio'
import QRcode from '../components/qr-code'
import NextLink from 'next/link'

const Page = () => {
  return (
    <Layout>
      <Container>
        <Box
          borderRadius="lg"
          bg={useColorModeValue('#6E8387', '#C8D3D5')}
          p={3}
          mb={6}
          mt={35}
          align="center"
          textColor={useColorModeValue('white', 'black')}
        >
          Hello, I&apos;m a Belgian developer based in Montreal, CA.
        </Box>

        <Box display={{ md: 'flex' }}>
          <Box
            flexShrink={0}
            mt={{ base: 4, md: 0 }}
            mr={{ md: 14 }}
            align="center"
          >
            <QRcode />
          </Box>
          <Box flexGrow={1} align="center" pt={{ md: 5 }}>
            <Heading as="h2" variant="page-title">
              Pierre-Emmanuel Goffi
            </Heading>
            <p>Cloud architect/developer</p>
          </Box>
        </Box>
        <Section delay={0.1}>
          <Heading as="h3" variant="section-title" mt={{ md: 5 }}>
            Work
          </Heading>
          <Paragraph>
            I am a student in Computer Vision at University of Sherbrooke and
            Entrepreneur based in Montreal with two(2) years experience in the
            software industry. I joined a company called piknix in 2021. We are
            currently working on a groceries delivery application. Check out my
            Portfolio !
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
            <BioYear>December 2021</BioYear>
            Completed my Bachelor in Computer Vision at the University of
            Sherbrooke.
          </BioSection>
          <BioSection>
            <BioYear>2021 to present</BioYear>
            Works as a Cloud Architect at piknix.
          </BioSection>
        </Section>
        <Section delay={0.3}>
          <Heading as="h3" variant="section-title">
            Github chart
          </Heading>
          <Box align="center" my={4}></Box>
        </Section>
      </Container>
    </Layout>
  )
}

export default Page
