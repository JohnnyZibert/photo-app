import { motion } from 'framer-motion'
import { ReactNode } from 'react'
import styled from 'styled-components'

import { fade } from '../Animation'
import { useScroll } from './useScroll'

interface IProps {
  children: ReactNode
}

export const MovieContainer = ({ children }: IProps) => {
  const [element, controls] = useScroll()
  return (
    <MovieContainerStyled
      ref={element}
      variants={fade}
      animate={controls}
      initial="hidden"
    >
      {children}
    </MovieContainerStyled>
  )
}

const MovieContainerStyled = styled(motion.div)``
