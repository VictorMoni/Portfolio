import { Calendar, ExternalLink } from 'lucide-react';
import { useState } from "react";
import styled, { keyframes } from "styled-components";

const About = () => {
   const experiences = [
    {
        id: 1,
        title: "Full Stack .NET Developer",
        company: "Sysopen",
        document: { url: "https://drive.google.com/file/d/1rV8BvKmmJaYSEUiLQvAB1eJHN2O3vtAq/view?usp=sharing", label: "View employment document" },
        description:
            "Developed and enhanced Recupera, an enterprise platform built with C#, VB.NET, ASP.NET WebForms, and Angular. Delivered functional improvements, resolved production incidents, and maintained systems for clients including Ambev, Aegea, Jeitto, and Porto Seguro.\n\nWrote and optimized SQL queries, stored procedures, and scripts in SQL Server and Oracle. Tested REST APIs and SOAP/WCF services with SoapUI, and tracked delivery and source control through Azure DevOps/TFS.",
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
            "SOAP/WCF",
            "Azure DevOps"
        ]
    },
    {
        id: 2,
        title: "Frontend Developer",
        company: "Search Price",
        description:
            "Built and maintained a Next.js web application with a focus on responsive design, accessibility, and a smooth user experience. Created reusable components and custom hooks, implemented light and dark themes, and integrated Node.js APIs.\n\nConfigured continuous deployment on Vercel and improved code organization and performance to make the application easier to maintain and evolve.",
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
            "Ran my own e-commerce operation across Mercado Livre, Shopee, Amazon, and Magalu. Managed product listings, pricing, invoicing, and day-to-day commercial operations while automating operational processes.\n\nThis experience gave me a practical understanding of business needs and the operational problems that software can help solve.",
        date: "05/2020 - 01/2024",
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
        title: "Systems Technician",
        company: "BRQ",
        description:
            "Maintained and supported a legacy system for Itaú Unibanco, working with development, testing, and version control tools in an enterprise environment. Strengthened my technical foundation through Java training and other professional development courses.",
        date: "08/2019 - 02/2020",
        highlight: "Systems Support",
        tags: [
            "Legacy Systems",
            "Java Training",
            "Version Control",
            "System Support",
            "Itaú Unibanco"
        ]
    },
    {
        id: 5,
        title: "Information Technology Intern",
        document: { url: "https://drive.google.com/file/d/1D1WEXsTBHldgTWdhYg3Wor630T5T-jWg/view?usp=sharing", label: "View internship declaration" },
        company: "Itaú Unibanco",
        description:
            "Supported the Mobile Engineering team with change management and improvements to internal systems. Analyzed crashes, logs, and KPIs to investigate failures, identify opportunities to improve stability, and report on technical performance.\n\nWorked with GitLab, Jira, Jenkins, Splunk, AppDynamics, and Crashlytics to support delivery, while building my application development skills through internal Java training.",
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

    const [currentExperienceId, setCurrentExperienceId] =
        useState<number>(1);

    const currentExp =
        experiences.find(
            experience => experience.id === currentExperienceId
        ) ?? experiences[0];

    return (
        <AboutSection id="about">
            <Header>
                <Title>Career</Title>
                <Subtitle>Enterprise applications, reliable integrations, and a business perspective.</Subtitle>
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

                    {currentExp.document && (
                        <DocumentLink href={currentExp.document.url} target="_blank" rel="noopener noreferrer"
                            aria-label={`${currentExp.document.label}: ${currentExp.title}`}>
                            {currentExp.document.label} <ExternalLink size={15} aria-hidden="true" />
                        </DocumentLink>
                    )}

                    <TagsContainer>
                        {currentExp.tags.map((tag, index) => (
                            <Tag key={`${tag}-${index}`}>
                                {tag}
                            </Tag>
                        ))}
                    </TagsContainer>
                </MainInfo>

                 <ExperienceContainer>


                  <SectionTitle>Professional Experience</SectionTitle>
                  <ExperiencesScroll>
                      {experiences.map((experience) => (
                          <ExperienceBox
                              key={experience.id}
                              type="button"
                              aria-pressed={currentExperienceId === experience.id}
                              onClick={() =>
                                  setCurrentExperienceId(experience.id)
                              }
                              $isActive={
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
    max-height: 420px;
    @media (max-width: 768px) { max-height: 360px; }
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
        background: var(--text);
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
position: relative; padding: var(--section-space) var(--page-gutter); background: var(--background); border-top: 1px solid var(--border); color: var(--text); min-width: 0;
`;

const Header = styled.div`
    margin-bottom: 60px;
    animation: ${fadeIn} 0.8s ease-out;
`;

const Title = styled.h2`
    font-size:clamp(30px,4vw,40px); letter-spacing:-0.035em;
    font-weight: 700;
    margin-bottom: 10px;
    background: var(--text);
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
padding:6px 10px; background:var(--surface); border:1px solid var(--border); border-radius:var(--radius-small); color:var(--muted); font-size:12px;
`;

const ExperienceContainer = styled.div`
    background:var(--surface);
    padding: 24px;
    border:1px solid var(--border);
    border-radius: 12px;
    box-sizing: border-box;
    flex: 1;
    display: flex;
    flex-direction: column;
    min-width: 0;
    width: 100%;
    animation: ${slideIn} 0.8s ease-out 0.4s both;

    /* Desktop: alinha Experiences com o título Career */
    @media (min-width: 1025px) {
        margin-top: 0;
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

const ExperienceBox = styled.button<{ $isActive?: boolean }>`
    display: block;
    width: 100%;
    text-align: left;
    font: inherit;
    color: inherit;
    appearance: none;
    border: 0;
    border-radius: 0;
    border-left: 3px solid ${({ $isActive }) => $isActive ? 'var(--primary-light)' : '#29404f'};
    padding: 24px;
    background: ${({ $isActive }) => $isActive ? 'rgba(0, 146, 200, 0.12)' : 'transparent'};
    cursor: pointer;
    transition: background-color 0.2s ease, border-color 0.2s ease;

    &:hover {
        background: ${({ $isActive }) => $isActive ? 'rgba(0, 146, 200, 0.16)' : 'rgba(255, 255, 255, 0.04)'};
    }

    &:focus-visible {
        outline: 2px solid var(--primary-light);
        outline-offset: -2px;
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


const BoxDate = styled.span`
    font-size: 12px;
    color: #c9c9c9;
    font-weight: 500;
`;

const DocumentLink = styled.a`
  margin-bottom: 20px;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  min-height: 44px;
  color: var(--primary-light);
  font-size: 14px;
  text-underline-offset: 4px;
  &:hover { text-decoration: underline; }
`;
