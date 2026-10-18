import styled, { keyframes } from "styled-components";
import sideProjectsBackground from "../../assets/side-projects-background.webp";
import MainProject from "../MainProject";
import { ProjectsCarousel } from "../ProjectsCarousel";

const Projects = () => {

  return (
    <Section id="projects">
      <Content>
        <MainProject />
        <OtherProjectsSection>
          <Header>
            <Title>Side Projects</Title>
            <Subtitle>Java and TypeScript projects that complement my enterprise .NET experience</Subtitle>
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
  color: white;
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
  position: relative;
  isolation: isolate;
  overflow: hidden;
  padding: 60px 150px;
  background: #07090c;

  &::before {
    content: '';
    position: absolute;
    inset: -8px;
    z-index: -1;
    pointer-events: none;
    background-image:
      linear-gradient(90deg, rgba(0, 0, 0, 0.65), rgba(0, 0, 0, 0.35)),
      url(${sideProjectsBackground});
    background-size: cover;
    background-position: center;
    filter: blur(2px);
  }

  @media (max-width: 1024px) {
    padding: 40px 20px;
  }
`;

const Header = styled.div`
    margin-bottom: 40px;
    animation: ${fadeIn} 0.8s ease-out;
`;

const Title = styled.h2`
    font-size: 40px;
    font-weight: 700;
    margin-bottom: 10px;
    background: var(--primary-light);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
`;

const Subtitle = styled.p`
    font-size: 18px;
    color: #9ca3af;
    margin: 0;
`;
