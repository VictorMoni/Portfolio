import type { ProjectData } from "../types/project";
import otherProjectImage3 from "../assets/covers/taskyhub-dark.svg";
import otherProjectImage3Light from "../assets/covers/taskyhub-light.svg";
import otherProjectImage2 from "../assets/covers/todoapp-dark.svg";
import otherProjectImage2Light from "../assets/covers/todoapp-light.svg";
import shopEasyImage from "../assets/covers/shopeasy-dark.svg";
import shopEasyImageLight from "../assets/covers/shopeasy-light.svg";

import mediaLabImage from "../assets/covers/media-lab-dark.svg";
import mediaLabImageLight from "../assets/covers/media-lab-light.svg";

export const sideProjects = [
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
    lastUpdated: "2026-10-22",
    liveLink: "https://shopeasy-vm.onrender.com",
    repoLink: "https://github.com/victormoni/ShopEasy",
  },
  {
    cover: otherProjectImage2,
    lightCover: otherProjectImage2Light,
    title: "TodoApp",
    engineeringFocus:
      "Keeps task creation, editing, and deletion within a focused React interface, demonstrating essential frontend interaction patterns.",
    description:
      "A focused task manager built with React, TypeScript, and Vite. Create, edit, and delete tasks through a straightforward interface that keeps everyday planning simple and puts essential actions within easy reach.",
    technologies: ["React", "TypeScript", "Vite"],
    lastUpdated: "2025-07-22",
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
    lastUpdated: "2025-06-07",
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
    lastUpdated: "2026-10-27",
    liveLink: "https://media-lab-cloudinary.vercel.app",
    repoLink: "https://github.com/VictorMoni/media-lab-cloudinary",
  },
] satisfies ProjectData[];
