import React from 'react'
import { RippleBackground } from '../custom/ripple-background'
import WorkExperienceItem, { workExperienceItemProps } from '../custom/work-experience-item'

const workExperienceItems: workExperienceItemProps[] = [
  {
    title: "Associate Vice President For Web Development",
    date: "August 2024 - Present",
    company: "Peer Tutor Society",
    description:
      "I did Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sed risus mollis lectus eleifend aliquet eget nec sem. Cras pharetra varius tortor ut scelerisque.",
    imageUrl: "https://github.com/shadcn.png", // Replace with the actual image URL
  },
  {
    title: "PTS Tutor",
    date: "May 2024 - Present",
    company: "Peer Tutor Society",
    description:
      "I did Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sed risus mollis lectus eleifend aliquet eget nec sem. Cras pharetra varius tortor ut scelerisque.",
    imageUrl: "https://github.com/shadcn.png", // Replace with the actual image URL
  },
  {
    title: "Freelancer",
    date: "2024 - Present",
    company: "Self-employed",
    description:
      "I did Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sed risus mollis lectus eleifend aliquet eget nec sem. Cras pharetra varius tortor ut scelerisque.",
    imageUrl: "https://github.com/shadcn.png", // Replace with the actual image URL
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