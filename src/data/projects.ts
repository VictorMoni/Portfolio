import repolumeImage from "../assets/covers/repolume-dark.svg";
import repolumeImageLight from "../assets/covers/repolume-light.svg";
import type { ProjectData } from "../types/project";
import spLayersImage from "../assets/covers/sp-layers-home-dark.png";
import spLayersImageLight from "../assets/covers/sp-layers-home-light.png";
import otherProjectImage3 from "../assets/covers/taskyhub-home-dark.png";
import otherProjectImage3Light from "../assets/covers/taskyhub-home-light.png";
import otherProjectImage2 from "../assets/covers/todoapp-home-dark.png";
import otherProjectImage2Light from "../assets/covers/todoapp-home-light.png";
import shopEasyImage from "../assets/covers/shopeasy-home-dark.png";
import shopEasyImageLight from "../assets/covers/shopeasy-home-light.png";

import mediaLabImage from "../assets/covers/media-lab-home-dark.png";
import mediaLabImageLight from "../assets/covers/media-lab-home-light.png";

export const sideProjects = [
  {
    cover: spLayersImage,
    lightCover: spLayersImageLight,
    title: "SP Layers",
    description:
      "An interactive portrait of São Paulo through 20 photo stories. Discover local culture, build a three-place outing, and create a personalized postcard in Portuguese, English, or Spanish.",
    engineeringFocus:
      "Built for the Cloudinary Mini-Hack with image transformations prepared once and served locally to protect quota during visits. Includes a before-and-after comparison, Google Maps routes, discovery quizzes, and PNG postcards composed on the device without accounts or secret keys.",
    technologies: ["JavaScript", "HTML", "CSS", "Cloudinary", "Canvas"],
    lastUpdated: "2026-11-03",
    liveLink: "https://sp-layers.vercel.app/",
    repoLink: "https://github.com/VictorMoni/sao-paulo-in-layers",
  },
  {
    cover: repolumeImage,
    lightCover: repolumeImageLight,
    title: "Repolume",
    description: "A GitHub repository review tool that turns public project information into a practical improvement plan. Review README coverage, prioritize fixes, and generate a README in Portuguese, English, or Spanish.",
    engineeringFocus: "Built with vanilla JavaScript and the GitHub REST API, with browser-saved selections, Markdown exports, light and dark themes, and keyboard-accessible controls. Public repositories can be reviewed without signing in.",
    technologies: ["JavaScript", "HTML", "CSS", "GitHub API"],
    lastUpdated: "2026-11-05",
    liveLink: "https://repolume-review.vercel.app",
    repoLink: "https://github.com/VictorMoni/repolume",
  },
  {
    cover: shopEasyImage,
    lightCover: shopEasyImageLight,
    title: "ShopEasy",
    description:
      "A full-stack e-commerce platform connecting an Angular storefront to a Spring Boot API. Built around secure authentication, product management, and event-driven orders.",
    engineeringFocus:
      "A responsive Angular storefront backed by Spring Boot, MySQL and Kafka. Hosted on Render with encrypted database and messaging connections, typed JWT sessions and owner-scoped orders. The illustrated catalog and checkout are a portfolio demonstration without real payments.",
    technologies: [
      "Angular",
      "Spring Boot",
      "MySQL",
      "Kafka",
      "Docker",
      "Kubernetes",
    ],
    lastUpdated: "2026-10-31",
    liveLink: "https://shopeasy-vm.onrender.com",
    repoLink: "https://github.com/victormoni/ShopEasy",
  },
  {
    cover: otherProjectImage2,
    lightCover: otherProjectImage2Light,
    title: "TodoApp",
    engineeringFocus:
      "Combines task creation, completion, deletion, and status filters with browser storage, progress tracking, and accessible light and dark themes.",
    description:
      "A focused task manager built with React, TypeScript, and Vite. Create and complete tasks, filter your list, and follow your progress through a responsive interface with light and dark themes. Tasks stay saved in your browser.",
    technologies: ["React", "TypeScript", "Vite"],
    lastUpdated: "2026-10-31",
    repoLink: "https://github.com/victormoni/TodoApp",
    liveLink: "https://production-todo.vercel.app",
  },
  {
    cover: otherProjectImage3,
    lightCover: otherProjectImage3Light,
    title: "TaskyHub",
    engineeringFocus:
      "Combines authenticated task management with due dates, recurring schedules, bulk actions, and JSON import/export.",
    description:
      "A personal productivity app built with Next.js and TypeScript, with Google sign-in and MongoDB storage. Organize tasks with due dates and recurring schedules, find items with search and filters, and save time with bulk actions and JSON import/export.",
    technologies: ["Next.js", "TypeScript", "MongoDB"],
    lastUpdated: "2026-10-31",
    liveLink: "https://taskyhub.vercel.app",
    repoLink: "https://github.com/victormoni/TaskyHub",
  },
  {
    cover: mediaLabImage,
    lightCover: mediaLabImageLight,
    title: "Media Lab",
    description:
      "An interactive image delivery lab built with Next.js and Cloudinary. Compare original and optimized images, experiment with crops and delivery widths, and inspect transformation URLs.",
    engineeringFocus:
      "Uses responsive images with srcSet and sizes, automatic quality and format selection, and URL-based transformations. Supports public Cloudinary assets without uploads, authentication, or secret keys.",
    technologies: ["Next.js", "React", "JavaScript", "Cloudinary"],
    lastUpdated: "2026-10-31",
    liveLink: "https://media-lab-cloudinary.vercel.app",
    repoLink: "https://github.com/VictorMoni/media-lab-cloudinary",
  },
] satisfies ProjectData[];
