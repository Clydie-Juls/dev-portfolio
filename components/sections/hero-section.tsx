import { GridBackground } from "../custom/grid-background";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import BoxReveal from "../ui/box-reveal";
import SparklesText from "../ui/sparkles-text";

export default function HeroSection() {
  return (
    <div className="w-full h-full">
        <GridBackground />
        <div className="h-full container mx-auto flex items-center justify-center gap-16">
            <div>
            <BoxReveal boxColor={"#82FA9F"} duration={0.4}>
                <Avatar className="w-[320px] h-[320px]">
                    <AvatarImage src="/profile-picture.jfif" />
                    <AvatarFallback>CN</AvatarFallback>
                </Avatar>
            </BoxReveal>
            </div>
            <div className="flex flex-col gap-8">
                <div>
                    <BoxReveal boxColor={"#82FA9F"} duration={0.5}>
                    <h1 className="text-5xl">Hi! I&apos;m <span className=" font-extrabold">Clyde Marindo</span></h1>
                    </BoxReveal>
                    <BoxReveal boxColor={"#82FA9F"} duration={0.55}>
                    <h3 className="text-xl font-medium text-white opacity-20">Cavite, Philippines</h3>
                    </BoxReveal>
                </div>
                <div>
                    <BoxReveal boxColor={"#82FA9F"} duration={0.6}>
                    <h2 className="text-4xl font-medium">I&apos;m a</h2>
                    </BoxReveal>
                    <BoxReveal boxColor={"#82FA9F"} duration={0.65}>
                    <SparklesText className="pb-4 font-extrabold text-5xl text-green-400" text="Full Stack Developer"/>
                    </BoxReveal>
                </div>
            </div>
        </div>
    </div>
  )
}
