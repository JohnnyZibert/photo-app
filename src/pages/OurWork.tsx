import { motion } from 'framer-motion'
import styled from 'styled-components'

import { AnimationPage, slider, sliderContainer } from '../Animation'
import { MovieDetail } from '../components/MovieDetail'
import { ScrollToTop } from '../components/ScrollToTop'

export const OurWork = () => {
  return (
    <Work
      variants={AnimationPage}
      initial="hidden"
      animate="show"
      exit="exit"
      style={{ background: '#fff' }}
    >
      <motion.div variants={sliderContainer}>
        <Frame1 variants={slider}></Frame1>
        <Frame2 variants={slider}></Frame2>
        <Frame3 variants={slider}></Frame3>
        <Frame4 variants={slider}></Frame4>
      </motion.div>
      <MovieDetail />
      <ScrollToTop />
    </Work>
  )
}

const Work = styled(motion.div)`
  min-height: 100vh;
  overflow: hidden;
  padding: 5rem 10rem;

  h2 {
    padding: 1rem 0;
    color: #cccccc;
  }
  @media (max-width: 1100px) {
    padding: 2rem 2rem;
  }
`
const Frame1 = styled(motion.div)`
  position: fixed;
  top: 10%;
  left: 0;
  width: 100%;
  height: 100vh;
  background: #fffebf;
  z-index: 2;
`
const Frame2 = styled(Frame1)`
  background: #ff8efb;
`
const Frame3 = styled(Frame1)`
  background: #8ed2ff;
`
const Frame4 = styled(Frame1)`
  background: #8effa0;
`
