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
          srcLink={item.srcLink}
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
    description: "A web-based full-stack even transaction manager and summarizer for the DLSU google Developers’ student using Next.js and Supabase. Being made in partial fulfillment of CSSWENG",
    header: <Skeleton />,
    className: "md:col-span-2",
    srcLink: "https://github.com/pjagbuya/cssweng-gd-finance-web"
  },
  {
    title: "Action Recognition Sign Language", 
    description: "A camera-based action recognition sign language application written in Python. this application uses mediaPipe for hand tracking, OpenCv for image processing and recording, and LSTM model using Tensorflow for action recognition.",
    header: <Skeleton />,
    className: "md:col-span-1",
    srcLink: "https://github.com/Clydie-Juls/action-recognition-sign-language"
  },
  {
    title: "Square Domination",
    description: "Square Domination is a simple local 2-player 3-d Shooting Game made in Unity.",
    header: <Skeleton />,
    className: "md:col-span-1",
    srcLink: "https://github.com/Clydie-Juls/square-domination"
  },
  {
    title: "Boogie Post",
    description: "A simple blog application with blog posting with image upload and viewing  made using Javascript, Express.js and EJS",
    header: <Skeleton />,
    className: "md:col-span-2",
    srcLink: "https://github.com/Clydie-Juls/Web-Blog-Express"
  },
  {
    title: "TTT",
    description: "A forum applciation with jwt authentication and authorization using React.js and MongoDb. Made in partial fullfillment of CCAPDEV",
    header: <Skeleton />,
    className: "md:col-span-2",
    srcLink: "https://github.com/Clydie-Juls/Apdevers-MP"
  },
  {
    title: "Sokobot",
    description: "A midtier sokobot solver in Java using GBFS, Zorbist Hashing, and lower-bound heuristic deadlock detection. Made in partial fulfillment of CSINTSY.",
    header: <Skeleton />,
    className: "md:col-span-1",
    srcLink: "https://github.com/Clydie-Juls/sokobot"
  },
];
