import React from 'react'
import { motion } from "framer-motion"

type Props = {}

const About = (props: Props) => {
  return (
    <motion.div 
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 1.5 }}
    className="flex flex-col relative text-center h-screen md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
        <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">About</h3>
        <motion.img 
        initial={{
            x: -200,
            opacity: 0
        }}
        whileInView={{
            opacity: 1,
            x: 0
        }}
        transition = {{
            duration: 1.2
        }}
        viewport={{
            once: true
        }}
        src="https://cdn.sanity.io/images/8gwtgml2/production/fd8589cf51dd8965369339ed00471006b7f5819c-2857x2658.jpg"
        className="-mb-20 mt-16 md:mb-0 flex-shrink-0 w-36 h-36 rounded-full object-cover md:rounded-lg md:w-64 md:h-96 xl:w-[500px] xl:h-[500px] xl:mt-24"
        />
        <div className="space-y-10 px-0 md:px-10">
            <h4 className="text-4xl font-semibold">Here is a{" "}
            <span className="underline decoration-[#F7AB0A]/50">little</span>{" "}background</h4>
            <p className="text-base">
            Hey there this is Harsh Mahan. I am a third year computer science student at Noida Institute of Engineering and Technology. I am very good at learning new technologies to work on. I make full stack websites and have good experience in data structures and algorithms. If you want me to work with your organization please feel free to contact.  
            </p>
        </div>
    </motion.div>
  )
}

export default About