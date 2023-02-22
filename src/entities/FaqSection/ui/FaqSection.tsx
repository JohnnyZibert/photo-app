import { AnimateSharedLayout, motion } from 'framer-motion'
import styled from 'styled-components'

import { fade } from '../../../app/animations/Animation'
import { About } from '../../../app/styles/styles'
import { Question } from '../../../shared/ui/Question/Question'
import { useScroll } from '../../../shared/lib/useScroll/useScroll'

export const FaqSection = () => {
  const [element, controls] = useScroll()
  return (
    <Faq variants={fade} ref={element} animate={controls} initial={'hidden'}>
      <h2>
        Any Questions <span>FAQ</span>
      </h2>
      <AnimateSharedLayout>
        <motion.div>
          <Question question={'How Do I Start'} />
          <Question question={'Daily Schedule'} />
          <Question question={'Different Payment Methods'} />
          <Question question={'What Products do you offer'} />
        </motion.div>
      </AnimateSharedLayout>
    </Faq>
  )
}

const Faq = styled(About)`
  display: block;
  span {
    display: block;
  }
  h2 {
    padding-bottom: 2rem;
    font-weight: lighter;
  }
  h4 {
    cursor: pointer;
  }
  .faq-line {
    background: #cccccc;
    height: 0.2rem;
    margin: 2rem 0;
    width: 100%;
  }
  .question {
    padding: 3rem 0;
  }
  .answer {
    padding: 2rem 0;
    p {
      padding: 1rem 0;
    }
  }
`
