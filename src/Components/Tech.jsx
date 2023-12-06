import { motion } from 'framer-motion'
import React from 'react'
import { FaJava } from 'react-icons/fa'
import { SiJavascript, SiHtml5, SiCss3, SiTypescript, SiPython, SiLua, SiRust, SiCplusplus } from 'react-icons/si'

import CoderCat from '../assets/CoderCat.png'

const TECHNOLOGY_CLASSSET = 'title-main my-auto mx-10 font-semibold text-2xl'
let index = 0

const TECHNOLOGIES = {
    'JavaScript': (<SiJavascript size={'100%'} color='rgb(255, 220, 50)'/>),
    'HTML': (<SiHtml5 size={'100%'} color='rgb(255, 80, 50)'/>),
    'CSS': (<SiCss3 size={'100%'} color='rgb(120, 120, 255)'/>),
    'TypeScript': (<SiTypescript size={'100%'} color='rgb(80, 120, 255)'/>),
    'Python': (<SiPython size={'100%'} color='rgb(255, 230, 100)'/>),
    'Lua': (<SiLua size={'100%'} color='rgb(80, 80, 255)'/>),
    'Rust': (<SiRust size={'100%'} color='rgb(255, 150, 100)'/>),
    'C++': (<SiCplusplus size={'100%'} color='rgb(50, 150, 240)'/>),
    'Java': (<FaJava size={'100%'} color='rgb(255, 100, 100)'/>)
}

const Tech = () => {
  return (
    <div name='tech' className='w-full h-screen bg-[#0a192f] text-gray-300 overflow-hidden'>

        {/*Container*/}
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div>
                <p className='text-4xl font-bold inline border-b-4 border-[#4681f4] '>Technologies</p>
                <p className='py-4'>Technologies we've worked with</p>
            </div>
        </div>
        
        <div className='flex overflow-hidden'>
            {Object.entries(TECHNOLOGIES).map(([technology_name]) => {
                const className = 'h-[100px] overflow-hidden flex absolute'
                index = index + 2
                console.log(index)
                return (
                    <motion.div key={technology_name} className={className} animate={{transform: `translate(100vw)`}} initial={{transform: 'translate(-1vw)'}} transition={{repeat: Infinity, ease: 'linear', duration: 20, delay: index}}>
                        {TECHNOLOGIES[technology_name]}
                        <h1 className={TECHNOLOGY_CLASSSET}>{technology_name}</h1>
                    </motion.div>
                )
            }
                
            )}
        </div>



    </div>
  )
}

export default Tech     