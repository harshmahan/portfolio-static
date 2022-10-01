/* eslint-disable @next/next/no-img-element */
import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link';

type Props = {}

const Projects = (props: Props) => {
  return (
    <motion.div 
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1}}
    transition = {{ duration: 1.5 }}
    className="h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0">
        <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">Projects</h3>

        <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#F7A80A]/80">

            {/* Project 1 */}

                <div className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen">
                    <Link href="https://github.com/harshmahan/hello-app"><motion.img 
                    initial={{
                        y: -300,
                        opacity: 0
                    }}
                    transition = {{ duration: 1.2 }}
                    whileInView={{ opacity: 1, y: 0}}
                    viewport={{ once: true }}
                    src="https://cdn.sanity.io/images/8gwtgml2/production/8f621add937ef50ccee1d223d49a7c16371efa94-1920x1020.png"
                    alt="" 
                    className="h-36 w-36 rounded-lg object-center cursor-pointer"
                    /></Link>
                    <div className="space-y-6 px-0 md:px-10 max-w-full">
                        <h4 className="text-3xl font-semibold text-center"><span className="underline decoration-[#F7AB0A]/50">Project 1 of 4 : </span>Whatsapp Clone</h4>
                        <div className="flex items-center space-x-2 justify-center">
                                <img
                                src="https://cdn.sanity.io/images/8gwtgml2/production/c941614c2558cddcb2daecc33a23d940b838efb1-64x64.svg" 
                                alt="" 
                                className="h-10 w-10"
                                />

                                <img
                                src="https://cdn.sanity.io/images/8gwtgml2/production/c5c92ebc803c58eb0d56f076904eef9ef34d69b9-123x73.svg" 
                                alt="" 
                                className="h-10 w-10"
                                />

                                <img
                                src="https://cdn.sanity.io/images/8gwtgml2/production/cfff086a3098985eb8d8a90cc676c66c9db84b03-2500x2246.svg" 
                                alt="" 
                                className="h-10 w-10"
                                />
                        </div>

                        <p className="text-sm md:text-base xl:text-base text-center md:text-left h-20">
                        Made a whatsapp looking clone using reactjs, tailwind css and firebase. Any authenticated user can create room to chat. Any user can join any room. Chats are updated in real time using firebase real time database and use google authentication by firebase.
                        </p>
                    </div>
                </div>

                {/* Project 2 */}

                <div className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen">
                    <Link href="https://github.com/harshmahan/HMmusic---A-music-web-application"><motion.img 
                    initial={{
                        y: -300,
                        opacity: 0
                    }}
                    transition = {{ duration: 1.2 }}
                    whileInView={{ opacity: 1, y: 0}}
                    viewport={{ once: true }}
                    src="https://cdn.sanity.io/images/8gwtgml2/production/475e3cdadd472acf60644067a35cd0bfae00aba4-1920x1020.png"
                    alt="" 
                    className="h-36 w-36 rounded-lg object-center cursor-pointer"
                    /></Link>
                    <div className="space-y-6 px-0 md:px-10 max-w-full">
                        <h4 className="text-3xl font-semibold text-center"><span className="underline decoration-[#F7AB0A]/50">Project 2 of 4 : </span>Web Music Player</h4>
                        <div className="flex items-center space-x-2 justify-center">
                                <img
                                src="https://cdn.sanity.io/images/8gwtgml2/production/279f6466dfe72b1b8bcb5ebd06b82e3dd9ca01c1-507x306.svg" 
                                alt="" 
                                className="h-10 w-10"
                                />

                                <img
                                src="https://cdn.sanity.io/images/8gwtgml2/production/c5c92ebc803c58eb0d56f076904eef9ef34d69b9-123x73.svg" 
                                alt="" 
                                className="h-10 w-10"
                                />
                        </div>

                        <p className="text-sm md:text-base xl:text-base text-center md:text-left h-20">
                        A music website build using nextjs and tailwind css. A user can search for a song and listen to it for free and a user can also download the song. Use of nextjs dynamic routing for the search of the song.
                        </p>
                    </div>
                </div>

                {/* Project 3 */}

                <div className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen">
                    <Link href="https://github.com/harshmahan/iNotebook"><motion.img 
                    initial={{
                        y: -300,
                        opacity: 0
                    }}
                    transition = {{ duration: 1.2 }}
                    whileInView={{ opacity: 1, y: 0}}
                    viewport={{ once: true }}
                    src="https://cdn.sanity.io/images/8gwtgml2/production/10f9f94cb53b3d19d5a3d9b3d4e3eca9433b8ac7-1920x1020.png"
                    alt="" 
                    className="h-36 w-36 rounded-lg object-center cursor-pointer"
                    /></Link>
                    <div className="space-y-6 px-0 md:px-10 max-w-full">
                        <h4 className="text-3xl font-semibold text-center"><span className="underline decoration-[#F7AB0A]/50">Project 3 of 4 : </span>iNotebook</h4>
                        <div className="flex items-center space-x-2 justify-center">
                                <img
                                src="https://cdn.sanity.io/images/8gwtgml2/production/e2c897b9c3820375f19c25c45c1c9a0e65850dbd-599x1333.svg" 
                                alt="" 
                                className="h-10 w-10"
                                />

                                <img
                                src="https://cdn.sanity.io/images/8gwtgml2/production/8c5dd8e4765b182e2e60c76affa725749dd9a39e-2500x708.svg" 
                                alt="" 
                                className="h-10 w-10"
                                />

                                <img
                                src="https://cdn.sanity.io/images/8gwtgml2/production/cfff086a3098985eb8d8a90cc676c66c9db84b03-2500x2246.svg" 
                                alt="" 
                                className="h-10 w-10"
                                />

                                <img
                                src="https://cdn.sanity.io/images/8gwtgml2/production/5a31eb2fd27ac9e45c266044a00b7c4b0f846537-2500x2500.svg" 
                                alt="" 
                                className="h-10 w-10"
                                />
                        </div>

                        <p className="text-sm md:text-base xl:text-base text-center md:text-left h-20">
                        Build a fullstack project using MERN stack in which an authenticated user can create note, read his note, delete note, and update an existing note. A user can only see his notes. A user can create an account or login with existing account. JWT token is used to secure the password.
                        </p>
                    </div>
                </div>

                {/* Project 4 */}

                <div className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen">
                    <Link href="https://github.com/harshmahan/Weather-Report"><motion.img 
                    initial={{
                        y: -300,
                        opacity: 0
                    }}
                    transition = {{ duration: 1.2 }}
                    whileInView={{ opacity: 1, y: 0}}
                    viewport={{ once: true }}
                    src="https://cdn.sanity.io/images/8gwtgml2/production/5c0d491e60dc798e4a5e9a175d3c35f76dd06844-753x727.png"
                    alt="" 
                    className="h-36 w-36 rounded-lg object-center cursor-pointer"
                    /></Link>
                    <div className="space-y-6 px-0 md:px-10 max-w-full">
                        <h4 className="text-3xl font-semibold text-center"><span className="underline decoration-[#F7AB0A]/50">Project 4 of 4 : </span>Weather app</h4>
                        <div className="flex items-center space-x-2 justify-center">
                                <img
                                src="https://cdn.sanity.io/images/8gwtgml2/production/a1a2594d2f0e806958452ece45b92ec9ed36f988-514x512.png" 
                                alt="" 
                                className="h-10 w-10"
                                />
                        </div>

                        <p className="text-sm md:text-base xl:text-base text-center md:text-left h-20">
                        Made a current weather detector application using python tkinter and weather api. It will fetch the data by entering the city.
                        </p>
                    </div>
                </div>

        </div>

        <div className="w-full absolute top-[30%] bg-[#F7AB8A]/10 left-0 h-[500px] -skew-y-12">

        </div>
    </motion.div>
  )
}

export default Projects