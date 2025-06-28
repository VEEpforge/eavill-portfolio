import React from 'react'
import ProjectImages from './projects/ProjectImages'

const ProjectHandle = ({id, title, description, link, date, deliverables,images}) => {
  return (
    <div className='flex flex-col gap-y-[6vh] lg:flex-row w-full justify-between space-x-[2vw]'>
      <div className=' h-full bg-zinc-200 rounded-lg shadow-lg flex items-center justify-center w-full'>
        <ProjectImages
          images={images}
        />
      </div>
      <div className='flex flex-col justify-between w-full font-satoshi text-[2vh]'>
        <div className='flex flex-row justify-between w-full'>
          <div className='flex flex-col w-3/4'>
            <h2 className='font-cabinetgrotesk font-semibold text-[3vh] italic text-blue-800'>{title}</h2>
            <p className=' text-zinc-600 text-justify'>{description}</p>
          </div>
          <div>
            #{id}
          </div>
        </div>
        <div className='flex flex-row justify-between items-start w-full'>
          <div className='flex flex-col justify-between h-full'>
            <div>
              Live Site <br/>
              <a href={link} target='_blank' className='text-zinc-600 hover:text-blue-800'>{link}</a>
            </div>
            {/* <div>
              View Details
            </div> */}
          </div>
          <div className='flex flex-col justify-between h-full'>
            <div>
              Published<br/>
              <p className='text-zinc-600'>{date}</p>
            </div>
            {/* <div>
              Github
            </div> */}
          </div>
          <div className='text-right'>
            Deliverables <br/>
            {deliverables?.map((deliverable, index) => (
              <p key={index} className='text-zinc-600'>{deliverable}</p>
            ))}
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default ProjectHandle