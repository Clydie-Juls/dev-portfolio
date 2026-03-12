import React from "react";
import { BentoGrid, BentoGridItem } from "../ui/bento-grid";

export function ProjectBentoGrid() {
  return (
    <BentoGrid className="w-full mx-auto md:auto-rows-[29rem]">
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          tech={item.tech}
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
    tech: "Next.js, Supabase",
    description: "A web-based full-stack even transaction manager and summarizer for the DLSU google Developers’ student using Next.js and Supabase. Being made in partial fulfillment of CSSWENG",
    header: <Skeleton />,
    className: "md:col-span-3",
    srcLink: "https://github.com/pjagbuya/cssweng-gd-finance-web"
  },
  {
    title: "Action Recognition Sign Language",
    tech: "Python, MediaPipe, OpenCV, TensorFlow",
    description: "A camera-based action recognition sign language application written in Python. this application uses mediaPipe for hand tracking, OpenCv for image processing and recording, and LSTM model using Tensorflow for action recognition.",
    header: <Skeleton />,
    className: "md:col-span-2",
    srcLink: "https://github.com/Clydie-Juls/action-recognition-sign-language"
  },
  {
    title: "Global University Data Platform",
    tech: "Go, TypeScript, Next.js, OpenLayers, PostgreSQL, Docker, Node.js",
    description: "Full-stack geospatial platform mapping 1,500+ universities. Built REST APIs in Go and implemented a concurrent ETL pipeline using goroutines, reducing ingestion time from 600+ seconds to ~100 seconds.",
    header: <Skeleton />,
    className: "border border-green-400/40 shadow-[0_0_0_1px_rgba(74,222,128,0.22)] md:col-span-2",
    srcLink: "#"
  },
  {
    title: "Fault-Tolerant Shipment Dispatch Platform",
    tech: "Go, PostgreSQL, RabbitMQ, Kubernetes, Terraform, AWS",
    description: "Distributed event-driven backend system designed to process high-volume shipment events with reliable recovery. Handles 200K+ shipment events in burst tests using Go concurrent consumers and RabbitMQ while maintaining zero data loss. Infrastructure is provisioned using Terraform with automated CI/CD.",
    header: <Skeleton />,
    className: "border border-green-400/40 shadow-[0_0_0_1px_rgba(74,222,128,0.22)] md:col-span-3",
    srcLink: "#"
  },
  {
    title: "Distributed Game Search Engine",
    tech: "Docker, PostgreSQL, Azure, Python, Node.js, Playwright",
    description: "Distributed search backend built with a 6-node architecture (3 backend services, 1 primary PostgreSQL, 2 partitioned replicas) to support concurrent ingestion and queries. Includes a transaction-safe Python ETL pipeline and automated testing using Playwright.",
    header: <Skeleton />,
    className: "border border-green-400/40 shadow-[0_0_0_1px_rgba(74,222,128,0.22)] md:col-span-3",
    srcLink: "#"
  },
  {
    title: "Sokobot",
    tech: "Java, GBFS, Zobrist Hashing",
    description: "A midtier sokobot solver in Java using GBFS, Zorbist Hashing, and lower-bound heuristic deadlock detection. Made in partial fulfillment of CSINTSY.",
    header: <Skeleton />,
    className: "md:col-span-2",
    srcLink: "https://github.com/Clydie-Juls/sokobot"
  },
];
