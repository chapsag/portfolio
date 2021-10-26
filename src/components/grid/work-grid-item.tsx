import { Box, LinkBox, LinkOverlay, Text } from '@chakra-ui/react'
import NextLink from 'next/link'
import Image from 'next/image'
import GridItemProps from './type'

const WorkGridItem = ({ children, id, title, thumbnail }: GridItemProps) => {
  return (
    <Box w="100%" textAlign="center">
      <NextLink href={`/works/${id}`}>
        <LinkBox cursor="pointer">
          <Image
            src={thumbnail}
            alt={title}
            className="grid-item-thumbnail"
            placeholder="blur"
          />
          <LinkOverlay href={`/works/${id}`}>
            <Text mt={2} fontSize={20}>
              {title}
            </Text>
          </LinkOverlay>
          <Text fontSize={14}> {children} </Text>
        </LinkBox>
      </NextLink>
    </Box>
  )
}

export default WorkGridItem
