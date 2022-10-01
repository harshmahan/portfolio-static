/* eslint-disable @next/next/no-img-element */
import React from 'react'
import { motion } from 'framer-motion'

type Props = {}

const WorkExperience = (props: Props) => {
  return (
    <motion.div
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 1.5 }}
    className="h-screen flex relative overflow-hidden flex-col text-left md:flex-row max-w-full px-10 justify-evenly mx-auto items-center">
        <h3 className="absolute top-20 uppercase tracking-[16px] text-gray-500 text-2xl">Experience</h3>

        <div className="w-full mt-20 xl:mt-32 flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7A80A]/80">
          {/* {experiences?.map((experience) => (
            <ExperienceCard key={experience._id} experience={experience} />
          ))} */}

          {/* Experience 1 */}

                <article className="flex flex-col rounded-lg items-center space-y-8 flex-shrink-0 w-[400px] md:w-[600px] xl:w-[800px] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-x-hidden max-h-[36rem] overflow-y-scroll scrollbar-hide">
                <motion.img
                initial={{
                    y: -100,
                    opacity: 0
                }}
                transition = {{
                    duration: 1.2
                }}
                whileInView={{
                    opacity: 1,
                    y: 0
                }}
                viewport={{
                    once: true
                }}
                className="w-24 h-24 rounded-full xl:w-[150px] xl:h-[150px] xl:-mb-6 xl:-mt-5 object-cover object-center"
                src="https://cdn.sanity.io/images/8gwtgml2/production/59736882163d9c2e1d7e64a5f61bbc46d3018145-800x450.png"  alt="" />

                <div className="px-0 md:px-10">
                    <h4 className="text-4xl font-light">Software Engineer Virtual Experience</h4>
                    <p className="font-bold text-xl md:text-2xl xl:text-2xl mt-[0.15rem]">JP Morgan Chase & Co.</p>
                    <div className="flex space-x-2 my-1">
                        <img 
                        src="https://cdn.sanity.io/images/8gwtgml2/production/a1a2594d2f0e806958452ece45b92ec9ed36f988-514x512.png" 
                        className="h-10 w-10 rounded-full"
                        alt=""
                        />

                        <img 
                        src="https://cdn.sanity.io/images/8gwtgml2/production/cfff086a3098985eb8d8a90cc676c66c9db84b03-2500x2246.svg" 
                        className="h-10 w-10 rounded-full"
                        alt=""
                        />
                    </div>
                    <p className="uppercase py-5 text-sm md:text-base xl:-mt-3 lg:text-base text-gray-300">
                    2022/09/01 - 2022/09/30
                    </p>
                    <ul className="list-disc space-y-4 ml-5 text-sm md:text-base xl:text-base h-28 overflow-y-scroll scrollbar-hide">
                        <li>Interface with a stock price data feed.</li>
                        <li>Use JPMorgan Chase framework and tools</li>
                        <li>Display data visually for traders</li>
                    </ul>
                </div>
                </article>

            {/* Experience 2 */}

            <article className="flex flex-col rounded-lg items-center space-y-8 flex-shrink-0 w-[400px] md:w-[600px] xl:w-[800px] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-x-hidden max-h-[36rem] overflow-y-scroll scrollbar-hide">
                <motion.img
                initial={{
                    y: -100,
                    opacity: 0
                }}
                transition = {{
                    duration: 1.2
                }}
                whileInView={{
                    opacity: 1,
                    y: 0
                }}
                viewport={{
                    once: true
                }}
                className="w-24 h-24 rounded-full xl:w-[150px] xl:h-[150px] xl:-mb-6 xl:-mt-5 object-cover object-center"
                src="https://internship.thesparksfoundation.info/assests/img/logo.png"  alt="" />

                <div className="px-0 md:px-10">
                    <h4 className="text-4xl font-light">Web Development Intern</h4>
                    <p className="font-bold text-xl md:text-2xl xl:text-2xl mt-[0.15rem]">The Sparks Foundation</p>
                    <div className="flex space-x-2 my-1">
                        <img 
                        src="https://cdn.sanity.io/images/8gwtgml2/production/42fd48b6acf3d8792c54b170f5bf6479043a0e87-1771x2500.svg" 
                        className="h-10 w-10 rounded-full"
                        alt=""
                        />

                        <img 
                        src="https://cdn.sanity.io/images/8gwtgml2/production/5a31eb2fd27ac9e45c266044a00b7c4b0f846537-2500x2500.svg" 
                        className="h-10 w-10 rounded-full"
                        alt=""
                        />

                        <img 
                        src="https://cdn.sanity.io/images/8gwtgml2/production/23661ef3b327951095ceefa9ed6b55740b7cc7ec-2500x2500.svg" 
                        className="h-10 w-10 rounded-full"
                        alt=""
                        />
                    </div>
                    <p className="uppercase py-5 text-sm md:text-base xl:-mt-3 lg:text-base text-gray-300">
                    2022/09/01 - 2022/10/01
                    </p>
                    <ul className="list-disc space-y-4 ml-5 text-sm md:text-base xl:text-base h-28 overflow-y-scroll scrollbar-hide">
                        <li>Worked on payment gateway interface</li>
                        <li>Used Razorpay payment gateway in our website</li>
                        <li>Added different payment methods.</li>
                    </ul>
                </div>
                </article>


            {/* Experience 3 */}

            <article className="flex flex-col rounded-lg items-center space-y-8 flex-shrink-0 w-[400px] md:w-[600px] xl:w-[800px] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-x-hidden max-h-[36rem] overflow-y-scroll scrollbar-hide">
                <motion.img
                initial={{
                    y: -100,
                    opacity: 0
                }}
                transition = {{
                    duration: 1.2
                }}
                whileInView={{
                    opacity: 1,
                    y: 0
                }}
                viewport={{
                    once: true
                }}
                className="w-24 h-24 rounded-full xl:w-[150px] xl:h-[150px] xl:-mb-6 xl:-mt-5 object-cover object-center"
                src="https://media-exp1.licdn.com/dms/image/C4E0BAQH3Wp-0LMBbcw/company-logo_200_200/0/1641653605723?e=1672876800&v=beta&t=Z51SQgoWTcCFTLVB0-SHEBGJKaBQ5vDvgWH_d1ZGraE"  alt="" />

                <div className="px-0 md:px-10">
                    <h4 className="text-4xl font-light">Web Development Intern</h4>
                    <p className="font-bold text-xl md:text-2xl xl:text-2xl mt-[0.15rem]">Lets Grow More</p>
                    <div className="flex space-x-2 my-1">
                        <img 
                        src="https://cdn.sanity.io/images/8gwtgml2/production/42fd48b6acf3d8792c54b170f5bf6479043a0e87-1771x2500.svg" 
                        className="h-10 w-10 rounded-full"
                        alt=""
                        />

                        <img 
                        src="https://cdn.sanity.io/images/8gwtgml2/production/5a31eb2fd27ac9e45c266044a00b7c4b0f846537-2500x2500.svg" 
                        className="h-10 w-10 rounded-full"
                        alt=""
                        />

                        <img 
                        src="https://cdn.sanity.io/images/8gwtgml2/production/23661ef3b327951095ceefa9ed6b55740b7cc7ec-2500x2500.svg" 
                        className="h-10 w-10 rounded-full"
                        alt=""
                        />
                    </div>
                    <p className="uppercase py-5 text-sm md:text-base xl:-mt-3 lg:text-base text-gray-300">
                    2022/10/01 - Present
                    </p>
                    <ul className="list-disc space-y-4 ml-5 text-sm md:text-base xl:text-base h-28 overflow-y-scroll scrollbar-hide">
        
                    </ul>
                </div>
                </article>

        </div>
    </motion.div>
  )
}

export default WorkExperience