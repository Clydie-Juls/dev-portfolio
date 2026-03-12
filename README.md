# Clyde Marindo Portfolio

Personal portfolio website for Clyde Marindo, built with Next.js, React, TypeScript, and Tailwind CSS. The site presents a backend and infrastructure-focused software engineering profile, including an About section, tech stack, work experience, featured projects, and resume download.

## Portfolio Summary

This portfolio is a single-page website designed to showcase:

- Professional summary and current location
- Core backend, infrastructure, and cloud technologies
- Work experience highlights
- Featured software projects
- Resume and external profile links

The site keeps a dark visual style with lightweight animated UI components for the hero, tech stack, and section backgrounds.

## Tech Stack

- Next.js 14
- React 18
- TypeScript
- Tailwind CSS
- Framer Motion
- Radix UI

## Project Structure

```text
app/                    Next.js App Router entrypoints and global styles
components/             Section components, custom UI, and reusable primitives
lib/                    Shared utility helpers
public/                 Static assets such as images and resume PDF
```

## Prerequisites

Before running the project locally, make sure you have:

- Node.js 18 or newer
- npm 9 or newer

You can verify your versions with:

```bash
node -v
npm -v
```

## Installation

Clone the repository:

```bash
git clone <your-repository-url>
```

Move into the project directory:

```bash
cd dev-portfolio
```

Install dependencies:

```bash
npm install
```

## Run Locally

Start the development server:

```bash
npm run dev
```

Open the app in your browser:

```text
http://localhost:3000
```

The page will automatically reload as you make changes.

## Available Scripts

Run the local development server:

```bash
npm run dev
```

Create a production build:

```bash
npm run build
```

Start the production server after building:

```bash
npm run start
```

Run linting:

```bash
npm run lint
```

## Where To Update Content

If you want to customize the portfolio further, these are the main files:

- `app/page.tsx` for overall page composition
- `components/sections/` for content sections
- `components/custom/project-bento-grid.tsx` for featured projects
- `components/sections/work-experience-section.tsx` for work experience
- `components/sections/about-me-section.tsx` for About content
- `app/(constant)/value.ts` for tech stack category data

## Notes

- Static assets are stored in `public/`
- The resume download links to `public/cv/Marindo-resume.pdf`
- The site uses local Geist fonts loaded through Next.js
