import { motion } from 'framer-motion'
import styled from 'styled-components'

import { titleAnim } from '../../../app/animations/Animation'

interface IProps {
  contacts: string
}

export const SocialContact = ({ contacts }: IProps) => {
  return (
    <div>
      <Hide>
        <Social variants={titleAnim}>
          <Circle />
          <motion.h2>{contacts}</motion.h2>
        </Social>
      </Hide>
    </div>
  )
}

const Circle = styled.div`
  border-radius: 50%;
  width: 3rem;
  height: 3rem;
  background: #353535;
`

const Social = styled(motion.div)`
  display: flex;
  align-items: center;
  h2 {
    margin: 2rem;
  }
`
const Hide = styled.div`
  overflow: hidden;
  h2 {
    color: black;
  }
`
