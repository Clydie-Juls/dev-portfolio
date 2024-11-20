import { GridBackground } from "../custom/grid-background";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

export default function HeroSection() {
  return (
    <div className="w-full h-full">
        <GridBackground />
        <div className="h-full container mx-auto flex items-center justify-center gap-16">
            <div>
                <Avatar className="w-[320px] h-[320px]">
                    <AvatarImage src="/profile-picture.jfif" />
                    <AvatarFallback>CN</AvatarFallback>
                </Avatar>
            </div>
            <div className="flex flex-col gap-8">
                <div>
                    <h1 className="text-5xl">Hi! I&apos;m <span className=" font-extrabold">Clyde Marindo</span></h1>
                    <h3 className="text-xl font-medium text-white opacity-20">Cavite, Philippines</h3>
                </div>
                <div>
                    <h2 className="text-4xl font-medium">I&apos;m a</h2>
                    <h3 className="font-extrabold text-5xl text-green-400">Full Stack Developer</h3>
                </div>
            </div>
        </div>
    </div>
  )
}
