import React from 'react'

const Services = () => {
  return (
    <section id='services' className='flex flex-row items-start justify-center min-h-screen p-[3vw] text-zinc-950'>
      <h1 className='font-cabinetgrotesk text-[6vw] lowercase [writing-mode:vertical-lr] text-blue-800'>
        S<span className='italic -ml-[0.5vw]'>e</span>rvic<span className='italic -ml-[0.5vw]'>e</span>s
      </h1>
      <div className='font-satoshi font-medium pl-[3vw] text-zinc-600 text-[3vw]'>
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