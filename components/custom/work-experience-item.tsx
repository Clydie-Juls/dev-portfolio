import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export type workExperienceItemProps = {
    title: string;
    date: string;
    company: string;
    location: string;
    responsibilities: string[];
    imageUrl?: string;
};

function getInitials(title: string) {
  return title
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((word) => word[0])
    .join("")
    .toUpperCase();
}

export default function WorkExperienceItem({ title, date, company, location, responsibilities, imageUrl }: workExperienceItemProps) {
  return (
    <div className="flex w-full gap-4 md:gap-8">
      <Avatar className="mt-2 h-[48px] w-[48px] shrink-0">
        <AvatarImage src={imageUrl} alt="@shadcn" />
        <AvatarFallback>{getInitials(title)}</AvatarFallback>
      </Avatar>
      <div className="flex flex-col gap-4 w-full">
        <div>
          <div className="flex flex-col gap-2 md:flex-row md:items-start md:justify-between">
            <h3 className="text-xl font-extrabold">{title}</h3>
            <h4 className="text-sm text-[16px] text-white/60">
              {date}
            </h4>
          </div>
          <h4 className="text-sm text-[16px] text-white/80">{company}</h4>
          <h5 className="mt-1 text-sm text-[15px] text-white/60">{location}</h5>
        </div>
        <ul className="list-disc space-y-3 pl-5 text-justify leading-7 text-white/85">
          {responsibilities.map((responsibility) => (
            <li key={responsibility}>{responsibility}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
