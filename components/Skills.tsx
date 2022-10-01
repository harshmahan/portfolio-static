import React from 'react'
import { motion } from 'framer-motion'

type Props = {}

const Skills = (props: Props) => {
  return (
    <motion.div
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 1.5 }} 
    className="flex relative flex-col text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center">
        <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">Skills</h3>

        <h3 className="absolute top-36 uppercase tracking-[3px] text-gray-500 text-sm">Hover over a skill for current profeciency</h3>

        <div className="absolute top-60 grid grid-cols-4 gap-5">
          {/* {skills?.slice(0, skills.length / 2).map((skill) => (
            <Skill key={skill._id} skill={skill}/>
          ))}

          {skills?.slice(skills.length / 2, skills.length).map((skill) => (
            <Skill key={skill._id} skill={skill} directionLeft/>
          ))} */}

          {/* Skill 1 */}

            <div className="group relative flex cursor-pointer">
            <motion.img 
            initial={{
                x: 200,
                opacity: 0
            }}
            transition = {{ duration: 1 }}
            whileInView={{ opacity: 1, x: 0 }}
            src="https://cdn.sanity.io/images/8gwtgml2/production/a1a2594d2f0e806958452ece45b92ec9ed36f988-514x512.png" alt="" 
            className = "rounded-full border border-gray-500 object-cover w-16 h-16 md:h-20 md:w-20 xl:w-20  xl:h-20 filter group-hover:grayscale transition duration-300 ease-in-out"
            />
            <div className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-16 w-16 md:w-20 md:h-20 xl:h-20 xl:w-20 rounded-full z-0">
                <div className="flex items-center justify-center h-full">
                    <p className="text-2xl font-bold text-black opacity-100">90%</p>
                </div>
            </div>
            </div>

            <div className="group relative flex cursor-pointer">
            <motion.img 
            initial={{
                x: 200,
                opacity: 0
            }}
            transition = {{ duration: 1 }}
            whileInView={{ opacity: 1, x: 0 }}
            src="https://cdn.sanity.io/images/8gwtgml2/production/c941614c2558cddcb2daecc33a23d940b838efb1-64x64.svg" alt="" 
            className = "rounded-full border border-gray-500 object-cover w-16 h-16 md:h-20 md:w-20 xl:w-20  xl:h-20 filter group-hover:grayscale transition duration-300 ease-in-out"
            />
            <div className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-16 w-16 md:w-20 md:h-20 xl:h-20 xl:w-20 rounded-full z-0">
                <div className="flex items-center justify-center h-full">
                    <p className="text-2xl font-bold text-black opacity-100">30%</p>
                </div>
            </div>
            </div>

            <div className="group relative flex cursor-pointer">
            <motion.img 
            initial={{
                x: 200,
                opacity: 0
            }}
            transition = {{ duration: 1 }}
            whileInView={{ opacity: 1, x: 0 }}
            src="https://cdn.sanity.io/images/8gwtgml2/production/7b428759b7d8bd6c351dca235d9a424bbd2652b2-64x64.svg" alt="" 
            className = "rounded-full border border-gray-500 object-cover w-16 h-16 md:h-20 md:w-20 xl:w-20  xl:h-20 filter group-hover:grayscale transition duration-300 ease-in-out"
            />
            <div className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-16 w-16 md:w-20 md:h-20 xl:h-20 xl:w-20 rounded-full z-0">
                <div className="flex items-center justify-center h-full">
                    <p className="text-2xl font-bold text-black opacity-100">42%</p>
                </div>
            </div>
            </div>

            <div className="group relative flex cursor-pointer">
            <motion.img 
            initial={{
                x: 200,
                opacity: 0
            }}
            transition = {{ duration: 1 }}
            whileInView={{ opacity: 1, x: 0 }}
            src="https://www.vectorlogo.zone/logos/mongodb/mongodb-icon.svg" alt="" 
            className = "rounded-full border border-gray-500 object-cover w-16 h-16 md:h-20 md:w-20 xl:w-20  xl:h-20 filter group-hover:grayscale transition duration-300 ease-in-out"
            />
            <div className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-16 w-16 md:w-20 md:h-20 xl:h-20 xl:w-20 rounded-full z-0">
                <div className="flex items-center justify-center h-full">
                    <p className="text-2xl font-bold text-black opacity-100">40%</p>
                </div>
            </div>
            </div>

            <div className="group relative flex cursor-pointer">
            <motion.img 
            initial={{
                x: 200,
                opacity: 0
            }}
            transition = {{ duration: 1 }}
            whileInView={{ opacity: 1, x: 0 }}
            src="https://www.vectorlogo.zone/logos/nodejs/nodejs-icon.svg" alt="" 
            className = "rounded-full border border-gray-500 object-cover w-16 h-16 md:h-20 md:w-20 xl:w-20  xl:h-20 filter group-hover:grayscale transition duration-300 ease-in-out"
            />
            <div className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-16 w-16 md:w-20 md:h-20 xl:h-20 xl:w-20 rounded-full z-0">
                <div className="flex items-center justify-center h-full">
                    <p className="text-2xl font-bold text-black opacity-100">50%</p>
                </div>
            </div>
            </div>

            <div className="group relative flex cursor-pointer">
            <motion.img 
            initial={{
                x: 200,
                opacity: 0
            }}
            transition = {{ duration: 1 }}
            whileInView={{ opacity: 1, x: 0 }}
            src="https://cdn.worldvectorlogo.com/logos/next-js.svg" alt="" 
            className = "rounded-full border border-gray-500 object-cover w-16 h-16 md:h-20 md:w-20 xl:w-20  xl:h-20 filter group-hover:grayscale transition duration-300 ease-in-out"
            />
            <div className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-16 w-16 md:w-20 md:h-20 xl:h-20 xl:w-20 rounded-full z-0">
                <div className="flex items-center justify-center h-full">
                    <p className="text-2xl font-bold text-black opacity-100">60%</p>
                </div>
            </div>
            </div>

            <div className="group relative flex cursor-pointer">
            <motion.img 
            initial={{
                x: 200,
                opacity: 0
            }}
            transition = {{ duration: 1 }}
            whileInView={{ opacity: 1, x: 0 }}
            src="https://cdn.sanity.io/images/8gwtgml2/production/049dfaa986556d4d27aba8733e8b149ba3257f1c-2500x2500.svg" alt="" 
            className = "rounded-full border border-gray-500 object-cover w-16 h-16 md:h-20 md:w-20 xl:w-20  xl:h-20 filter group-hover:grayscale transition duration-300 ease-in-out"
            />
            <div className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-16 w-16 md:w-20 md:h-20 xl:h-20 xl:w-20 rounded-full z-0">
                <div className="flex items-center justify-center h-full">
                    <p className="text-2xl font-bold text-black opacity-100">40%</p>
                </div>
            </div>
            </div>

            <div className="group relative flex cursor-pointer">
            <motion.img 
            initial={{
                x: 200,
                opacity: 0
            }}
            transition = {{ duration: 1 }}
            whileInView={{ opacity: 1, x: 0 }}
            src="https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg" alt="" 
            className = "rounded-full border border-gray-500 object-cover w-16 h-16 md:h-20 md:w-20 xl:w-20  xl:h-20 filter group-hover:grayscale transition duration-300 ease-in-out"
            />
            <div className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-16 w-16 md:w-20 md:h-20 xl:h-20 xl:w-20 rounded-full z-0">
                <div className="flex items-center justify-center h-full">
                    <p className="text-2xl font-bold text-black opacity-100">70%</p>
                </div>
            </div>
            </div>

            <div className="group relative flex cursor-pointer">
            <motion.img 
            initial={{
                x: 200,
                opacity: 0
            }}
            transition = {{ duration: 1 }}
            whileInView={{ opacity: 1, x: 0 }}
            src="https://www.vectorlogo.zone/logos/djangoproject/djangoproject-icon.svg" alt="" 
            className = "rounded-full border border-gray-500 object-cover w-16 h-16 md:h-20 md:w-20 xl:w-20  xl:h-20 filter group-hover:grayscale transition duration-300 ease-in-out"
            />
            <div className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-16 w-16 md:w-20 md:h-20 xl:h-20 xl:w-20 rounded-full z-0">
                <div className="flex items-center justify-center h-full">
                    <p className="text-2xl font-bold text-black opacity-100">55%</p>
                </div>
            </div>
            </div>

            <div className="group relative flex cursor-pointer">
            <motion.img 
            initial={{
                x: 200,
                opacity: 0
            }}
            transition = {{ duration: 1 }}
            whileInView={{ opacity: 1, x: 0 }}
            src="https://cdn.sanity.io/images/8gwtgml2/production/cfff086a3098985eb8d8a90cc676c66c9db84b03-2500x2246.svg" alt="" 
            className = "rounded-full border border-gray-500 object-cover w-16 h-16 md:h-20 md:w-20 xl:w-20  xl:h-20 filter group-hover:grayscale transition duration-300 ease-in-out"
            />
            <div className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-16 w-16 md:w-20 md:h-20 xl:h-20 xl:w-20 rounded-full z-0">
                <div className="flex items-center justify-center h-full">
                    <p className="text-2xl font-bold text-black opacity-100">60%</p>
                </div>
            </div>
            </div>

            <div className="group relative flex cursor-pointer">
            <motion.img 
            initial={{
                x: 200,
                opacity: 0
            }}
            transition = {{ duration: 1 }}
            whileInView={{ opacity: 1, x: 0 }}
            src="https://cdn.sanity.io/images/8gwtgml2/production/23661ef3b327951095ceefa9ed6b55740b7cc7ec-2500x2500.svg" alt="" 
            className = "rounded-full border border-gray-500 object-cover w-16 h-16 md:h-20 md:w-20 xl:w-20  xl:h-20 filter group-hover:grayscale transition duration-300 ease-in-out"
            />
            <div className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-16 w-16 md:w-20 md:h-20 xl:h-20 xl:w-20 rounded-full z-0">
                <div className="flex items-center justify-center h-full">
                    <p className="text-2xl font-bold text-black opacity-100">60%</p>
                </div>
            </div>
            </div>

            <div className="group relative flex cursor-pointer">
            <motion.img 
            initial={{
                x: 200,
                opacity: 0
            }}
            transition = {{ duration: 1 }}
            whileInView={{ opacity: 1, x: 0 }}
            src="https://cdn.sanity.io/images/8gwtgml2/production/5a31eb2fd27ac9e45c266044a00b7c4b0f846537-2500x2500.svg" alt="" 
            className = "rounded-full border border-gray-500 object-cover w-16 h-16 md:h-20 md:w-20 xl:w-20  xl:h-20 filter group-hover:grayscale transition duration-300 ease-in-out"
            />
            <div className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-16 w-16 md:w-20 md:h-20 xl:h-20 xl:w-20 rounded-full z-0">
                <div className="flex items-center justify-center h-full">
                    <p className="text-2xl font-bold text-black opacity-100">75%</p>
                </div>
            </div>
            </div>

            <div className="group relative flex cursor-pointer">
            <motion.img 
            initial={{
                x: 200,
                opacity: 0
            }}
            transition = {{ duration: 1 }}
            whileInView={{ opacity: 1, x: 0 }}
            src="https://cdn.sanity.io/images/8gwtgml2/production/42fd48b6acf3d8792c54b170f5bf6479043a0e87-1771x2500.svg" alt="" 
            className = "rounded-full border border-gray-500 object-cover w-16 h-16 md:h-20 md:w-20 xl:w-20  xl:h-20 filter group-hover:grayscale transition duration-300 ease-in-out"
            />
            <div className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-16 w-16 md:w-20 md:h-20 xl:h-20 xl:w-20 rounded-full z-0">
                <div className="flex items-center justify-center h-full">
                    <p className="text-2xl font-bold text-black opacity-100">80%</p>
                </div>
            </div>
            </div>

            <div className="group relative flex cursor-pointer">
            <motion.img 
            initial={{
                x: 200,
                opacity: 0
            }}
            transition = {{ duration: 1 }}
            whileInView={{ opacity: 1, x: 0 }}
            src="https://cdn.sanity.io/images/8gwtgml2/production/bc74d36779a54e7dee2610ab59b232db754d0c09-1138x1280.png" alt="" 
            className = "rounded-full border border-gray-500 object-cover w-16 h-16 md:h-20 md:w-20 xl:w-20  xl:h-20 filter group-hover:grayscale transition duration-300 ease-in-out"
            />
            <div className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-16 w-16 md:w-20 md:h-20 xl:h-20 xl:w-20 rounded-full z-0">
                <div className="flex items-center justify-center h-full">
                    <p className="text-2xl font-bold text-black opacity-100">70%</p>
                </div>
            </div>
            </div>

            

        </div>
    </motion.div>
  )
}

export default Skills