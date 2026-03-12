import { cn } from "@/lib/utils";
import { Button } from "./button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";


export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "mx-auto grid max-w-[86rem] grid-cols-1 gap-8 md:auto-rows-[19rem] md:grid-cols-5 xl:max-w-[90rem]",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  tech,
  description,
  header,
  icon,
  srcLink
}: {
  className?: string;
  title?: string | React.ReactNode;
  tech?: string;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
  srcLink?: string;
}) => {
  return (
    <div
      className={cn(
        "row-span-1 flex min-w-0 flex-col justify-between rounded-xl border border-transparent bg-white p-6 shadow-input transition duration-200 group/bento hover:shadow-xl dark:border-white/[0.2] dark:bg-black dark:shadow-none md:p-8",
        className
      )}
    >
      {header}
      <div className="flex min-w-0 flex-1 flex-col group-hover/bento:translate-x-2 transition duration-200">
        {icon}
        <div className="mb-3 mt-3 text-2xl font-sans font-extrabold tracking-tight text-neutral-800 dark:text-white md:text-[1.7rem]">
          {title}
        </div>
        {tech ? (
          <div className="mb-4 text-sm font-semibold uppercase tracking-[0.16em] text-green-400/90">
            {tech}
          </div>
        ) : null}
        <div className="max-w-[56ch] break-words text-[13.5px] font-sans font-normal leading-7 text-neutral-700 dark:text-neutral-200/90 md:text-sm md:leading-7">
          {description}
        </div>
        <div className="mt-10 flex justify-end">
          <Link target="_blank" href={srcLink || '#'}>
            <Button asChild>
              <div>
                <ArrowRight />
                View Project in Github
              </div>
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};
