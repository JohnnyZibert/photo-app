import { motion } from 'framer-motion'
import styled from 'styled-components'

import { AnimationPage, titleAnim } from '../Animation'
import { SocialContact } from '../components/SocialContact'

export const ContactUs = () => {
  return (
    <ContactStyled
      variants={AnimationPage}
      initial="hidden"
      animate="show"
      exit="exit"
      style={{ background: 'white' }}
    >
      <Title>
        <Hide>
          <motion.h2 variants={titleAnim}>Get in touch</motion.h2>
        </Hide>
      </Title>
      <SocialContact contacts="Send Us A message." />
      <SocialContact contacts="Send an email." />
      <SocialContact contacts="Social media." />
    </ContactStyled>
  )
}

const ContactStyled = styled(motion.div)`
  padding: 5rem 10rem;
  color: #353535;
  min-height: 90vh;
  h2 {
    color: black;
    opacity: 0.75;
    font-size: 2rem;
  }
  @media (max-width: 1100px) {
    padding: 1rem;
    h2 {
      font-size: 2rem;
    }
  }
`

const Title = styled.div`
  margin-bottom: 4rem;
`
const Hide = styled.div`
  overflow: hidden;
  h2 {
    color: black;
    font-size: 4rem;
  }
`
