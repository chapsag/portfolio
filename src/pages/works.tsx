import { Container, Box, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Section from '../components/section'
import WorkGridItem from '../components/grid/work-grid-item'
import piknix from '../../public/piknix.png'

const Works = () => {
  return (
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Works
      </Heading>
      <SimpleGrid column={[1, 1, 2]} gap={6}>
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
        </Section>
      </SimpleGrid>
    </Container>
  )
}

export default Works
