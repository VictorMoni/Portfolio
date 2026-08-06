import { Calendar } from 'lucide-react';
import { useState } from "react";
import styled, { keyframes } from "styled-components";
import image from '../../assets/notebook.png';
const About = () => {
   const experiences = [
    {
        id: 1,
        title: "Full Stack Developer",
        company: "Sysopen",
        description:
            "Supported, maintained, and enhanced the Recupera system using VB.NET, ASP.NET WebForms, C#, and Angular. Implemented bug fixes, improvements, and new features according to client requirements.\n\n Supported solutions used by companies such as Ambev, Aegea, Jeitto, and Porto Seguro. Created and optimized queries, stored procedures, and scripts in SQL Server and Oracle, performed testing of REST APIs and SOAP services using SoapUI, and used Azure DevOps/TFS for version control and work item management.",
        date: "10/2025 - 07/2026",
        highlight: "Full Stack Development",
        tags: [
            "VB.NET",
            "ASP.NET WebForms",
            "C#",
            "Angular",
            "SQL Server",
            "Oracle",
            "REST APIs",
            "SOAP",
            "Azure DevOps"
        ]
    },
    {
        id: 2,
        title: "Frontend Developer",
        company: "Search Price",
        description:
            "Developed a responsive web application focused on user experience. Implemented light and dark modes, created custom hooks for state management, integrated APIs developed in Node.js, and configured continuous deployment on Vercel. Applied best practices in accessibility, performance, and component-based architecture.",
        date: "02/2024 - 07/2025",
        highlight: "Frontend Development",
        tags: [
            "JavaScript",
            "TypeScript",
            "Node.js",
            "HTML5",
            "CSS3",
            "Next.js"
        ]
    },
    {
        id: 3,
        title: "Marketplace Operations",
        company: "Entrepreneur",
        description:
            "Managed sales operations across Mercado Livre, Shopee, Amazon, and Magalu marketplaces. Created product listings, issued invoices, managed pricing, and defined commercial strategies. Automated processes and conducted strategic planning, achieving average monthly revenue of BRL 130,000.",
        date: "06/2021 - 01/2024",
        highlight: "Entrepreneurship",
        tags: [
            "Marketplaces",
            "Sales",
            "Process Automation",
            "Pricing",
            "Invoices",
            "Logistics",
            "Financial Management",
            "Strategic Planning"
        ]
    },
    {
        id: 4,
        title: "Junior Java Developer",
        company: "Foursys",
        description:
            "Developed REST APIs using Java and Spring Boot for microservices at Next digital bank. Performed API testing and documentation in the development environment and participated in Scrum ceremonies and technical discussions related to backend development.",
        date: "02/2021 - 05/2021",
        highlight: "Backend Development",
        tags: [
            "Java",
            "Spring Boot",
            "REST APIs",
            "Microservices",
            "Oracle",
            "API Testing",
            "Scrum"
        ]
    },
    {
        id: 5,
        title: "Systems Technician",
        company: "BRQ",
        description:
            "Maintained and supported legacy systems for Itaú Unibanco. Performed tests to validate features and identify defects and participated in technical training and professional development activities.",
        date: "08/2019 - 02/2020",
        highlight: "Systems Support",
        tags: [
            "Legacy Systems",
            "Systems Support",
            "Functional Testing",
            "Defect Analysis",
            "Financial Systems",
            "Itaú Unibanco"
        ]
    },
    {
        id: 6,
        title: "Information Technology Intern",
        company: "Itaú Unibanco",
        description:
            "Supported the change management lifecycle for the Mobile Engineering team. Analyzed and reported KPIs, application crashes, and operational reports using tools such as GitLab, Jenkins, Splunk, AppDynamics, and Crashlytics.",
        date: "06/2018 - 12/2018",
        highlight: "Mobile Engineering",
        tags: [
            "GitLab",
            "Jenkins",
            "Splunk",
            "AppDynamics",
            "Crashlytics",
            "KPIs",
            "Application Monitoring",
            "Change Management"
        ]
    }
];

    const overview = {
    title: "Career Overview",
    company: "",
    description:
        "Full Stack Developer with experience in developing, maintaining, and supporting web applications, REST APIs, SOAP services, and microservices. Skilled in .NET, VB.NET, C#, Java with Spring Boot, Angular, SQL Server, and Oracle.",
    date: "3 Years in Technology",
    highlight: "Overview",
    tags: [
        "C#",
        "VB.NET",
        "ASP.NET",
        "Spring Boot",
        "Java",
        "Angular",
        "SQL Server",
        "Oracle"
    ]
};
    const [currentExperienceId, setCurrentExperienceId] =
        useState<number | null>(null);

    const currentExp =
        experiences.find(
            experience => experience.id === currentExperienceId
        ) ?? overview;

    return (
        <AboutSection id="about">
            <Header>
                <Title>Career</Title>
                <Subtitle>Full Stack Developer</Subtitle>
            </Header>

            <Content>
                <MainInfo>
                    <ExperienceHeader>
                        <div>
                          <ExperienceTitle>{currentExp.title}</ExperienceTitle>
                          {currentExp.company && (
                              <ExperienceCompany>{currentExp.company}</ExperienceCompany>
                          )}
                            <ExperienceDate>
                                <Calendar size={20} />
                                {currentExp.date}
                            </ExperienceDate>
                        </div>
                    </ExperienceHeader>

                    <Description>
                        {currentExp.description}
                    </Description>

                    <TagsContainer>
                        {currentExp.tags.map((tag, index) => (
                            <Tag key={`${tag}-${index}`}>
                                {tag}
                            </Tag>
                        ))}
                    </TagsContainer>
                </MainInfo>

                 <ExperienceContainer>
                  <SectionTitle>Experience</SectionTitle>

                  <ExperienceBox
                      onClick={() => setCurrentExperienceId(null)}
                      isActive={currentExperienceId === null}
                      isOverview
                  >
                      <BoxHeader>
                          <BoxTitle>Overview</BoxTitle>
                      </BoxHeader>

                      <BoxDescription>
                          Summary of my career as a developer,
                          highlighting my key skills and most relevant experiences.
                      </BoxDescription>

                      <BoxDate>3 Years in Technology</BoxDate>
                  </ExperienceBox>

                  <ExperiencesScroll>
                      {experiences.map((experience) => (
                          <ExperienceBox
                              key={experience.id}
                              onClick={() =>
                                  setCurrentExperienceId(experience.id)
                              }
                              isActive={
                                  currentExperienceId === experience.id
                              }
                          >
                              <BoxHeader>
                                  <BoxText>
                                      <BoxTitle>{experience.title}</BoxTitle>
                                      <BoxCompany>{experience.company}</BoxCompany>
                                  </BoxText>
                              </BoxHeader>

                              <BoxDate>{experience.date}</BoxDate>
                          </ExperienceBox>
                      ))}
                  </ExperiencesScroll>
              </ExperienceContainer>

            </Content>
        </AboutSection>
    );
};

export default About;

const fadeIn = keyframes`
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
`;

const slideIn = keyframes`
    from { transform: translateX(-20px); opacity: 0; }
    to { transform: translateX(0); opacity: 1; }
`;

const ExperiencesScroll = styled.div`
    max-height: 240px;
    overflow-y: auto;
    overflow-x: hidden;
    padding-right: 8px;
    margin-bottom: 13px;

    scrollbar-width: thin;
    scrollbar-color: var(--primary) transparent;

    &::-webkit-scrollbar {
        width: 6px;
    }

    &::-webkit-scrollbar-track {
        background: transparent;
    }

    &::-webkit-scrollbar-thumb {
        background: var(--primary);
        border-radius: 10px;
    }

    &::-webkit-scrollbar-thumb:hover {
        background: var(--primary-light);
    }
`;

const ExperienceCompany = styled.p`
    margin: 6px 0 0;
    font-size: 20px;
    font-weight: 500;
    color: #f0f0f0;
`;

const BoxText = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`;

const BoxCompany = styled.p`
    margin: 4px 0 0;
    font-size: 14px;
    font-weight: 400;
    color: #9ca3af;
`;

const AboutSection = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 80px 140px;
  min-height: 100vh;
  color: white;
  overflow: hidden;
  background: linear-gradient(to right, #012846ff, #000, transparent);

  &::before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    width: 50%;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center right;
background-image:
  linear-gradient(to right, rgba(0, 0, 0, 0.9), transparent 80%),
  url(${image});
    opacity: 0.3;
    pointer-events: none;
    z-index: 1;
  }


&::after {
  content: '';
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;

  background:
    linear-gradient(to bottom, #000 1px, transparent 50px),
    linear-gradient(to top, #000 1px, transparent 50px),
    linear-gradient(to left, rgba(0, 0, 0, 0.5), transparent 0%);

  z-index: 3;
  pointer-events: none;
}

  > * {
    position: relative;
    z-index: 3;
  }

  @media (max-width: 1024px) {
    padding: 60px 20px;

    &::before,
    &::after {
      width: 100%;
        background: linear-gradient(to right, #022742ff, #000, transparent);
        z-index: 0;
    }
  }
`;

const Header = styled.div`
    margin-bottom: 60px;
    animation: ${fadeIn} 0.8s ease-out;
`;

const Title = styled.h2`
    font-size: 43px;
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

const Content = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    gap: 80px;
    max-width: 1400px;
    width: 100%;

    @media (max-width: 1024px) {
        flex-direction: column;
        gap: 40px;
    }
`;

const MainInfo = styled.div`
    flex: 1.2;
    width: 100%;
    animation: ${slideIn} 0.8s ease-out 0.2s both;

    @media (max-width: 1024px) {
        order: 2;
    }
`;

const ExperienceHeader = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
    margin-bottom: 30px;
`;

const ExperienceTitle = styled.h3`
    font-size: 30px;
    margin: 0;
    // color: var(--primary-light);
    color: white;
    font-weight: 600;
`;

const ExperienceDate = styled.span`
    display: flex;
    align-items: center;
    gap: 8px;
    color: #9ca3af;
    font-size: 16px;
    margin-top: 10px;
`;

const Description = styled.p`
    font-size: 16px;
    line-height: 1.7;
    margin-bottom: 30px;
    color: #e5e7eb;
    white-space: pre-line;
`;

const TagsContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
    margin-bottom: 40px;
`;

const Tag = styled.span`
    padding: 8px 16px;
    background: #076E9E;
    border: 1px solid #076E9E;
    border-radius: 10px;
    font-size: 14px;
    color: #ffffffff;
    font-weight: 500;
`;

const ExperienceContainer = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    min-width: 0;
    width: 100%;
    animation: ${slideIn} 0.8s ease-out 0.4s both;

    /* Desktop: alinha Experiences com o título Career */
    @media (min-width: 1025px) {
        margin-top: -137px;
    }

    /* Celular e tablet: mantém a posição atual */
    @media (max-width: 1024px) {
        order: 1;
        margin-top: 0;
    }
`;

const SectionTitle = styled.h3`
    font-size: 24px;
    margin-top: 0;
    margin-bottom: 20px;
    color: var(--primary-light);
    font-weight: 600;
`;

const ExperienceBox = styled.div<{ isActive?: boolean; isOverview?: boolean }>`
    background: ${props => props.isActive
        ? 'linear-gradient(135deg, transparent, #022742ff)'
        : 'transparent'
    };
    border-left: 1px solid ${props => props.isActive
        ? 'var(--primary)'
        : '#044574ff;'
    };
    padding: 24px;
    // border-radius: 16px;
    cursor: pointer;
    transition: all 0.5s ease;
    position: relative;
    overflow: hidden;

    ${props => props.isOverview && `
        border: 1px solid #044574ff;
    `}

    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        height: 100%;
        width: 2px;
        background: ${props => props.isActive
            ? 'linear-gradient(90deg, var(--primary), #0662a3ff)'
            : 'transparent'
        };
        transition: all 0.5s ease;
    }

    &:hover {
        // transform: translateX(-4px);
        border-color: var(--primary);

        &::before {
            background: linear-gradient(90deg, var(--primary), #0662a3ff);
        }
    }
`;

const BoxHeader = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-bottom: 15px;
`;

const BoxTitle = styled.h4`
    font-size: 18px;
    color: var(--primary-light);
    color: white;
    margin: 0;
    font-weight: 600;
`;

const BoxDescription = styled.p`
    font-size: 14px;
    color: #9ca3af;
    line-height: 1.5;
    margin-bottom: 15px;
`;

const BoxDate = styled.span`
    font-size: 12px;
    color: #c9c9c9;
    font-weight: 500;
`;
