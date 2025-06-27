import React from 'react'
import ProjectHandle from './ProjectHandle'
import { projects } from '@/assets/projects'

const Projects = () => {
  return (
    <section id='projects' className='flex flex-col items-start justify-start min-h-screen p-[3vw] text-zinc-950 w-full'>
      <h1 className='font-cabinetgrotesk text-[6vw] lowercase'>
        Selected W<span className='italic -ml-[0.5vw]'>o</span>rks
      </h1>
      <div className='flex flex-col space-y-[5vw] w-full'>
        {/* <ProjectHandle />}
        <ProjectHandle /> */}
        {
          // Assuming projects is an array of project objects imported from a file
          projects.map((project) => (
            <ProjectHandle
              key={project.id}
              id={project.id}
              title={project.title}
              description={project.description}
              images={project.images}
              link={project.link}
              date={project.date}
              github={project.github}
              deliverables={project.deliverables}
            />
          ))
        }
      </div>
    </section>
  )
}

export default Projects