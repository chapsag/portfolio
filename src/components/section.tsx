import { motion } from 'framer-motion'
import { chakra, shouldForwardProp } from '@chakra-ui/react'

type sectionProps = {
  children: React.ReactNode
  delay?: number
}

const StyledDiv = chakra(motion.div, {
  shouldForwardProp: props => {
    return shouldForwardProp(props) || props === 'transition'
  }
})

const Section = ({ children, delay = 0 }: sectionProps) => {
  return (
    <StyledDiv
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      mb={6}
      transition={
        { duration: 0.8, delay } as any /* not the best way to do this */
      }
    >
      {children}
    </StyledDiv>
  )
}

export default Section
