import { Button } from '@/components/ui/button'
import React from 'react'

const Contact = () => {
  return (
    <section id='contact' className='flex flex-col items-center justify-center min-h-screen bg-zinc-950 space-y-[3vw]'>
      <h1 className='font-satoshi text-[2vw] text-zinc-100 uppercase'>Want to push things forward?</h1>
      <div className='flex flex-col items-center text-zinc-100 justify-center -space-y-[2vw]'>
        <h1 className='font-satoshi font-thin text-[6vw] uppercase'>Let's create</h1>
        <h1 className='font-satoshi font-thin text-[6vw] uppercase'>cool stuff</h1>
        <h1 className='font-cabinetgrotesk italic font-bold text-[6vw] text-blue-800 lowercase'>together.</h1>
      </div>
      {/* <button className='border-2 border-neutral-50 lg:w-1/4 p-[1.5vw] rounded-full text-[1.5vw]'>ezraearlvillanueva@gmail.com</button> */}
      <Button
        variant='outline'
        className='font-satoshi font-medium text-[1.5vw] text-zinc-100 text-lg p-[1.5vw] rounded-full border-2 hover:bg-transparent hover:border-blue-800 hover:text-blue-800'
      >
        <a href='mailto:ezraearlvillanueva@gmail.com'>ezraearlvillanueva@gmail.com</a>
      </Button>
    </section>
  )
}

export default Contact