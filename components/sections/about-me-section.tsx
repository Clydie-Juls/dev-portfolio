import { backendFrameworks, frontendFrameworks, gameDevelopment, programmingLanguages } from "@/app/(constant)/value"
import { DotBackground } from "../custom/dot-background"
import TechStackCategory from "../custom/tech-stack-category"
import { TechStackIconCloud } from "../custom/tech-stack-icon-cloud"
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar"

export default function AboutMeSection() {
  return (
    <div className='relative w-full h-full p-16 px-[26rem]'>
        <div className="relative overflow-hidden border border-white border-opacity-10 rounded-md">
            <DotBackground/>
            <div className="p-16">
                <div className="text-4xl font-extrabold py-8">
                    About Me
                </div>
                <div className="flex justify-between items-center">
                    <div>
                        <ul className="list-disc pl-6 text-xl leading-10">
                            <li>3rd-year Computer Science student at De La Salle University.</li>
                            <li><strong>Proficient</strong> in <strong>data structures, algorithms,</strong> and <strong>backend development</strong>.</li>
                            <li>Experienced in <strong>game development</strong> and <strong>collaborative projects</strong>.</li>
                            <li>Strong skills in <strong>problem-solving, teamwork,</strong> and <strong>critical thinking</strong>.</li>
                            <li>Actively seeking <strong>opportunities</strong> to apply technical knowledge and gain hands-on experience in software engineering.</li>
                        </ul>
                    </div>
                    <div>
                        <Avatar className="w-[320px] h-[320px]">
                            <AvatarImage src="/profile-picture.jfif" />
                            <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                    </div>
                </div>
                <div className="flex justify-between gap-24">
                    <div className="w-full">
                        <h1 className="text-4xl font-extrabold py-8">Tech Stack</h1>
                        <TechStackIconCloud/>
                    </div>
                    <div className="w-full flex flex-col gap-12 mt-11">
                        <TechStackCategory title="Frontend" items={programmingLanguages} />
                        <TechStackCategory title="Frontend" items={frontendFrameworks} />
                        <TechStackCategory title="Frontend" items={backendFrameworks} />
                        <TechStackCategory title="Frontend" items={gameDevelopment} />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
