import React from 'react'

const Hero = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-zinc-950">
        <div className='font-satoshi font-bold text-lg md:text-xl lg:text-3xl -mb-[7vw] flex items-center justify-between w-full px-[6vw]'>
          <div>
            portfolio
          </div>
          <div>
            work in progress
          </div>
        </div>
        <div className="font-cabinetgrotesk font-extrabold text-center tracking-tight text-[14vw]">
          e<span className='text-zinc-600'>zra</span> vill<span className='text-zinc-600'>anueva</span>
        </div>
        <div className='w-full justify-start px-[6vw] font-satoshi font-bold text-xl mt-[10vw] md:mt-[4vw] md:text-xl uppercase'>
          Hello — I&apos;m Ezra, a thriving developer<br />
          across digital and physical spaces.<br />
          <span className='italic text-zinc-600'>Building cool stuff and solving problems</span>
        </div>
    </div>
  )
}

export default Hero