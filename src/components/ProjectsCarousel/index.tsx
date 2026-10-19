import { useLanguage } from '../../i18n';
import { ChevronLeft, ChevronRight } from "lucide-react";
import React, { useRef } from "react";
import styled, { keyframes } from "styled-components";
import otherProjectImage from '../../assets/sankhya.webp';
import otherProjectImage3 from '../../assets/taskyhub.webp';
import otherProjectImage2 from '../../assets/todoapp.webp';
import { Project } from "../Project";

const projects = [
  {
    cover: otherProjectImage,
    title: "Sankhya",
    engineeringFocus: "Connects a locally saved cart to a stock-validated checkout API, with Flyway migrations for reproducible database setup.",
    description: "Full-stack shopping application built with Angular, Spring Boot, and MySQL. Browse a visual product catalog, manage a cart saved locally, and check out with stock validation. Includes order history, Flyway database migrations, and Docker Compose orchestration.",
    technologies: ["Angular", "Spring Boot", "MySQL", "Docker"],
    lastUpdated: "2025-09-20",
    repoLink: "https://github.com/victormoni/Sankhya",
  },
  {
    cover: otherProjectImage2,
    title: "TodoApp",
    engineeringFocus: "Keeps task creation, editing, and deletion within a focused React interface, demonstrating essential frontend interaction patterns.",
    description: "A focused task manager built with React, TypeScript, and Vite. Create, edit, and delete tasks through a straightforward interface that keeps everyday planning simple and puts essential actions within easy reach.",
    technologies: ["React", "TypeScript", "Vite"],
    lastUpdated: "2025-07-22",
    repoLink: "https://github.com/victormoni/TodoApp",
    liveLink: "https://production-todo.vercel.app",
  },
  {
    cover: otherProjectImage3,
    title: "TaskyHub",
    engineeringFocus: "Combines authenticated task management with due dates, recurring schedules, bulk actions, and JSON import/export.",
    description: "A personal productivity app built with Next.js and TypeScript, with Google sign-in and MongoDB storage. Organize tasks with due dates and recurring schedules, find items with search and filters, and save time with bulk actions and JSON import/export.",
    technologies: ["Next.js", "TypeScript", "MongoDB"],
    lastUpdated: "2025-06-07",
    liveLink: "https://taskyhub.vercel.app",
    repoLink: "https://github.com/victormoni/TaskyHub",
  },
];

export const ProjectsCarousel = () => {
    const { t } = useLanguage();
  const carouselRef = useRef<HTMLDivElement>(null);
  const drag = useRef({ isDown: false, startX: 0, scrollLeft: 0 });

  const handleScroll = (direction: "left" | "right") => {
    if (!carouselRef.current) return;
    const card = carouselRef.current.querySelector("article");
    const scrollAmount = card ? card.getBoundingClientRect().width + 24 : 350;
    carouselRef.current.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!carouselRef.current) return;
    if ((e.target as HTMLElement).closest("a, button")) return;
    drag.current.isDown = true;
    drag.current.startX = e.pageX - carouselRef.current.offsetLeft;
    drag.current.scrollLeft = carouselRef.current.scrollLeft;
  };

  const handleMouseLeaveOrUp = () => {
    drag.current.isDown = false;
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!drag.current.isDown || !carouselRef.current) return;
    e.preventDefault();
    const x = e.pageX - carouselRef.current.offsetLeft;
    const walk = (x - drag.current.startX) * 1.5;
    carouselRef.current.scrollLeft = drag.current.scrollLeft - walk;
  };

  return (
    <CarouselWrapper>
      <ArrowButton type="button" aria-label={t("Previous projects")} $position="left" onClick={() => handleScroll("left")}>
        <ChevronLeft size={20} />
      </ArrowButton>

      <ScrollArea
        ref={carouselRef}
        role="region"
        aria-label={t("Side projects carousel")}
        tabIndex={0}
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseLeaveOrUp}
        onMouseUp={handleMouseLeaveOrUp}
        onMouseMove={handleMouseMove}
      >
        {projects.map(project => (
          <Project key={project.title} {...project} />
        ))}
      </ScrollArea>

      <ArrowButton type="button" aria-label={t("Next projects")} $position="right" onClick={() => handleScroll("right")}>
        <ChevronRight size={20} />
      </ArrowButton>
    </CarouselWrapper>
  );
};

const slideIn = keyframes`
  from { transform: translateX(-20px); opacity: 0; }
  to { transform: translateX(0); opacity: 1; }
`;

const CarouselWrapper = styled.div`
  display: flex;
  position: relative;
  gap: 12px;
  animation: ${slideIn} 0.8s ease-out;
`;

const ScrollArea = styled.div`
  display: flex;
  gap: 24px;
  min-width: 0;
  width: 100%;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  scroll-behavior: smooth;
  padding: 12px 12px 24px;

  &::-webkit-scrollbar {
    height: 0px;
  }

  &::-webkit-scrollbar-thumb {
    background: #444;
    border-radius: 4px;
  }

  & > * {
    flex: 0 0 auto;
    scroll-snap-align: start;
  }

  cursor: grab;
  touch-action: pan-x pan-y;
  &:focus-visible { outline: 2px solid var(--primary-light); outline-offset: -2px; }
  @media (max-width: 450px) {
    & > article { width: calc(100% - 24px); max-width: none; min-width: 0; }
  }
`;

const ArrowButton = styled.button<{ $position: "left" | "right" }>`
  background: #1a1a1a;
  border: 1px solid #333;
  color: white;
  padding: 8px;
  position: absolute;
  top: 50%;
  ${({ $position }) => ($position === "left" ? "left: -2%;" : "right: -2%;")}
  transform: translateY(-50%);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;
  cursor: pointer;
  transition: background 0.2s;

  &:hover {
    background: #333;
  }

`;
