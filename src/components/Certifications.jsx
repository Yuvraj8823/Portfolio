import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component"
import { motion } from "framer-motion"
import 'react-vertical-timeline-component/style.min.css'  

import { styles } from "../styles"
import { certificates } from "../constants"
import { SectionWrapper } from "../hoc"
import { textVariant } from "../utils/motion"


const CertificationCard = ( {certificate} ) =>(
  <VerticalTimelineElement
    contentStyle={{background: '#1d1836' , color:'#fff'}}
    contentArrowStyle={{borderRight:'7px solid #232631'}}
    date={certificate.date}
    iconStyle = {{background:certificate.iconBg}}
    icon={
      <div className="flex justify-center items-center h-full w-full cursor-pointer">
        <img 
          src = {certificate.icon}
          alt = {certificate.company_name}
          className="w-[60%] h-[60%] object-contain"
        />
      </div>
    }
  > 
  <div className="hover:cursor-pointer">
    <h3 className="text-white text-[1.9rem]">{certificate.title}</h3>
    <h4 className="text-white text-[1.3rem] my-1">{certificate.company_name}</h4>
    <h6 className="text-[#fff] text-[0.9rem] my-2">{certificate.date}</h6>
    <div className="text-[0.9rem] mt-1 text-purple-100 leading-loose flex flex-col">{certificate.points.map((val)=>(
        <p>{val}</p>
    ))}</div>
  </div>
  </VerticalTimelineElement>
)
const Certifications = () => {
  return (
    <>
    <motion.div id='about' variants={textVariant()}>
      <p className={styles.sectionSubText}>My learning so far</p>
      <h1 className={styles.sectionHeadText}>My certifications</h1>
      </motion.div>
    <div className="mt-20 flex flex-col">
      <VerticalTimeline>
        {certificates.map((certificate,index) => (
          <CertificationCard key={index} certificate={certificate}/>
        ))}
      </VerticalTimeline>
    </div>
    </>
  )
}

export default SectionWrapper(Certifications,"certificates")