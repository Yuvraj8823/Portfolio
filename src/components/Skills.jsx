import React,{useRef} from "react"
import Tilt from "react-parallax-tilt"
import { motion } from "framer-motion"


import { skills } from "../constants"
import { fadeIn, textVariant } from "../utils/motion"
import { SectionWrapper } from "../hoc"

const Skills = () => {
    const width = useRef(window.innerWidth)
    return(
    <>
    
    
      <div className="flex  flex-wrap gap-10 justify-evenly">
        
        {skills.map((skills,index) => { 
          
          return width.current<900?(
          <SkillsCard key={skills.title} index={index} {...skills}/>
          ):(<Tilt className=' '>
            <SkillsCard key={skills.title} index={index} {...skills}/>
            </Tilt>
            )
        })}
      </div>
    </>
    )
}

const SkillsCard = (props) =>{
    
  return(
    
    
      <motion.div
      variants={fadeIn("right","spring",0.5 * props.index, 0.75)}
      className="xs:w-[200px] w-full xl:w-[20rem]  green-pink-gradient p-[1px] rounded-[20px] shadow-card  cursor-pointer h-[20rem]"
      >
        <div options={{
          max:45,
          scale:1,
          speed:450
        }}
        className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[200px] flex justify-evenly items-center flex-col h-full">
          <h1 className="text-white font-bold text-[1.5rem]">{props.title}</h1>
          {
            props.content.map((content,index)=>(
              <h6 className="text-secondary text-[1rem]" >{index+1}. {content}</h6>
            ))
          }
        </div>
      </motion.div>

  )
}

export default SectionWrapper(Skills,"")