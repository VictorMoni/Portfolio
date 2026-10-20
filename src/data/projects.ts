import type { ProjectData } from "../types/project";
import otherProjectImage from "../assets/covers/sankhya-dark.svg";
import otherProjectImageLight from "../assets/covers/sankhya-light.svg";
import otherProjectImage3 from "../assets/covers/taskyhub-dark.svg";
import otherProjectImage3Light from "../assets/covers/taskyhub-light.svg";
import otherProjectImage2 from "../assets/covers/todoapp-dark.svg";
import otherProjectImage2Light from "../assets/covers/todoapp-light.svg";
import shopEasyImage from "../assets/covers/shopeasy-dark.svg";
import shopEasyImageLight from "../assets/covers/shopeasy-light.svg";

export const sideProjects = [
  {
    cover: shopEasyImage,
    lightCover: shopEasyImageLight,
    title: "ShopEasy",
    description:
      "A full-stack e-commerce platform connecting an Angular storefront to a Spring Boot API. Built around secure authentication, product management, and event-driven orders.",
    engineeringFocus:
      "JWT authentication and Kafka order events connect the storefront to the backend. Docker Compose and Kubernetes support deployment. This learning project uses a simplified checkout and some mock data; payment integration remains planned.",
    technologies: [
      "Angular",
      "Spring Boot",
      "MySQL",
      "Kafka",
      "Docker",
      "Kubernetes",
    ],
    lastUpdated: "2025-08-22",
    repoLink: "https://github.com/victormoni/ShopEasy",
  },
  {
    cover: otherProjectImage,
    lightCover: otherProjectImageLight,
    title: "Sankhya",
    engineeringFocus:
      "Connects a locally saved cart to a stock-validated checkout API, with Flyway migrations for reproducible database setup.",
    description:
      "Full-stack shopping application built with Angular, Spring Boot, and MySQL. Browse a visual product catalog, manage a cart saved locally, and check out with stock validation. Includes order history, Flyway database migrations, and Docker Compose orchestration.",
    technologies: ["Angular", "Spring Boot", "MySQL", "Docker"],
    lastUpdated: "2025-09-20",
    repoLink: "https://github.com/victormoni/Sankhya",
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
] satisfies ProjectData[];
