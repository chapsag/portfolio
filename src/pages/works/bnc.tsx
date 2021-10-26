import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  Image,
  Stack
} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/works'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => {
  return (
    <Layout title="bnc">
      <Container>
        <Title>
          bnc <Badge>2020</Badge>
        </Title>
        <P>A delivery web application for your groceries</P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Website</Meta>
            <Link href="https://app.piknix.com">
              https://app.piknix.com <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Platform</Meta>
            <span>Mobile/PC</span>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>
              <Stack direction={['column', 'row']} spacing="2px" m={2}>
                <Image
                  pr={2}
                  src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white"
                  alt="NodeJS"
                />
                <Image
                  pr={2}
                  src="https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white"
                  alt="NextJS"
                />
                <Image
                  pr={2}
                  src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white"
                  alt="TypeScript"
                />
                <Image
                  pr={2}
                  src="https://img.shields.io/badge/Amazon_AWS-232F3E?style=for-the-badge&logo=amazon-aws&logoColor=white"
                  alt="AWS"
                />
              </Stack>
            </span>
          </ListItem>
        </List>
        <WorkImage src="/piknix.png" alt="piknix" />
      </Container>
    </Layout>
  )
}

export default Work
