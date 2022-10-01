import React from 'react';
import { SocialIcon } from 'react-social-icons';
import { motion } from 'framer-motion';
import Link from 'next/link';

type Props = {}

const Header = (props: Props) => {
  return (
    <header className="sticky top-0 p-5 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center">
        <motion.div
         initial = {{
            x: -500,
            opacity: 1,
            scale: 1
         }}
         animate = {{
            x: 0,
            opacity: 1,
            scale: 1
         }}
         transition = {{
            duration: 1.5
         }}
         className='flex flex-row items-center'>

        {/* { socials.map((social) => (
            <SocialIcon 
            key = {social._id}
            url={social.url}
            fgColor='gray'
            bgColor='transparent'
            />
        ))} */}

            
        <SocialIcon url="https://www.linkedin.com/in/harsh-mahan-70990a1b9/"
        fgColor='gray'
        bgColor='transparent'
        />
        <SocialIcon url="https://github.com/harshmahan"
        fgColor='gray'
        bgColor='transparent'
        />
        <SocialIcon url="https://www.instagram.com/harsh_goswami_002/"
        fgColor='gray'
        bgColor='transparent'
        />
        <SocialIcon url="https://twitter.com/HarshMahan3"
        fgColor='gray'
        bgColor='transparent'
        />
        <SocialIcon url="https://www.facebook.com/harshmahan.mahan"
        fgColor='gray'
        bgColor='transparent'
        />
        </motion.div>

        <motion.div
        initial = {{
            x: 500,
            opacity: 1,
            scale: 1
        }}
        animate = {{
            x: 0,
            opacity: 1,
            scale: 1
        }}
        transition = {{
            duration: 1.5
        }}
        className="flex flex-row items-center text-gray-300 cursor-pointer">
            <SocialIcon
            className='cursor-pointer'
            network="email"
            fgColor="gray"
            bgColor="transparent"
            />
            <Link href="#contactme">
                <p className="uppercase hidden md:inline-flex text-sm text-gray-400">Get In Touch</p>
            </Link>
        </motion.div>
    </header>
  )
}

export default Header