import { backendFrameworks, databases, frontendFrameworks, infrastructureTools, programmingLanguages } from "@/app/(constant)/value"
import { DotBackground } from "../custom/dot-background"
import TechStackCategory from "../custom/tech-stack-category"
import { TechStackIconCloud } from "../custom/tech-stack-icon-cloud"
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar"

export default function AboutMeSection() {
  return (
    <div className='relative h-full w-full px-4 py-10 sm:px-6 lg:p-16 lg:px-24 xl:px-[18rem] 2xl:px-[26rem]'>
        <div className="relative overflow-hidden border border-white border-opacity-10 rounded-md">
            <DotBackground/>
            <div className="p-6 sm:p-10 lg:p-16">
                <div className="text-4xl font-extrabold py-8">
                    About Me
                </div>
                <div className="flex flex-col items-center justify-between gap-10 lg:flex-row lg:items-start">
                    <div className="max-w-3xl">
                        <ul className="list-disc pl-6 text-lg leading-9 sm:text-xl sm:leading-[2.8rem]">
                            <li>Backend and infrastructure-focused software engineer based in Englewood, CO.</li>
                            <li>Experienced in building distributed systems and event-driven architectures using Go, PostgreSQL, and RabbitMQ.</li>
                            <li>Designed scalable backend platforms including a fault-tolerant shipment dispatch system processing 200K+ events in burst workloads.</li>
                            <li>Skilled in containerized and cloud-native development using Docker, Kubernetes, Terraform, and AWS.</li>
                            <li>Interested in backend engineering, distributed systems, and platform infrastructure.</li>
                        </ul>
                    </div>
                    <div>
                        <Avatar className="h-56 w-56 md:h-[320px] md:w-[320px]">
                            <AvatarImage src="/profile-picture.jfif" />
                            <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                    </div>
                </div>
                <div className="flex flex-col justify-between gap-12 lg:flex-row lg:gap-24">
                    <div className="w-full">
                        <h1 className="text-4xl font-extrabold py-8">Tech Stack</h1>
                        <TechStackIconCloud/>
                    </div>
                    <div className="mt-11 flex w-full flex-col gap-12">
                        <TechStackCategory title="Programming Languages(and markup)" items={programmingLanguages} />
                        <TechStackCategory title="Frontend Frameworks" items={frontendFrameworks} />
                        <TechStackCategory title="Backend Frameworks" items={backendFrameworks} />
                        <TechStackCategory title="Databases" items={databases} />
                        <TechStackCategory title="Infrastructure and Cloud" items={infrastructureTools} />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
