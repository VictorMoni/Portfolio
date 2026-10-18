import { GraduationCap, ExternalLink } from "lucide-react";
import styled from "styled-components";
import educationBackground from "../../assets/education-background.webp";

const qualifications = [
  {
    title: "Information Security",
    level: "Postgraduate studies",
    status: "In progress",
    description: "Ongoing studies in cybersecurity, secure development, cloud security, and data protection, with a focus on building safer applications.",
    link: "https://drive.google.com/file/d/1voLSBM70it0egcThRyeLAmBCGKP9KJvX",
    linkLabel: "View study document",
  },
  {
    title: "Cloud Computing",
    level: "Postgraduate qualification",
    status: "Completed",
    description: "Focused on cloud architecture, scalability, and cloud-native concepts to support the design of reliable applications.",
    link: "https://drive.google.com/file/d/1BntFKgMxAChUnDfAV2yxRzEn4pWULIe1",
    linkLabel: "View qualification document",
  },
  {
    title: "Information Systems",
    level: "Bachelor’s degree",
    status: "Completed",
    description: "A foundation in software development and enterprise systems, connecting technology with business needs.",
    link: "https://drive.google.com/file/d/1dNEKl2wCaTGVXRE-NpR_qyLavGiBNr_1",
    linkLabel: "View degree document",
  },
];

export default function Education() {
  return (
    <Section id="education" aria-labelledby="education-title">
      <h2 id="education-title"><GraduationCap size={28} aria-hidden="true" /> Education</h2>
      <p className="intro">Academic foundations and continued learning in cloud and security.</p>
      <Grid>
        {qualifications.map(qualification => (
          <Card key={qualification.title}>
            <span className="status" data-progress={qualification.status === "In progress"}>
              {qualification.status}
            </span>
            <h3>{qualification.title}</h3>
            <p className="level">{qualification.level}</p>
            <p className="description">{qualification.description}</p>
            {qualification.link && (
              <a href={qualification.link} target="_blank" rel="noopener noreferrer"
                aria-label={`${qualification.linkLabel}: ${qualification.title}`}>
                {qualification.linkLabel} <ExternalLink size={15} aria-hidden="true" />
              </a>
            )}
          </Card>
        ))}
      </Grid>
    </Section>
  );
}

const Section = styled.section`
  position: relative;
  isolation: isolate;
  overflow: hidden;
  padding: 80px 140px;
  min-height: 650px;
  color: white;
  background-color: #031321;
  &::before {
    content: '';
    position: absolute;
    inset: -8px;
    z-index: -1;
    pointer-events: none;
    background-image:
      linear-gradient(90deg, rgba(1, 14, 27, 0.74), rgba(1, 14, 27, 0.25)),
      url(${educationBackground});
    background-size: cover;
    background-position: center;
    filter: blur(2px);
  }
  border-top: 1px solid #23536b;
  @media (max-width: 1024px) { padding: 60px 20px; }
  h2 {
    display: flex;
    align-items: center;
    gap: 12px;
    margin: 0 0 12px;
    font-size: clamp(30px, 4vw, 43px);
    color: var(--primary-light);
  }
  .intro { margin: 0 0 28px; color: #b5c3cf; line-height: 1.6; }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 20px;
  @media (max-width: 900px) { grid-template-columns: 1fr; }
`;

const Card = styled.article`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 24px;
  border: 1px solid #23536b;
  border-radius: 12px;
  background: rgba(2, 23, 38, 0.92);
  h3 { margin: 18px 0 6px; font-size: 21px; line-height: 1.3; }
  .status {
    padding: 5px 10px;
    border-radius: 6px;
    color: #b2e4cf;
    background: #10362e;
    font-size: 12px;
    font-weight: 600;
    &[data-progress="true"] { color: #bce6fa; background: #123c53; }
  }
  .level { margin: 0; color: #b5c3cf; font-size: 14px; }
  .description { margin: 18px 0 24px; color: #d1d5db; line-height: 1.6; }
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
`;