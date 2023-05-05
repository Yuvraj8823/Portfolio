import Tilt from 'react-parallax-tilt'
import { motion } from 'framer-motion'
import { styles } from '../styles'
import { github } from '../assets'
import { SectionWrapper } from '../hoc'
import { projects } from '../constants'
import { fadeIn, textVariant } from '../utils/motion'
import { TangentSpaceNormalMap } from 'three'


const ProjectCard = (props) => {
  return (
    <>
      <motion.div variants={fadeIn("up", "spring", props.index * 0.5, 0.75)}>
        <Tilt
          options={{
            max: 45,
            scale: 1,
            speed: 450
          }}
          className="bg-tertiary p-5 rounded-2xl sm:w-[360px] h-full cards w-[300px] "
        >
          <a href={props.url} className='cursor-pointer' target='_blank'>
          <div className="relative w-full h-[180px] ">
            <img
              src={props.image}
              alt={props.name}
              className="w-full h-full cover rounded-2xl"
            />
            <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
              <div
                onClick={() => window.open(props.source_code_link, "_blank")}
                className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
              >
                <img src={github} alt="github" className='w-1/2 h-1/2 object-contain' />
              </div>
            </div>
          </div>
          <div className="mt-5">
            <h3 className='text-white font-bold text-[1.5rem] my-2'>{props.name}</h3>
            <p className='mt-2 text-secondary'>{props.description}</p>
          </div>
          <div className="flex mt-4 flex-wrap gap-2">
            {props.tags.map((tag)=>(
              <p key={tag.name} className={`text-[1rem] cursor-pointer  ${tag.color}`}>
                #{tag.name}
              </p>
            ))}
          </div>
          </a>
        </Tilt>
      </motion.div>
    </>
  )
}
const Works = () => {
  return (
    <>
      <motion.div id='about' variants={textVariant()}>
        <p className={styles.sectionSubText}>My works</p>
        <h1 className={styles.sectionHeadText}>Projects</h1>
      </motion.div>

      <div className="w-full flex">
        <motion.p variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[1rem] max-w-3xl leading-[30px]"
        >
          Following projects showcase my skills and experience through real-world examples of my work, Each project is briefly described with the links to code through respective github repository. It reflects my ability to solve problems , work with different technologies, and manage project effectively.
        </motion.p>
      </div>
      <div className="mt-20 flex flex-wrap gap-7 justify-around">
        {projects.map((project, index) => (
          <ProjectCard key={`project - ${index}`} index={index} {...project} />
        ))}

      </div>
    </>
  )
}

export default SectionWrapper(Works, "projects")