import React from 'react'
import { RippleBackground } from '../custom/ripple-background'
import WorkExperienceItem, { workExperienceItemProps } from '../custom/work-experience-item'

const workExperienceItems: workExperienceItemProps[] = [
  {
    title: "Associate Vice President For Web Development",
    date: "August 2024 - Present",
    company: "Peer Tutor Society",
    description:
      "Scrum master and a developer working on revamping the PTS website.",
    imageUrl: "/pts-logo.jfif",
  },
  {
    title: "DLSU Harvard MUN Web Development Staff",
    date: "July 2024 - Present",
    company: "Peer Tutor Society",
    description:
      "One of the staffs who created the MUN website, particularly the events page.",
    imageUrl: "/h-mun-logo.jpg",
  },
  {
    title: "PTS Tutor",
    date: "May 2024 - Present",
    company: "Peer Tutor Society",
    description:
      "Providing Tutoring service in computer-related subjects and programming",
    imageUrl: "/pts-logo.jfif",
  },
  {
    title: "Freelancer",
    date: "2024 - Present",
    company: "Self-employed",
    description:
      "Independent Freelancer focusing on web development and a bit of machine learning development.",
    imageUrl: "/freelancer-logo.png",
  },
];


function WorkExperienceSection() {
  return (
    <div className='relative w-full h-full'>
        <div className='absolute w-full h-full bg-gradient-to-b from-transparent to-20% to-black'></div>
        <RippleBackground/>
        <div className='relative z-30 flex flex-col items-center justify-between h-full p-28'>
            <h1 className='text-4xl font-extrabold'>Work Experience</h1>
            <div className='flex flex-col gap-8 container mx-auto px-60'>
                {workExperienceItems.map((item, index) => (
                    <WorkExperienceItem key={index} {...item} />
                ))}
            </div>
            <div></div>
        </div>
    </div>
  )
}

export default WorkExperienceSection