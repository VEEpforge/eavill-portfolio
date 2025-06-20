import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const Hero = () => {
  return (
    <div className='flex flex-col lg:flex-row items-center justify-center min-h-screen'>
      <div className='flex flex-col w-full px-[3vw] items-center justify-center text-zinc-950 h-full'>
        <div className='font-satoshi font-bold text-[3vw] lg:text-[2vw] -mb-[5vw] flex items-center justify-between w-full px-[6vw] lg:px-[3vw]'>
          <div className='text-blue-800'>
            portfolio
          </div>
          <div className='text-blue-800'>
            work in progress
          </div>
        </div>
        <div className="font-cabinetgrotesk font-extrabold text-center tracking-tight text-[12vw] lg:text-[10vw] text-zinc-950">
          <span className=''>e</span>zra <span className=''>vill</span>anueva
        </div>
        <div className='w-full text-center lg:text-left lg:justify-start lg:px-[3vw] font-satoshi font-bold text-[3vw] mt-[10vw] lg:mt-[4vw] lg:text-xl uppercase'>
          Hello — I&apos;m Ezra, a thriving developer<br />
          across digital and physical spaces.<br />
          <span className='italic text-blue-800'>Building cool stuff and solving problems</span>
        </div>
        <div className='w-full pl-[3vw] items-start justify-start mt-[5vw] lg:mt-[2vw]'>
          <button className='mt-[5vw] lg:mt-[2vw] px-[3vw] py-[1vw] border-2 border-zinc-950 text-zinc-950 uppercase rounded-full font-satoshi font-medium text-lg  hover:text-blue-800 hover:border-blue-800 transition-colors'>
            <a href="#projects">Scroll to Explore</a>
          </button>
        </div>
      </div>
      <div className='flex items-end justify-end mt-[10vw] lg:mt-0 lg:h-screen pb-[2vw] w-1/3'>
        <Image
          src={assets.cube}
          alt="Description of image"
          layout="responsive"
          // width={500}
        />
      </div>
    </div>
  )
}

export default Hero