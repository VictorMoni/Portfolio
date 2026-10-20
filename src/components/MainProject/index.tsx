import { useIsLightTheme } from "../../hooks/useIsLightTheme";
import { useLanguage } from '../../i18n';
import { SquareDashedMousePointer } from "lucide-react";
import styled from "styled-components";
import ProjectImage1 from "../../assets/searchprice-home.jpg";
import ProjectImage2 from "../../assets/searchprice-testimonials.jpg";
import ProjectImage3 from "../../assets/searchprice-about.jpg";
import ProjectImage4 from "../../assets/searchprice-advantages.jpg";
import LightProjectImage1 from "../../assets/searchprice-home-light.jpg";
import LightProjectImage2 from "../../assets/searchprice-testimonials-light.jpg";
import LightProjectImage3 from "../../assets/searchprice-about-light.jpg";
import LightProjectImage4 from "../../assets/searchprice-advantages-light.jpg";
import MediaGallery from "../MediaGallery";

const darkImages = [ProjectImage1, ProjectImage2, ProjectImage3, ProjectImage4];
const lightImages = [LightProjectImage1, LightProjectImage2, LightProjectImage3, LightProjectImage4];


const content = {
  id: "1",
  title: "SearchPrice",

  description: "A web platform for comparing product prices and profitability across marketplaces, helping sellers find opportunities and reduce research time.",
  startDate: "2025-04",
  finishDate: "Present",
  demoLink: "https://searchprice.vercel.app",
  technologies: ["Next.js", "React", "Tailwind CSS"],

  categories: [
    { categoryId: "1", category: { name: "Startup" } },
    { categoryId: "2", category: { name: "Platform" } },
  ],
  createdAt: "2025-06-01",
  updatedAt: "2025-08-22",
};

const Section = styled.section`
position: relative; min-height: 100vh; min-height: 100svh; padding: max(104px, var(--section-space)) var(--page-gutter) var(--section-space); background: var(--background); border-top: 1px solid var(--border); color: var(--text); min-width: 0;
`;



const Container = styled.div`
  padding: 32px;
  background:var(--surface);
  border:1px solid var(--border);
  border-radius: var(--radius);

  @media (max-width: 600px) { padding: 20px; }
  position: relative;
  z-index: 3;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 12px;
  @media (max-width: 1023px) {
    .project-details > :first-child { margin-top: 0; }
  }

  @media (min-width: 1024px) {
    display: grid;
    grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
    column-gap: 3rem;
    row-gap: 0;
    align-items: start;
    .project-gallery { grid-column: 2; grid-row: 1 / span 2; align-self: center; }
    .project-details { grid-column: 1; grid-row: 2; }
  }
`;

const Content = styled.div`
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  width: 100%;

  @media (min-width: 1024px) {
    width: 100%;
  }
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 1rem;
  gap: 0.25rem;

  h2 {
    font-size: 40px;
    font-weight: bold;
    color: var(--text);
    letter-spacing:-0.035em;

    @media (min-width: 1024px) {
      font-size: 40px;
    }
  }

  a {
    color: var(--muted);
    transition: var(--control-transition);

    &:hover {
      color: #3b82f6;
    }
  }
`;

const Status = styled.div`
display:flex; width:fit-content; margin-bottom:20px; padding:6px 10px; border:1px solid var(--active-border); background:var(--status-background); border-radius:var(--radius-small); color:var(--status-text); font-size:12px;
`;

const Description = styled.p`
  color: var(--muted);
  margin-bottom: 1.5rem;
  line-height: 1.6;
  font-size: 18px;
  max-width: 42rem;
`;

const ProjectScope = styled.p`
  margin-top: 24px;
  color: var(--muted);
  font-size: 14px;
  line-height: 1.6;
  strong { display: block; color: var(--text); margin-bottom: 6px; }
`;

const Footer = styled.div`
  font-size: 0.75rem;
  color: var(--muted);
  display: flex;
  flex-direction: column;
  margin-top: 1.5rem;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

const ActionMethods = styled.div`
    display: flex;
    gap: 0.5rem;
    margin-top: 1.5rem;
    width: 100%;
    flex-wrap: wrap;

    .links {
    display: inline-flex;
    align-items: center;
    padding: 12px 24px;
    background: var(--primary);
    color: white;
    gap: 10px;
    border-radius: 0.375rem;
    text-decoration: none;
    font-weight: 500;
    transition: var(--control-transition);
    &:hover {
      background: #247eb5;
        }
    }


    .links.secondary {
    color: var(--primary-light);
      background: transparent;
      border: 2px solid var(--primary);

      &:hover {
        background: var(--primary);
        color: white;
        }
    }

    @media(max-width: 450px){
      flex-direction: column;
    }
`

const Technologies = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 20px;
  @media (max-width: 1023px) { margin-bottom: 0; }
  span {
    padding: 5px 10px;
    border: 1px solid var(--border);
    border-radius: 6px;
    background: var(--background);
    color: var(--muted);
    font-size: 0.85rem;
  }
`;

const DisabledButton = styled.span`
&& { display:inline-flex; align-items:center; gap:6px; padding:8px 0; background:transparent; border:0; color:var(--muted); font-size:12px; font-weight:400; cursor:default; }
`;



export default function MainProject() {
  const isLight = useIsLightTheme();
  const { t } = useLanguage();
  return (
    <Section>
      <Container>
        <Content>
          {content.finishDate && (
            <Status>
              <span>{t("Live website")}</span>
            </Status>
          )}
          <Header>
            <h2>{content.title}</h2>
          </Header>

          {content.description && <Description>{t(content.description)}</Description>}

<Technologies aria-label={t("Technologies")}>{content.technologies.map(technology => <span key={technology}>{technology}</span>)}</Technologies>

        </Content>
        <Content className="project-gallery">
          <MediaGallery images={isLight ? lightImages : darkImages} />
        </Content>
        <Content className="project-details">
          <ActionMethods>
            {content.demoLink ? (
              <a href={content.demoLink} className="links" target="_blank" rel="noopener noreferrer">
                <SquareDashedMousePointer size={18} />
                {t("Live demo")}</a>
            ) : (
              <DisabledButton className="links disabled" aria-disabled="true">
                <SquareDashedMousePointer size={18} />
                {t("Demo unavailable")}</DisabledButton>
            )}


          </ActionMethods>

          <ProjectScope><strong>{t("Architecture & scope")}</strong>{t("Built with Next.js and React, the website presents marketplace comparisons through a responsive interface with light and dark themes.")}</ProjectScope>
          <Footer>
            <span>{t("Website available online")}</span>
          </Footer>
        </Content>

      </Container>
    </Section>
  );
}
