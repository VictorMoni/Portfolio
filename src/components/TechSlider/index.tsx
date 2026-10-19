import { useState } from 'react';
import { Pause, Play } from 'lucide-react';
import styled, { keyframes } from 'styled-components';
import angular from "../../assets/angular.svg";
import azuredevops from "../../assets/azuredevops.svg";
import bootstrap from "../../assets/bootstrap.svg";
import csharp from "../../assets/csharp.svg";
import css from "../../assets/css.svg";
import dbeaver from "../../assets/dbeaver.svg";
import docker from "../../assets/docker.svg";
import dotnetcore from "../../assets/dotnetcore.svg";
import entityframeworkcore from "../../assets/entityframeworkcore.svg";
import figma from "../../assets/figma.svg";
import git from "../../assets/git.svg";
import grafana from "../../assets/grafana.svg";
import html5 from "../../assets/html5.svg";
import intellijidea from "../../assets/intellijidea.svg";
import java from "../../assets/java.svg";
import javascript from "../../assets/javascript.svg";
import jira from "../../assets/jira.svg";
import kubernetes from "../../assets/kubernetes.svg";
import linux from "../../assets/linux.svg";
import markdown from "../../assets/markdown.png";
import microsoftsqlserver from "../../assets/microsoftsqlserver.svg";
import notion from "../../assets/notion.svg";
import oracle from "../../assets/oracle.svg";
import pnpm from "../../assets/pnpm.svg";
import postgresql from "../../assets/postgresql.svg";
import postman from "../../assets/postman.svg";
import react from "../../assets/react.svg";
import rider from "../../assets/rider.svg";
import sass from "../../assets/sass.svg";
import spring from "../../assets/spring.svg";
import swagger from "../../assets/swagger.svg";
import tailwindcss from "../../assets/tailwindcss.svg";
import typescript from "../../assets/typescript.svg";
import uml from "../../assets/uml.svg";
import visualbasic from "../../assets/visualbasic.svg";
import visualstudio from "../../assets/visualstudio.svg";
import vscode from "../../assets/vscode.svg";
import windows11 from "../../assets/windows11.svg";

const groups = [
  { label: 'Languages & frameworks', items: [
    { name: 'C#', icon: csharp }, { name: '.NET', icon: dotnetcore },
    { name: 'Angular', icon: angular }, { name: 'TypeScript', icon: typescript },
    { name: 'React', icon: react }, { name: 'Entity Framework', icon: entityframeworkcore },
    { name: 'Java', icon: java }, { name: 'Spring', icon: spring },
    { name: 'Visual Basic', icon: visualbasic }, { name: 'JavaScript', icon: javascript },
    { name: 'HTML5', icon: html5 }, { name: 'CSS3', icon: css },
    { name: 'Sass', icon: sass }, { name: 'Bootstrap', icon: bootstrap },
    { name: 'Tailwind CSS', icon: tailwindcss }, { name: 'Markdown', icon: markdown },
  ] },
  { label: 'Data, infrastructure & tools', items: [
    { name: 'SQL Server', icon: microsoftsqlserver }, { name: 'Oracle', icon: oracle },
    { name: 'PostgreSQL', icon: postgresql }, { name: 'Docker', icon: docker },
    { name: 'Kubernetes', icon: kubernetes }, { name: 'Azure DevOps', icon: azuredevops },
    { name: 'Git', icon: git }, { name: 'Swagger', icon: swagger },
    { name: 'Postman', icon: postman }, { name: 'Grafana', icon: grafana },
    { name: 'Rider', icon: rider }, { name: 'Visual Studio', icon: visualstudio },
    { name: 'VS Code', icon: vscode }, { name: 'IntelliJ IDEA', icon: intellijidea },
    { name: 'DBeaver', icon: dbeaver }, { name: 'Jira', icon: jira },
    { name: 'Figma', icon: figma }, { name: 'Notion', icon: notion },
    { name: 'UML', icon: uml }, { name: 'pnpm', icon: pnpm },
    { name: 'Linux', icon: linux }, { name: 'Windows', icon: windows11 },
  ] },
];

const technologies = groups.flatMap(group => group.items);

export const TechSlider = () => {
  const [paused, setPaused] = useState(false);
  const [expanded, setExpanded] = useState(false);

  return (
    <Stack aria-labelledby="stack-title" $paused={paused} $expanded={expanded}>
      <div className="stack-heading">
        <div>
          <h2 id="stack-title">My technology stack</h2>
          <p className="stack-description">Languages, frameworks, and tools I use to build and deliver software.</p>
        </div>
        <div className="controls">
          {!expanded && <button type="button" onClick={() => setPaused(!paused)} aria-pressed={paused}>
            {paused ? <Play size={14} aria-hidden="true" /> : <Pause size={14} aria-hidden="true" />}
            {paused ? 'Resume animation' : 'Pause animation'}
          </button>}
          <button type="button" aria-expanded={expanded} aria-controls="stack-groups" onClick={() => setExpanded(!expanded)}>
            {expanded ? 'Show slider' : 'View all'}
          </button>
        </div>
      </div>
      <div id="stack-groups">
        <div className="window" tabIndex={expanded ? undefined : 0} role="region" aria-label="Technologies and tools">
          <Track className="tech-track" $duration={160}>
            {[0, 1].map(copy => (
              <ul key={copy} aria-label={copy === 0 ? 'Technologies and tools' : undefined} aria-hidden={copy === 1 ? true : undefined} className={copy === 1 ? 'duplicate' : undefined}>
                {technologies.map(tech => <li key={tech.name}><img src={tech.icon} alt="" loading="lazy" /><span>{tech.name}</span></li>)}
              </ul>
            ))}
          </Track>
        </div>
      </div>
    </Stack>
  );
};

const drift = keyframes`
  from { transform: translateX(0); }
  to { transform: translateX(-50%); }
`;

const Track = styled.div<{ $duration: number }>`
  display: flex;
  width: max-content;
  animation: ${drift} ${({ $duration }) => $duration}s linear infinite;
  ul { display: flex; gap: 12px; padding-right: 12px; }
`;

const Stack = styled.section<{ $paused: boolean; $expanded: boolean }>`
  padding: 28px var(--page-gutter) 60px;
  background: var(--background);
  .stack-heading { display: flex; justify-content: space-between; align-items: end; gap: 24px; margin-bottom: 32px; flex-wrap: wrap; }
  .stack-description { max-width: 520px; margin-top: 12px; color: var(--muted); font-size: 14px; line-height: 1.7; }
  h2 { font-size: clamp(22px, 3vw, 28px); font-weight: 500; }
  .controls { display: flex; gap: 8px; flex-wrap: wrap; }
  button { display: inline-flex; align-items: center; gap: 7px; min-height: 40px; padding: 8px 12px; border: 1px solid var(--border); border-radius: var(--radius-small); color: var(--muted); background: transparent; font-size: 12px; transition: color .2s, border-color .2s; }
  button:hover { color: var(--text); border-color: #535960; }
  .window { overflow: hidden; padding: 4px 0; mask-image: linear-gradient(90deg, transparent, #000 24px, #000 calc(100% - 24px), transparent); }
  .window:focus-visible { outline: 2px solid var(--primary-light); outline-offset: 4px; }
  li { flex-shrink: 0; display: flex; align-items: center; gap: 10px; padding: 13px 18px; border: 1px solid var(--border); border-radius: 8px; background: var(--surface); color: #c3c8d0; font-size: 13px; white-space: nowrap; transition: border-color .2s, color .2s; }
  li:hover { color: var(--text); border-color: #4a5969; }
  img { width: 24px; height: 24px; object-fit: contain; filter: saturate(.7); }
  ${Track} { animation-play-state: ${({ $paused }) => $paused ? 'paused' : 'running'}; }
  .window:hover ${Track}, .window:focus-within ${Track} { animation-play-state: paused; }
  ${({ $expanded }) => $expanded && `
    .window { overflow: visible; mask-image: none; }
    ${Track} { width: 100%; animation: none; }
    ul { flex-wrap: wrap; padding-right: 0; }
    .duplicate { display: none; }
  `}
  @media (max-width: 600px) {
    .stack-heading { gap: 18px; }
    li { padding: 12px 14px; font-size: 12px; }
    img { width: 22px; height: 22px; }
  }
`;
