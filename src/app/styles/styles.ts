import { motion } from 'framer-motion'
import styled from 'styled-components'

export const About = styled(motion.div)`
  min-height: 90vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;
  padding: 5rem 7rem;
  @media (max-width: 1160px) {
    display: block;
    text-align: center;
    padding: 2rem 2rem;
  }
`
export const Description = styled.div`
  flex: 1;
  padding-right: 5rem;
  h2 {
    font-weight: lighter;
  }
  @media (max-width: 1160px) {
    padding-right: 0;
    button {
      margin: 2rem 0 4rem 0;
    }
  }
`
export const Image = styled.div`
  flex: 1;
  overflow: hidden;
  z-index: 2;
  img {
    width: 100%;
    height: 80vh;
    object-fit: cover;
  }
`
export const Hide = styled.div`
  overflow: hidden;
`
