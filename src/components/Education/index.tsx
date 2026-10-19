import { GraduationCap, ExternalLink } from "lucide-react";
import styled from "styled-components";

const qualifications = [
  {
    title: "Information Security",
    level: "Postgraduate studies",
    status: "In progress",
    description: "Ongoing studies in cybersecurity, secure development, cloud security, and data protection, with a focus on building safer applications.",
    link: "https://drive.google.com/file/d/1voLSBM70it0egcThRyeLAmBCGKP9KJvX/view?usp=sharing",
    linkLabel: "View study document",
  },
  {
    title: "Cloud Computing",
    level: "Postgraduate qualification",
    status: "Completed",
    description: "Focused on cloud architecture, scalability, and cloud-native concepts to support the design of reliable applications.",
    link: "https://drive.google.com/file/d/1BntFKgMxAChUnDfAV2yxRzEn4pWULIe1/view?usp=sharing",
    linkLabel: "View qualification document",
  },
  {
    title: "Information Systems",
    level: "Bachelor’s degree",
    status: "Completed",
    description: "A foundation in software development and enterprise systems, connecting technology with business needs.",
    link: "https://drive.google.com/file/d/1dNEKl2wCaTGVXRE-NpR_qyLavGiBNr_1/view?usp=sharing",
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
position: relative; padding: var(--section-space) var(--page-gutter); background: var(--background); border-top: 1px solid var(--border); color: var(--text); min-width: 0;h2 { display:flex; align-items:center; gap:12px; margin-bottom:16px; font-size:clamp(30px,4vw,40px); letter-spacing:-0.035em; } h2 svg { color:var(--primary-light); width:24px; } .intro { color:var(--muted); margin-bottom:40px; }
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
  padding:28px;
  border:1px solid var(--border);
  border-radius: 12px;
  background:var(--surface);
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