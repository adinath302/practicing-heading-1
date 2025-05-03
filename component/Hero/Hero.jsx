import React from 'react'
import img from "../../../public/img.png"
import { FaPlay } from "react-icons/fa";
import { motion } from "motion/react"

const Hero = () => {
    return (
        <div className='flex justify-center'>
            <div className='container pbp'>
                <div className="grid grid-cols-1 md:grid-cols-2 min-h-[600px]">
                    <div className='flex flex-col justify-center py-14 md:py-0 !space-y-7'>
                        <motion.h1
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1, x: 100 }}
                            transition={{ duration: 1 }} className='text-5xl font-bold leading-[60px]'>Consistency with the focus gives you the <span className='text-[#ff0000]'>
                                confidence
                            </span>
                        </motion.h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        <div className='flex gap-9'>
                            <button className='primary-btn'>Order Now</button>
                            <button className='flex items-center primary-btn gap-1'>
                                <FaPlay />
                                Watch Now </button>
                        </div>
                    </div>
                    <div className='flex justify-center items-center'>
                        <img src={img} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero