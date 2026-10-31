import { useRef, type KeyboardEvent } from "react";
import { Award, ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";
import styled from "styled-components";
import { courses } from "../../data/courses";
import { useLanguage } from "../../i18n";

export default function Courses() {
  const { t } = useLanguage();
  const carouselRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: number) => {
    const area = carouselRef.current;
    if (!area) return;
    const card = area.querySelector("article");
    const distance = card ? card.getBoundingClientRect().width + 20 : 350;
    area.scrollBy({
      left: direction * distance,
      behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth",
    });
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.target !== event.currentTarget) return;
    if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
      event.preventDefault();
      scroll(event.key === "ArrowLeft" ? -1 : 1);
    }
  };

  return (
    <Section id="courses" aria-labelledby="courses-title">
      <Header>
        <div>
          <h2 id="courses-title"><Award size={28} aria-hidden="true" />{t("Extracurricular Courses")}</h2>
          <p>{t("Continued learning in frontend development, JavaScript, and automation.")}</p>
        </div>
        <Controls>
          <button type="button" aria-label={t("Previous courses")} onClick={() => scroll(-1)}>
            <ChevronLeft size={20} aria-hidden="true" />
          </button>
          <button type="button" aria-label={t("Next courses")} onClick={() => scroll(1)}>
            <ChevronRight size={20} aria-hidden="true" />
          </button>
        </Controls>
      </Header>
      <ScrollArea ref={carouselRef} role="region" aria-label={t("Courses carousel")} tabIndex={0} onKeyDown={handleKeyDown}>
        {courses.map(course => (
          <Card key={course.title}>
            <span className="status">{t("Completed")}</span>
            <h3>{t(course.title)}</h3>
            <p className="provider">{course.provider}</p>
            <p className="description">{t(course.description)}</p>
            <a href={course.link} target="_blank" rel="noopener noreferrer"
              aria-label={`${t("View certificate")}: ${t(course.title)}`}>
              {t("View certificate")}<ExternalLink size={15} aria-hidden="true" />
            </a>
          </Card>
        ))}
      </ScrollArea>
    </Section>
  );
}

const Section = styled.section`
  position: relative;
  min-width: 0;
  padding: var(--section-space) var(--page-gutter);
  border-top: 1px solid var(--border);
  background: var(--background);
  color: var(--text);
`;

const Header = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 24px;
  margin-bottom: 32px;
  h2 {
    display: flex;
    align-items: center;
    gap: 12px;
    margin-bottom: 16px;
    font-size: clamp(30px, 4vw, 40px);
    letter-spacing: -0.035em;
    line-height: 1.2;
  }
  h2 svg { color: var(--primary-light); flex-shrink: 0; width: 24px; }
  p { margin: 0; color: var(--muted); line-height: 1.6; }
  @media (max-width: 600px) { flex-direction: column; gap: 20px; }
`;

const Controls = styled.div`
  display: flex;
  flex-shrink: 0;
  gap: 8px;
  button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 44px;
    height: 44px;
    padding: 8px;
    border: 1px solid var(--border);
    border-radius: 50%;
    background: var(--surface);
    color: var(--text);
    cursor: pointer;
    transition: var(--control-transition);
    &:hover { background: var(--hover-surface); }
    &:focus-visible { outline: 2px solid var(--primary-light); outline-offset: 4px; }
  }
`;

const ScrollArea = styled.div`
  display: flex;
  gap: 20px;
  width: 100%;
  min-width: 0;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  padding: 4px 4px 20px;
  scrollbar-width: thin;
  scrollbar-color: var(--border) transparent;
  &:focus-visible { outline: 2px solid var(--primary-light); outline-offset: 4px; }
`;

const Card = styled.article`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  flex: 0 0 calc((100% - 40px) / 3);
  min-width: 0;
  padding: 28px;
  scroll-snap-align: start;
  border: 1px solid var(--border);
  border-radius: 12px;
  background: var(--surface);
  h3 { margin: 18px 0 6px; font-size: 21px; line-height: 1.3; overflow-wrap: anywhere; }
  .status {
    padding: 5px 10px;
    border-radius: 6px;
    color: var(--success-text);
    background: var(--success-background);
    font-size: 12px;
    font-weight: 600;
  }
  .provider { margin: 0; color: var(--muted); font-size: 14px; }
  .description { margin: 18px 0 24px; color: var(--muted); line-height: 1.6; }
  a {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    margin-top: auto;
    color: var(--primary-light);
    font-size: 14px;
    text-underline-offset: 4px;
    &:focus-visible { outline: 2px solid var(--primary-light); outline-offset: 4px; }
  }
  @media (max-width: 1000px) { flex-basis: calc((100% - 20px) / 2); }
  @media (max-width: 600px) { flex-basis: 100%; padding: 24px; }
`;
