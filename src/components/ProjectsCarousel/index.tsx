import { ChevronLeft, ChevronRight } from "lucide-react";
import React, { useRef } from "react";
import styled, { keyframes } from "styled-components";
import otherProjectImage from '../../assets/sankhya.png';
import otherProjectImage3 from '../../assets/taskyhub.png';
import otherProjectImage2 from '../../assets/todoapp.png';
import { Project } from "../Project";

export const CarouselContainer2 = () => {
  const carouselRef = useRef<HTMLDivElement>(null);
  let isDown = false;
  let startX = 0;
  let scrollLeft = 0;

  const handleScroll = (direction: "left" | "right") => {
    if (!carouselRef.current) return;
    const scrollAmount = 350;
    carouselRef.current.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!carouselRef.current) return;
    isDown = true;
    startX = e.pageX - carouselRef.current.offsetLeft;
    scrollLeft = carouselRef.current.scrollLeft;
  };

  const handleMouseLeaveOrUp = () => {
    isDown = false;
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDown || !carouselRef.current) return;
    e.preventDefault();
    const x = e.pageX - carouselRef.current.offsetLeft;
    const walk = (x - startX) * 1.5;
    carouselRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <CarouselWrapper>
      <ArrowButton position="left" onClick={() => handleScroll("left")}>
        <ChevronLeft size={20} />
      </ArrowButton>

      <ScrollArea
        ref={carouselRef}
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseLeaveOrUp}
        onMouseUp={handleMouseLeaveOrUp}
        onMouseMove={handleMouseMove}
      >

       <Project
          cover={otherProjectImage}
          category="Personal Project"
          title="Sankhya"
          description="Full-Stack app in Angular + Spring Boot with MySQL, Docker, and CI/CD. Product catalog, cart, and orders integrated with Flyway and automated tests."
          rating={5}
          lastUpdated="09/20/2025 - 09:00"
          repoLink="https://github.com/victormoni/Sankhya"
          isFavorite={true}
        />

        <Project
          cover={otherProjectImage2}
          category="Personal Project"
          title="TodoApp"
          description="This is a straightforward to-do app built with React and Vite, designed to help you manage your daily tasks efficiently. You can easily add new tasks, update existing ones, or remove them as needed, all through a clean and user-friendly interface."
          rating={4}
          lastUpdated="07/22/2025 - 01:09"
          isFavorite={false}
          repoLink="https://github.com/victormoni/TodoApp"
          liveLink="https://production-todo.vercel.app"
        />

        <Project
          cover={otherProjectImage3}
          category="Personal Project"
          title="TaskyHub"
          description="Next.js & TypeScript task manager with Google Auth, recurring tasks, dark mode, batch operations, and import/export support."
          rating={3}
          lastUpdated="06/07/2025 - 05:00"
          liveLink="https://taskyhub.vercel.app"
          repoLink="https://github.com/victormoni/TaskyHub"
          isFavorite={false}
        />


    </ScrollArea>

      <ArrowButton position="right" onClick={() => handleScroll("right")}>
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
  // align-items: center;
  position: relative;
  gap: 12px;
  animation: ${slideIn} 0.8s ease-out;
`;

const ScrollArea = styled.div`
  display: flex;
  gap: 24px;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  scroll-behavior: smooth;
  padding: 0 12px;

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
`;

const ArrowButton = styled.button<{ position: "left" | "right" }>`
  background: #1a1a1a;
  border: 1px solid #333;
  color: white;
  padding: 8px;
  position: absolute;
  top: 50%;
  ${({ position }) => (position === "left" ? "left: -2%;" : "right: -2%;")}
  transform: translateY(-50%);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 0;
  cursor: pointer;
  transition: background 0.2s;

  &:hover {
    background: #333;
  }

  // @media (max-width: 450px) {
  //   display: none;
  // }
`;
