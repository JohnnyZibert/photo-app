import { motion } from 'framer-motion'

import { fade, photoAnim, titleAnim } from '../../../app/animations/Animation'
import { image } from '../../../shared/assets/img/img'
import { About, Description, Hide, Image } from '../../../app/styles/styles'
import { Wave } from '../../../shared/ui/Wave/Wave'

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
