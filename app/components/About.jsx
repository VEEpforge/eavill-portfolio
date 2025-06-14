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
        <Image src={assets.profile} width={400} alt='About me' className='-mt-[4.5vw] -z-30 ml-[3vw]' />
        <div className='flex-col space-y-8 m-[2vw]'>
          <p className='font-cabinetgrotesk font-medium text-zinc-600 text-3xl lg:text-[3vw] text-justify lg:leading-12'>I approach things with a distinct blend of fun and minimalism, seamlessly navigating challenges and delivering <span className='italic'>creative</span> and <span className='italic'>functional</span> solutions.
          </p>
          <p className='font-satoshi font-medium text-2xl lg:text-[1.25vw] text-justify'>
          For the past few years, I explored different roles in my academics, in my organizations, as well as, during my student assistantship, internship, and research study. But my interests always drawn to designing, maybe it was an organizational business plans or processes or even publication materials. I find comfort on building something that was on the middle of being creative and functional.
          </p>
          <p className='font-satoshi font-medium text-2xl lg:text-[1.25vw] text-justify'>
          I love to cook and take photos. Lately, I'm starting to like working out.
          </p>
        </div>
      </div>
      
    </section>
  )
}

export default About