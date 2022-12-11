import { motion } from 'framer-motion'

import { AnimationPage } from '../Animation'
import { AboutSection } from '../components/AboutSection'
import { FaqSection } from '../components/FaqSection'
import { ScrollToTop } from '../components/ScrollToTop'
import { ServicesSection } from '../components/ServicesSection'

export const AboutUs = () => {
  return (
    <motion.div
      variants={AnimationPage}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <AboutSection />
      <ServicesSection />
      <FaqSection />
      <ScrollToTop />
    </motion.div>
  )
}
