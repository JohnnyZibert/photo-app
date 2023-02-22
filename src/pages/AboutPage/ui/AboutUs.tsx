import { motion } from 'framer-motion'

import { AnimationPage } from '../../../app/animations/Animation'
import { AboutSection } from '../../../entities/AboutSection'
import { FaqSection } from '../../../entities/FaqSection'
import { ScrollToTop } from '../../../shared/lib/ScrollToTop/ScrollToTop'
import { ServicesSection } from '../../../entities/ServicesSection'

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
