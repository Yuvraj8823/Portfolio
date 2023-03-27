import { services } from "../constants"
import { motion } from "framer-motion"
import { fadeIn } from "../utils/motion"
import { SectionWrapper } from "../hoc"
import { useRef } from "react"
import Tilt from 'react-parallax-tilt'

const ServiceCard = (service) =>{
  
    return(
  
  
        <motion.div
        variants={fadeIn("right","spring",0.5 * service.index, 0.75)}
        className="xs:w-[250px] w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card hover:scale-[1.1] cursor-pointer"
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
      
  
    )
  }

const DevCard = () => {
    const windowWidth = useRef(window.innerWidth)
    return (
        <div className="flex mt-20 flex-wrap gap-10 justify-center">
        
        {services.map((service,index) => {
          return windowWidth.current>900?(
            <Tilt>
              <ServiceCard key={service.title} index={index} {...service}/>
            </Tilt>
          ):(
          <ServiceCard key={service.title} index={index} {...service}/>
          )
          })}
      </div>
    )
}

export default SectionWrapper(DevCard,"")

