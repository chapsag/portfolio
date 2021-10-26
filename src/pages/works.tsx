import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Section from '../components/section'
import WorkGridItem from '../components/grid/work-grid-item'
import piknix from '../../public/piknix.png'
import Layout from '../components/layouts/article'

const Works = () => {
  return (
    <Layout title="Works">
      <Container>
        <Heading as="h3" fontSize={20} mb={4}>
          Works
        </Heading>
        <SimpleGrid columns={[1, 1, 2]} gap={6}>
          <Section>
            <WorkGridItem id="piknix" title="piknix" thumbnail={piknix}>
              A grocery delivery platform
            </WorkGridItem>
          </Section>
          <Section>
            <WorkGridItem id="piknix" title="piknix" thumbnail={piknix}>
              A grocery delivery platform
            </WorkGridItem>
          </Section>
          <Section>
            <WorkGridItem id="piknix" title="piknix" thumbnail={piknix}>
              A grocery delivery platform
            </WorkGridItem>
            <Section>
              <WorkGridItem id="piknix" title="piknix" thumbnail={piknix}>
                A grocery delivery platform
              </WorkGridItem>
            </Section>
          </Section>
        </SimpleGrid>
        <Section delay={0.1}>
          <Divider my={6} />
          <Heading as="h3" fontSize={20} mb={4}>
            Internship
          </Heading>
          <SimpleGrid columns={[1, 1, 2]} gap={6}>
            <Section>
              <WorkGridItem id="bnc" title="bnc" thumbnail={piknix}>
                A grocery delivery platform
              </WorkGridItem>
            </Section>
            <Section>
              <WorkGridItem id="piknix" title="piknix" thumbnail={piknix}>
                A grocery delivery platform
              </WorkGridItem>
            </Section>
            <Section>
              <WorkGridItem id="piknix" title="piknix" thumbnail={piknix}>
                A grocery delivery platform
              </WorkGridItem>
              <Section>
                <WorkGridItem id="piknix" title="piknix" thumbnail={piknix}>
                  A grocery delivery platform
                </WorkGridItem>
              </Section>
            </Section>
          </SimpleGrid>
        </Section>
      </Container>
    </Layout>
  )
}

export default Works
