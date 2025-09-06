import styled from "styled-components";
import { Code2, SquareDashedMousePointer } from "lucide-react";
import Star from '../../assets/stars.png'
import UnfilledStar from '../../assets/unfilledstars.png'
import ProjectImage1 from "../../assets/shopeasy1.png";
import ProjectImage2 from "../../assets/shopeasy2.png";
import ProjectImage3 from "../../assets/shopeasy3.png";
import ProjectImage4 from "../../assets/shopeasy4.png";
import cover from "../../assets/desktop.png";
import MediaGallery from "../MediaGallery";

const content = {
  id: "1",
  title: "ShopEasy",
  coverImage: cover,
  description: "ShopEasy is an e-commerce boilerplate with Angular frontend, Spring Boot backend, MySQL database, Kafka events, ELK stack integration, and deployment using Docker Compose or Kubernetes, serving as a modern and scalable foundation for online stores.",
  note: "This project is a portfolio and learning base, currently with a simplified checkout and some mock data. Future improvements include payment gateway, persistent cart, and CI/CD pipeline. It can be adapted to other databases or cloud providers.",
  startDate: "2025-04",
  finishDate: "Present",
  repoLink: "https://github.com/victormoni/ShopEasy",
  demoLink: null,
  rating: 5,

  categories: [
    { categoryId: "1", category: { name: "Startup" } },
    { categoryId: "2", category: { name: "Platform" } },
  ],
  createdAt: "2025-06-01",
  updatedAt: "2025-08-22",
};

const Section = styled.section`
  position: relative;
  min-height: 100vh;
  padding: 60px 150px;
  width: 100%;
  color: white;
  padding-top: 150px;
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
    padding: 40px 20px;
        &::before{
      z-index: 0;
    }
 }
`;

const BackgroundBlur = styled.div<{ bg?: string }>`
  position: absolute;
  inset: 0;
  background-image: ${({ bg }) => (bg ? `url(${bg})` : "none")};
  background-size: cover;
  background-position: top;
  opacity: 0.395;
  filter: blur(8px);
  transform: scale(1.05);
`;

const Container = styled.div`
  position: relative;
  z-index: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  gap: 2rem;

  @media (min-width: 1024px) {
    flex-direction: row;
    gap: 3rem;
  }
`;

const Content = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  width: 100%;

  @media (min-width: 1024px) {
    width: 50%;
  }
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 1rem;
  gap: 0.25rem;

  h1 {
    font-size: 2rem;
    font-weight: bold;
    color: white;
    text-shadow: 0 2px 6px rgba(0, 0, 0, 0.8);

    @media (min-width: 1024px) {
      font-size: 3rem;
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
  font-size: 1.3rem;
  max-width: 42rem;
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
    width: fit-content;

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

const Stars = styled.div`
  font-size: 1rem;
  color: #ffcc00;
  margin-bottom: 8px;
`;

const StarImg = styled.img`
  width: 25px;
  height: 25px;
  margin-right: 4px;
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
      <BackgroundBlur bg={content.coverImage || ""} />
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

          <Stars>
            {Array.from({ length: 5 }, (_, i) => (
              <StarImg
                key={i}
                src={i < content.rating ? Star : UnfilledStar}
                alt={i < content.rating ? "Filled star" : "Unfilled star"}
              />
            ))}
          </Stars>

          <ActionMethods>
            {content.demoLink ? (
              <a href={content.demoLink} className="links" target="BLANK" rel="noopener noreferrer">
                <SquareDashedMousePointer size={18} />
                Demonstration
              </a>
            ) : (
              <DisabledButton className="links disabled">
                <SquareDashedMousePointer size={18} />
                No Demonstration
              </DisabledButton>
            )}

            <a href={content.repoLink} className="links secondary" target="BLANK" rel="noopener noreferrer">
              <Code2 size={18} />
              Repository
            </a>

          </ActionMethods>

          <Footer>
            <span>Recent project created +2 months ago</span>
          </Footer>
        </Content>
        <Content>
          <MediaGallery
            images={[ProjectImage1, ProjectImage2, ProjectImage3, ProjectImage4]}
          />
        </Content>
      </Container>
    </Section>
  );
}
