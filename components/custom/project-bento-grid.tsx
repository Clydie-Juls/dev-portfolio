import React from "react";
import { BentoGrid, BentoGridItem } from "../ui/bento-grid";

export function ProjectBentoGrid() {
  return (
    <BentoGrid className="w-full mx-auto md:auto-rows-[24rem]">
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          header={item.header}
          className={item.className}
        />
      ))}
    </BentoGrid>
  );
}
const Skeleton = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl   dark:bg-dot-white/[0.2] bg-dot-black/[0.2] [mask-image:radial-gradient(ellipse_at_center,white,transparent)]  border border-transparent dark:border-white/[0.2] bg-neutral-100 dark:bg-black"></div>
);
const items = [
  {
    title: "GDSC Events",
    description: "I did Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sed risus mollis lectus eleifend aliquet eget nec sem. Cras pharetra varius tortor ut scelerisque.",
    header: <Skeleton />,
    className: "md:col-span-2",
  },
  {
    title: "Action Recognition Sign Language", 
    description: "I did Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sed risus mollis lectus eleifend aliquet eget nec sem. Cras pharetra varius tortor ut scelerisque.",
    header: <Skeleton />,
    className: "md:col-span-1",
  },
  {
    title: "Family Tree Chatbot",
    description: "I did Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sed risus mollis lectus eleifend aliquet eget nec sem. Cras pharetra varius tortor ut scelerisque.",
    header: <Skeleton />,
    className: "md:col-span-1",
  },
  {
    title: "Boogie Post",
    description: "I did Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sed risus mollis lectus eleifend aliquet eget nec sem. Cras pharetra varius tortor ut scelerisque.",
    header: <Skeleton />,
    className: "md:col-span-2",
  },
  {
    title: "TTT",
    description: "I did Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sed risus mollis lectus eleifend aliquet eget nec sem. Cras pharetra varius tortor ut scelerisque.",
    header: <Skeleton />,
    className: "md:col-span-2",
  },
  {
    title: "Sokobot",
    description: "I did Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sed risus mollis lectus eleifend aliquet eget nec sem. Cras pharetra varius tortor ut scelerisque.",
    header: <Skeleton />,
    className: "md:col-span-1",
  },
];
