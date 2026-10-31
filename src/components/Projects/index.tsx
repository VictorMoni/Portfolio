import { FolderKanban } from "lucide-react";
import { useLanguage } from '../../i18n';
import styled, { keyframes } from "styled-components";
import MainProject from "../MainProject";
import { ProjectsCarousel } from "../ProjectsCarousel";

const Projects = () => {
    const { t } = useLanguage();

  return (
    <Section id="projects">
      <Content>
        <MainProject />
        <OtherProjectsSection>
          <Header>
            <Title className="section-heading"><FolderKanban size={24} aria-hidden="true" />{t("Side Projects")}</Title>
            <Subtitle>{t("Java and TypeScript projects that complement my enterprise .NET experience")}</Subtitle>
          </Header>
          <ProjectsCarousel />
        </OtherProjectsSection>
      </Content>
    </Section>
  );
};

export default Projects;

const fadeIn = keyframes`
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
`;

const Section = styled.section`
  display: flex;
  flex-direction: column;
  color: var(--text);
  position: relative;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  margin: 0 auto;
`;

const OtherProjectsSection = styled.div`
position: relative; padding: var(--section-space) var(--page-gutter); background: var(--background); border-top: 1px solid var(--border); color: var(--text); min-width: 0;
`;

const Header = styled.div`
    margin-bottom: 40px;
    animation: ${fadeIn} 0.8s ease-out;
`;

const Title = styled.h2`
    font-size: 40px;
    font-weight: 700;
    margin-bottom: 10px;
    background: var(--text);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
`;

const Subtitle = styled.p`
    font-size: 18px;
    color: var(--muted);
    margin: 0;
`;
