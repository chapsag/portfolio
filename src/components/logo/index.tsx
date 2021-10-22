import Link from 'next/link'
import { Text, useColorModeValue } from '@chakra-ui/react'
import { LogoBox } from './styles'

const Logo = () => {
  return (
    <Link href="/">
      <a>
        <LogoBox>
          <Text
            color={useColorModeValue('gray.800', 'witheAlpha.900')}
            fontFamily="M PLUS Rounded 1c"
            fontWeight="bold"
            ml={3}
          >
            Pierre-Emmanuel Goffi
          </Text>
        </LogoBox>
      </a>
    </Link>
  )
}

export default Logo
