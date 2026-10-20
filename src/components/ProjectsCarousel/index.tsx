import { sideProjects } from "../../data/projects";
import { useLanguage } from "../../i18n";
import { ChevronLeft, ChevronRight } from "lucide-react";
import React, { useRef } from "react";
import styled, { keyframes } from "styled-components";

import { Project } from "../Project";

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
      <ArrowButton
        type="button"
        aria-label={t("Previous projects")}
        $position="left"
        onClick={() => handleScroll("left")}
      >
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
        {sideProjects.map((project) => (
          <Project key={project.title} {...project} />
        ))}
      </ScrollArea>

      <ArrowButton
        type="button"
        aria-label={t("Next projects")}
        $position="right"
        onClick={() => handleScroll("right")}
      >
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
  &:focus-visible {
    outline: 2px solid var(--primary-light);
    outline-offset: -2px;
  }
  @media (max-width: 450px) {
    & > article {
      width: calc(100% - 24px);
      max-width: none;
      min-width: 0;
    }
  }
`;

const ArrowButton = styled.button<{ $position: "left" | "right" }>`
  background: var(--surface);
  border: 1px solid var(--border);
  color: var(--text);
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
  transition: var(--control-transition);

  &:hover {
    background: var(--hover-surface);
  }
`;
