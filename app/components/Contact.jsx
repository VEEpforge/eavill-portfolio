import React from 'react'

const Contact = () => {
  return (
    <section id='contact' className='flex flex-col items-center justify-center min-h-screen bg-zinc-950 space-y-[3vw]'>
      <div className='flex flex-col items-center justify-center -space-y-[2vw]'>
        <h1 className='font-satoshi font-thin text-[6vw] uppercase'>Let's create</h1>
        <h1 className='font-satoshi font-thin text-[6vw] uppercase'>cool stuff</h1>
        <h1 className='font-cabinetgrotesk italic font-bold text-[6vw] text-zinc-400 lowercase'>together.</h1>
      </div>
      <button className='border-2 border-neutral-50 lg:w-1/4 p-[1.5vw] rounded-full text-[1.5vw]'>ezraearlvillanueva@gmail.com</button>
    </section>
  )
}

export default Contact