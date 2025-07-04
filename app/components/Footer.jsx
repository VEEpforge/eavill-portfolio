'use client'
import { Button } from '@/components/ui/button'
import { ArrowUp, Copyright } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <footer className='fixed bottom-0 left-0 z-50 w-full text-white mix-blend-difference font-satoshi'>
      <div className='flex flex-row items-center justify-between px-[3vw] text-[2vw] lg:text-[1vw]'>
        <p className='flex items-center justify-center'>EZRA VILLANUEVA <Copyright className='inline h-[2vh]' /> 2025</p>
        <Link
          href='https://www.linkedin.com/in/ezraearlvillanueva'
          target='_blank'
          className='hover:text-amber-300 transition-colors duration-300'
        >
          LINKEDIN
        </Link>
        <Link
          href='https://github.com/VEEpforge'
          target='_blank'
          className='hover:text-amber-300 transition-colors duration-300'
        >
          GITHUB
        </Link>
        {/* <Link href='#' be></Link> */}
        <Button
          variant='link'
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <ArrowUp className='text-white mix-blend-difference'/>
        </Button>
      </div>
    </footer>
  )
}

export default Footer