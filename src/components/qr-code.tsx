import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'
import { Image, Text, Container, LinkBox } from '@chakra-ui/react'

const variants = {
  open: { opacity: 1, x: 0 },
  closed: { opacity: 1, x: 0 }
}

const QRcode = () => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <AnimatePresence exitBeforeEnter initial={false}>
      <motion.div
        className="qr-code"
        variants={variants}
        initial="closed"
        animate={isOpen ? 'open' : 'closed'}
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.1 }}
      >
        {isOpen ? (
          <Image
            cursor="pointer"
            borderColor="witheAlpha.800"
            src="/linkedin.png"
            alt="QR code"
            borderWidth={2}
            borderStyle="solid"
            maxWidth="100px"
            display="inline-block"
            borderRadius="md"
          />
        ) : (
          <Image
            cursor="pointer"
            borderColor="witheAlpha.800"
            src="/pierre-emmanuel.png"
            alt="profile photo"
            borderWidth={2}
            borderStyle="solid"
            maxWidth="100px"
            display="inline-block"
            borderRadius="full"
          />
        )}
      </motion.div>
    </AnimatePresence>
  )
}

export default QRcode
