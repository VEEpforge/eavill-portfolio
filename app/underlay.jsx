import React from 'react'

export default function Underlay() {
  return (
    <div className="fixed inset-0 z-10 h-screen grid grid-cols-2 px-[3vw] bg-neutral-50">
      <div className=" h-full grid grid-cols-2">
        <div className="border-1 border-dotted border-zinc-300 h-full"></div>
        <div className="border-1 border-dotted border-zinc-300 h-full"></div>
      </div>
      <div className=" h-full grid grid-cols-2">
        <div className="border-1 border-dotted border-zinc-300 h-full"></div>
        <div className="border-1 border-dotted border-zinc-300 h-full"></div>
      </div>
    </div>
  )
}
