import React from 'react'

const Services = () => {
  return (
    <section id='services' className='flex flex-col lg:flex-row items-start lg:items-center justify-center h-full p-[3vw] m-[10vh]'>
      <div className='flex items-start lg:items-center justify-center'>
        <h1 className='font-cabinetgrotesk text-7xl lg:text-[6vw] lowercase lg:[writing-mode:vertical-lr] text-blue-800'>
          S<span className='italic -ml-[0.5vw]'>e</span>rvic<span className='italic -ml-[0.5vw]'>e</span>s
        </h1>
      </div>
      <div className='font-satoshi font-medium lg:pl-[3vw] text-zinc-950 text-3xl lg:text-[3vw]'>
        <ol className='list-[decimal-leading-zero] list-inside space-y-4'>
          <li>Application Design and Development</li>
          <li>Slide Decks</li>
          <li>Digital Design</li>
          <li>Strategy</li>
          <li>Research</li>
        </ol>
      </div>
    </section>
  )
}

export default Services