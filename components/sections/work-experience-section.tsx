import React from 'react'
import { RippleBackground } from '../custom/ripple-background'
import WorkExperienceItem, { workExperienceItemProps } from '../custom/work-experience-item'

const workExperienceItems: workExperienceItemProps[] = [
  {
    title: "Software Engineer",
    date: "May 2024 - Aug 2024",
    company: "Agile Software Development — In Collaboration with GDSC",
    location: "Manila, Philippines",
    responsibilities: [
      "Owned end-to-end authentication and RBAC implementation using Next.js (App Router) and Supabase, securing protected routes and admin workflows for 70–100 internal users.",
      "Architected Supabase authentication, API policies, and session handling for a 6-member Agile team enabling feature delivery over a 12-week cycle and production-sample deployment on Vercel.",
    ],
  },
  {
    title: "Computer Vision Engineer",
    date: "Feb 2023 - Feb 2025",
    company: "Independent Consultant",
    location: "Remote",
    responsibilities: [
      "Designed and delivered a real-time sign language translation prototype using a custom pose-tracking pipeline and LSTM classifier achieving ~80% accuracy.",
      "Built a labeled dataset pipeline using 500+ ASL video samples and improved model accuracy from 42% to 80%.",
    ],
  },
];


function WorkExperienceSection() {
  return (
    <div className='relative w-full h-full'>
        <div className='absolute w-full h-full bg-gradient-to-b from-transparent to-20% to-black'></div>
        <RippleBackground/>
        <div className='relative z-30 flex h-full flex-col items-center justify-between px-4 py-16 sm:px-8 lg:p-28'>
            <h1 className='text-4xl font-extrabold'>Work Experience</h1>
            <div className='container mx-auto flex flex-col gap-10 px-2 sm:px-6 lg:px-24 xl:px-60'>
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
