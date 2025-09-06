import styled, { keyframes } from "styled-components";
import MainProject from "../MainProject";
import { CarouselContainer2 } from "../ProjectsCarousel";

const Projects = () => {

  return (
    <Section id="projects">
      <Content>
        <MainProject />
        <OtherProjectsSection>
          <Header>
            <Title>Side Projects</Title>
            <Subtitle>Other projects that I made</Subtitle>
          </Header>
          <CarouselContainer2 />
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
  min-height: 100vh;
  height: 100%;
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
  margin-top: 60px;
  min-height: 100vh;
  padding: 0px 150px;

    @media (max-width: 1024px) {
      padding: 40px 20px;
    }
`;

const Header = styled.div`
    margin-bottom: 60px;
    animation: ${fadeIn} 0.8s ease-out;
`;

const Title = styled.h2`
    font-size: 48px;
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
