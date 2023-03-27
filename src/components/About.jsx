import React, {useRef} from 'react'
import Tilt from 'react-parallax-tilt'
import { motion } from 'framer-motion'
import { SectionWrapper } from '../hoc'
import { styles } from '../styles'
import { fadeIn, textVariant } from '../utils/motion'
import { width } from '@mui/system'

const About = () => {
  
  return (
    <>
    <motion.div id='about' variants={textVariant()} >
      <p className={styles.sectionSubText}>Introduction</p>
      <h1 className={styles.sectionHeadText}>Overview</h1>
      </motion.div>
      <motion.p variants={fadeIn("","",0.1,1)}
      className='text-[1.1rem] leading-loose mt-4 text-secondary'>
        I'm a full stack web-developer with MERN tech stack. I'm currently volunteering as webmaster in the ACM student chapter of my institute I'm also quite skilled in Next.js. I also have a very good understanding of computer programming languages like C++ , Java , Python. I am currently learning blockchain application development using Ethers.js. I'm also learning flutter and dart to learn cross platform application developm
      </motion.p>
      
    
    </>
  )
}

export default SectionWrapper(About,"about")