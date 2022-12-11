import { motion } from 'framer-motion'

import { fade, photoAnim, titleAnim } from '../Animation'
import { image } from '../img/img'
import { About, Description, Hide, Image } from '../styles'
import { Wave } from './Wave'

export const AboutSection = () => {
  return (
    <About>
      <Description>
        <motion.div>
          <Hide>
            <motion.h2 variants={titleAnim}>We work to make</motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnim}>
              your <span>dreams</span> come
            </motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnim}>true.</motion.h2>
          </Hide>
        </motion.div>
        <motion.p variants={fade}>
          Contact us for any photography or videography ideas that you have. We
          have professionals with amazing skills.
        </motion.p>
        <motion.button variants={fade}>Contact Us</motion.button>
      </Description>
      <Image>
        <motion.img src={image.home1} variants={photoAnim} alt="image" />
      </Image>
      <Wave />
    </About>
  )
}
