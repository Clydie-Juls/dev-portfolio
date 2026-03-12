import { GridBackground } from "../custom/grid-background";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import BoxReveal from "../ui/box-reveal";
import SparklesText from "../ui/sparkles-text";

export default function HeroSection() {
  return (
    <div className="w-full h-full">
      <GridBackground />
      <div className="h-full container mx-auto flex flex-col items-center justify-center gap-10 px-6 text-center md:flex-row md:gap-16 md:px-8 md:text-left">
        <div>
          <BoxReveal boxColor={"#82FA9F"} duration={0.4}>
            <Avatar className="h-56 w-56 md:h-[320px] md:w-[320px]">
              <AvatarImage src="/profile-picture.jfif" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </BoxReveal>
        </div>
        <div className="flex flex-col gap-8">
          <div>
            <BoxReveal boxColor={"#82FA9F"} duration={0.5}>
              <h1 className="text-4xl md:text-5xl">Hi! I&apos;m <span className=" font-extrabold">Clyde Marindo</span></h1>
            </BoxReveal>
            <BoxReveal boxColor={"#82FA9F"} duration={0.55}>
              <h3 className="text-lg font-medium text-white/70 md:text-xl">Englewood, CO, USA</h3>
            </BoxReveal>
          </div>
          <div>
            <BoxReveal boxColor={"#82FA9F"} duration={0.6}>
              <h2 className="text-3xl font-medium md:text-4xl">I&apos;m a</h2>
            </BoxReveal>
            <BoxReveal boxColor={"#82FA9F"} duration={0.65}>
              <SparklesText className="pb-4 text-4xl font-extrabold text-green-400 md:text-5xl" text="Backend & Infrastructure Engineer" />
            </BoxReveal>
          </div>
        </div>
      </div>
    </div>
  )
}
