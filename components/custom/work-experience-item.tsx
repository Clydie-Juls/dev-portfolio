import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export type workExperienceItemProps = {
    title: string;
    date: string;
    company: string;
    description: string;
    imageUrl: string;
};

export default function WorkExperienceItem({ title, date, company, description, imageUrl }: workExperienceItemProps) {
  return (
    <div className="flex gap-8">
      <Avatar className="w-[48px] h-[48px] mt-2">
        <AvatarImage src={imageUrl} alt="@shadcn" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      <div className="flex flex-col gap-4">
        <div>
          <div className="flex justify-between">
            <h3 className="text-xl font-extrabold">{title}</h3>
            <h4 className="text-sm text-[16px] opacity-20">
              {date}
            </h4>
          </div>
          <h4 className="text-sm text-[16px] opacity-20">{company}</h4>
        </div>
        <div>
          <h4 className=" text-justify">
            {description}
          </h4>
        </div>
      </div>
    </div>
  );
}
