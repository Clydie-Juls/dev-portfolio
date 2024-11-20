import { SocialIcon } from "react-social-icons";

export default function Footer() {
  return (
    <div className="container mx-auto flex flex-col items-center justify-center p-10">
        <div className="w-full flex items-center justify-center gap-8">
            <SocialIcon url="www.facebook.com" bgColor="transparent" fgColor="white"/>
            <SocialIcon url="www.linkedin.com" bgColor="transparent" fgColor="white"/>
            <SocialIcon url="https://github.com" bgColor="transparent" fgColor="white"/>
        </div>
        <div className="w-full flex items-center justify-center gap-4 my-4">
            <div className=" border border-white w-full"></div>
            <div className="flex items-center justify-center text-center">
                <h2 className="text-3xl font-bold w-48">Get in touch</h2>
            </div>
            <div className=" border border-white w-full"></div>
        </div>
    </div>
  )
}