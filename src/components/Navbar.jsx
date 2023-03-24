import React, { useState , useEffect } from 'react'
import { Link } from 'react-router-dom'
import { styles } from'../styles'
import { logo, menu, close} from '../assets'
import resume from '../assets/resume.pdf'
import { navLinks } from '../constants'

const Navbar = () => {
  const [active,setActive] = useState('');
  const [toggle,setToggle] = useState(false)
  return (
    
    <nav
    className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link to="/" className="flex items-center gap-2"
        onClick={()=>{
          setActive("");
          window.scrollTo(0,0)
        }
        }
        >
          <img src={logo} alt="logo" className="w-9 h-9 object-cover " />
          <pre className='text-white text-[18px] font-bold cursor-pointer flex'> Yuvraj <span className='md:block hidden'>| Web Developer </span></pre>
        </Link>
        
        <ul className='list-none hidden md:flex flex-row gap-10 items-center'>
          
          {navLinks.map(link=>(
            
            <li key={link.id} className={`${
              active ===true? "text-white": "text-secondary"
            } hover:text-white text-[18px] font-medium cursor-pointer`} onClick={()=>setActive(link.title)}>
              <a href={`#${link.id}`} >{link.title}</a>
            </li>
          ))}
          <li key="resume"><a href={resume} download="resume.pdf"><button className='bg-[#915eff] hover:bg-[#4d2c95] text-white font-bold py-2 px-4 rounded'>Resume</button></a></li>
        </ul>
        <div className='md:hidden flex flex-1 justify-end items-center'>
          <img src={toggle ? close : menu} alt="menu" className='width-[28px] height-[28px] object-contain cursor-pointer' onClick={()=>{setToggle(!toggle)}}/>
        </div>
        <div className={`${!toggle? 'hidden': 'flex'} p-6 black-gradient absolute top-20 right-0 my-2 min-w[140px] z-10 rounded-xl`}>
        <ul className='list-none flex justify-end items-center flex-col gap-4'>
          
          {navLinks.map(link=>(
            
            <li key={link.id} className={`${
              active ===true? "text-white": "text-secondary hover:text-[#d3d3d3]"
            } font-poppins text-[16px] font-medium cursor-pointer`} onClick={()=>{
              setToggle(!toggle)
              setActive(link.title)}}>
              <a href={`#${link.id}`} >{link.title}</a>
            </li>
          ))}
          <li key="resume"><a href={resume} download='resume.pdf'><button className='bg-[#915eff] hover:bg-[#4d2c95] text-white font-bold py-2 px-4 rounded'>Resume</button></a></li>
        </ul>
        </div>
      </div>
    
    </nav>
  )
}

export default Navbar