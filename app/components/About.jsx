import Image from 'next/image'
import React from 'react'
// import { profile } from assets
import { assets } from '@/assets/assets'

const About = () => {
  return (
    <section id='about' className='flex flex-col items-start justify-center min-h-screen p-[3vw] text-zinc-950'>
      <h1 className='font-cabinetgrotesk font-normal text-[6vw] lowercase z-40'>
        Ab<span className='italic -ml-[0.5vw]'>o</span>ut m<span className='italic -ml-[0.5vw]'>e</span>
      </h1>
      <div className='flex flex-col lg:flex-row'>
        <Image src={assets.profile} width={400} alt='About me' className='-mt-[4.5vw] -z-30 lg:ml-[3vw]' />
        <div className='flex-col space-y-8 m-[2vw] text-zinc-600'>
          <p className='font-cabinetgrotesk font-medium text-zinc-950 text-3xl lg:text-[3vw] text-justify lg:leading-12'>I approach things with a blend of fun and minimalism, seamlessly navigating challenges and delivering <span className='italic text-blue-800'>creative</span> and <span className='italic text-blue-800'>functional</span> solutions.
          </p>
          <p className='font-satoshi text-2xl lg:text-[1.25vw] text-justify hidden lg:block'>
            For the past few years, I explored different roles in my academics, in my organizations, as well as, during my student assistantship, internship, and research study. But my interests always drawn to designing, maybe it was an organizational business plans or processes or even publication materials. I find comfort on building something that was on the middle of being creative and functional.
          </p>
          <p className='font-satoshi text-2xl lg:text-[1.25vw] text-justify hidden lg:block'>
            I love to cook and take photos. I also enjoy trying out things I find interesting on TikTok.
          </p>
        </div>
      </div>
      
    </section>
  )
}

export default About