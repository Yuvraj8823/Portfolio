import React from 'react'
import Tilt from 'react-parallax-tilt'
import { motion } from 'framer-motion'
import { SectionWrapper } from '../hoc'
import { styles } from '../styles'
import { services } from '../constants'
import { fadeIn, textVariant } from '../utils/motion'
const ServiceCard = (service) =>{
  return(

    <Tilt className='xs:w-[250px] w-full '>
      <motion.div
      variants={fadeIn("right","spring",0.5 * service.index, 0.75)}
      className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card hover:scale-[1.1] cursor-pointer"
      >
        <div options={{
          max:45,
          scale:1,
          speed:450
        }}
        className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[200px] flex justify-evenly items-center flex-col">
          <img src={service.icon} alt={service.title} className="w-16 h-16 object-contain" />
          <h3 className='text-white text-[20px] font-bold text-center'>{service.title}</h3>
        </div>
      </motion.div>
    </Tilt>

  )
}
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
      <div className="flex mt-20 flex-wrap gap-10 justify-center">
        
        {services.map((service,index) => (
          
          <ServiceCard key={service.title} index={index} {...service}/>
          
        ))}
      </div>
    
    </>
  )
}

export default SectionWrapper(About,"about")