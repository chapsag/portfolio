import { Box, LinkBox, LinkOverlay, Text } from '@chakra-ui/react'
import NextLink from 'next/link'
import Image from 'next/image'
import GridItemProps from './type'

const WorkGridItem = ({ children, id, title, thumbnail }: GridItemProps) => {
  return (
    <Box w="100%" align="center">
      <NextLink href={`/work/${id}`}>
        <LinkBox cursor="pointer">
          <Image
            src={thumbnail}
            alt={title}
            className="grid-item-thumbnail"
            placeholder="blur"
          />
          <LinkOverlay href={`/work/${id}`}>
            <Text mt={2} fontsize={20}>
              {title}
            </Text>
          </LinkOverlay>
          <Text fontsize={14}> {children} </Text>
        </LinkBox>
      </NextLink>
    </Box>
  )
}

export default WorkGridItem
