import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component"
import { motion } from "framer-motion"
import 'react-vertical-timeline-component/style.min.css'  

import { styles } from "../styles"
import { experiences } from "../constants"
import { SectionWrapper } from "../hoc"
import { textVariant } from "../utils/motion"


const ExperienceCard = ({ experience }) =>(
  <VerticalTimelineElement
    contentStyle={{background: '#1d1836' , color:'#fff'}}
    contentArrowStyle={{borderRight:'7px solid #232631'}}
    date={experience.date}
    iconStyle = {{background:experience.iconBg}}
    icon={
      <div className="flex justify-center items-center h-full w-full cursor-pointer">
        <img 
          src = {experience.icon}
          alt = {experience.company_name}
          className="w-[60%] h-[60%] object-contain"
        />
      </div>
    }
  > 
  <div className="hover:cursor-pointer">
    <h3 className="text-white text-[1.9rem]">{experience.title}</h3>
    <h4 className="text-white text-[1.3rem] my-1">{experience.company_name}</h4>
    <h6 className="text-[#fff] text-[0.9rem] my-2">{experience.date}</h6>
    <h6 className="text-[0.9rem] mt-1 text-purple-100 leading-loose">{experience.points}</h6>
  </div>
  </VerticalTimelineElement>
)
const Experience = () => {
  return (
    <>
    <motion.div id='about' variants={textVariant()}>
      <p className={styles.sectionSubText}>What I've done so far</p>
      <h1 className={styles.sectionHeadText}>Experience</h1>
      </motion.div>
    <div className="mt-20 flex flex-col">
      <VerticalTimeline>
        {experiences.map((experience,index) => (
          <ExperienceCard key={index} experience={experience}/>
        ))}
      </VerticalTimeline>
    </div>
    </>
  )
}

export default SectionWrapper(Experience,"work")