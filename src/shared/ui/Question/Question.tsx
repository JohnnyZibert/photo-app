import { motion } from 'framer-motion'
import { useState } from 'react'

interface IProps {
  question: string
}

export const Question = ({ question }: IProps) => {
  const [toggle, setToggle] = useState<boolean>(false)
  return (
    <motion.div layout={true} className="question">
      <motion.h4 layout={true} onClick={() => setToggle(!toggle)}>
        {question}
      </motion.h4>
      {toggle && (
        <div className="answer">
          <p>Lorem ipsum dolor sit amet.</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias,
            quisquam.
          </p>
        </div>
      )}
      <motion.div className="faq-line"></motion.div>
    </motion.div>
  )
}
