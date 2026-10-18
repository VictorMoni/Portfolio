import { Code2, SquareDashedMousePointer } from "lucide-react";
import styled from "styled-components";
import cover from "../../assets/shopeasy-background-black.webp";
import ProjectImage1 from "../../assets/shopeasy1.webp";
import ProjectImage2 from "../../assets/shopeasy2.webp";
import ProjectImage3 from "../../assets/shopeasy3.webp";
import ProjectImage4 from "../../assets/shopeasy4.webp";
import MediaGallery from "../MediaGallery";

const content = {
  id: "1",
  title: "ShopEasy",
  coverImage: cover,
  description: "A full-stack e-commerce foundation connecting an Angular storefront to a Spring Boot REST API and MySQL. Combines JWT authentication, product and order management, and Kafka order events, with ELK logging and containerized deployment through Docker Compose or Kubernetes.",
  note: "This project is a portfolio and learning base, currently with a simplified checkout and some mock data. Future improvements include payment gateway, persistent cart, and CI/CD pipeline. It can be adapted to other databases or cloud providers.",
  startDate: "2025-04",
  finishDate: "Present",
  repoLink: "https://github.com/victormoni/ShopEasy",
  demoLink: null,
  technologies: ["Angular", "Spring Boot", "MySQL", "Kafka", "Docker", "Kubernetes"],

  categories: [
    { categoryId: "1", category: { name: "Startup" } },
    { categoryId: "2", category: { name: "Platform" } },
  ],
  createdAt: "2025-06-01",
  updatedAt: "2025-08-22",
};

const Section = styled.section`
  position: relative;
  padding: 110px 150px 80px;
  width: 100%;
  color: white;
  overflow: hidden;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.7);
  background: linear-gradient(to bottom right, #0f0f0f, black);

    &::before {
    content: "";
    position: absolute;
    top: -1px;
    left: 0;
    width: 100%;
    height: 150px;
    background: linear-gradient(to top, rgba(0, 0, 0, 0) 0%, black 100%);
    z-index: 2; /* Camada de transição */
    pointer-events: none;
  }

  @media (max-width: 1024px) {
    padding: 110px 20px 80px;
        &::before{
      z-index: 3;
    }
 }
`;

const ProjectBackground = styled.div<{ $bg?: string }>`
  position: absolute;
  inset: 0;
  background-image: ${({ $bg }) => ($bg ? `linear-gradient(90deg, rgba(0,0,0,0.78), rgba(0,0,0,0.3)), url(${$bg})` : "none")};
  background-size: cover;
  background-position: center;
  opacity: 1;
  filter: blur(3px);
  transform: scale(1.01);
`;

const Container = styled.div`
  padding: 32px;
  background: #080808;
  border: 1px solid #292d33;
  border-radius: 16px;
  box-shadow: 0 16px 40px rgba(0, 0, 0, 0.4);
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

  h1 {
    font-size: 40px;
    font-weight: bold;
    color: white;
    text-shadow: 0 2px 6px rgba(0, 0, 0, 0.8);

    @media (min-width: 1024px) {
      font-size: 40px;
    }
  }

  a {
    color: #d1d5db;
    transition: color 0.2s;

    &:hover {
      color: #3b82f6;
    }
  }
`;

const Status = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 1rem;
  background: #0662a3ff;
  width: fit-content;
  padding: 0.5rem 1rem;
  border-radius: 0.375rem;

  span {
    color: white;
    font-weight: 500;
  }
`;

const Description = styled.p`
  color: #d1d5db;
  margin-bottom: 1.5rem;
  line-height: 1.6;
  font-size: 18px;
  max-width: 42rem;
`;

const ProjectScope = styled.p`
  margin-top: 24px;
  color: #b8c1cc;
  font-size: 14px;
  line-height: 1.6;
  strong { display: block; color: #fff; margin-bottom: 6px; }
`;

const Footer = styled.div`
  font-size: 0.75rem;
  color: #6b7280;
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
    transition: background 0.2s;
    &:hover {
      background: var(--primary-light);
        }
    }

    .links.disabled,
    .links.disabled:hover {
      background: #2e2e2e;
      color: #999;
      border: 2px solid #2e2e2e;
      cursor: not-allowed;
    }

    .links.secondary {
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
    border: 1px solid #23536b;
    border-radius: 6px;
    background: #10212b;
    color: #bce6fa;
    font-size: 0.85rem;
  }
`;

const DisabledButton = styled.span`
  display: inline-flex;
  align-items: center;
  padding: 8px 12px;
  background: #2e2e2e;
  color: #999;
  gap: 10px;
  border-radius: 0.375rem;
  font-weight: 500;
  font-size: 14px;
  opacity: 0.7;
  cursor: not-allowed;
  text-decoration: none;
`;



export default function MainProject() {
  return (
    <Section>
      <ProjectBackground $bg={content.coverImage || ""} />
      <Container>
        <Content>
          {content.finishDate && (
            <Status>
              <span>In Development</span>
            </Status>
          )}
          <Header>
            <h1>{content.title}</h1>
          </Header>

          {content.description && <Description>{content.description}</Description>}

<Technologies aria-label="Technologies">{content.technologies.map(technology => <span key={technology}>{technology}</span>)}</Technologies>

        </Content>
        <Content className="project-gallery">
          <MediaGallery images={[ProjectImage1, ProjectImage2, ProjectImage3, ProjectImage4]} />
        </Content>
        <Content className="project-details">
          <ActionMethods>
            {content.demoLink ? (
              <a href={content.demoLink} className="links" target="_blank" rel="noopener noreferrer">
                <SquareDashedMousePointer size={18} />
                Live demo
              </a>
            ) : (
              <DisabledButton className="links disabled" aria-disabled="true">
                <SquareDashedMousePointer size={18} />
                Demo unavailable
              </DisabledButton>
            )}

            <a href={content.repoLink} className="links secondary" target="_blank" rel="noopener noreferrer">
              <Code2 size={18} />
              View repository
            </a>

          </ActionMethods>

          <ProjectScope><strong>Architecture &amp; scope</strong>JWT authentication and Kafka order events connect the storefront to the backend. Docker Compose and Kubernetes support deployment. This learning project uses a simplified checkout and some mock data; payment integration remains planned.</ProjectScope>
          <Footer>
            <span>Portfolio project · In development</span>
          </Footer>
        </Content>

      </Container>
    </Section>
  );
}
