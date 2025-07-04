import { Card, CardContent } from '@/components/ui/card'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel'
import React from 'react'

const ProjectImages = ({images}) => {
  return (
    <Carousel className='w-full h-full p-0'>
      <CarouselContent>
        {images.map((image, idx) => (
          <CarouselItem key={idx}>
            <div>
              <Card className='p-0'>
                <CardContent className="w-full h-full p-0">
                  {/* <span className="text-4xl font-semibold">{index + 1}</span> */}
                  <img src={image.src} alt={`Project Image ${idx+1}`} className='w-full h-full' />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className='ml-14' />
      <CarouselNext className='mr-14' />
    </Carousel>
  )
}

export default ProjectImages