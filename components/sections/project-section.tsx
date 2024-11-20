import React from 'react'
import { ProjectBentoGrid } from '../custom/project-bento-grid'
import { Button } from '../ui/button'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import GreenBubble from '../custom/green-bubble'

export default function ProjectSection() {
  return (
    <div className='relative w-full h-full overflow-hidden'>
        <GreenBubble posX={-100} posY={-100}/>
        <GreenBubble posX={-150} posY={500} anchorX='right'/>
        <GreenBubble posX={-140} posY={-20} anchorY='bottom'/>
        <div className='absolute w-full h-full bg-gradient-to-b from-black to-10% to-transparent'></div>
        <div className='absolute w-full h-full bg-gradient-to-b from-transparent from-90% to-black'></div>
        <div className='relative w-full flex flex-col items-center justify-center py-28 px-60 container mx-auto'>
            <div className='w-full mb-16 mt-8'>
                <h1 className='text-4xl font-extrabold'>Projects</h1>
            </div>
            <ProjectBentoGrid/>
            <div className='w-full flex justify-end mt-8 mr-10'>
                <Button asChild >
                    <div>
                        <ArrowRight/>
                        <Link target='_blank' href={'https://github.com/Clydie-Juls'}>See More Projects</Link>
                    </div>
                </Button>
            </div>
        </div>
    </div>
  )
}
