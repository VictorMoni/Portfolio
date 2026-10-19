import { useLanguage } from '../../i18n';
import { useState } from 'react';
import { Pause, Play } from 'lucide-react';
import styled, { keyframes } from 'styled-components';
import angular from "../../assets/angular.svg";
import azuredevops from "../../assets/azuredevops.svg";
import csharp from "../../assets/csharp.svg";
import docker from "../../assets/docker.svg";
import dotnetcore from "../../assets/dotnetcore.svg";
import entityframeworkcore from "../../assets/entityframeworkcore.svg";
import git from "../../assets/git.svg";
import java from "../../assets/java.svg";
import spring from "../../assets/spring.svg";
import microsoftsqlserver from "../../assets/microsoftsqlserver.svg";
import oracle from "../../assets/oracle.svg";
import swagger from "../../assets/swagger.svg";
import typescript from "../../assets/typescript.svg";

const technologies = [
  { name: 'C#', icon: csharp },
  { name: '.NET', icon: dotnetcore },
  { name: 'Java', icon: java },
  { name: 'Spring', icon: spring },
  { name: 'Angular', icon: angular },
  { name: 'TypeScript', icon: typescript },
  { name: 'Entity Framework', icon: entityframeworkcore },
  { name: 'SQL Server', icon: microsoftsqlserver },
  { name: 'Oracle', icon: oracle },
  { name: 'REST APIs / Swagger', icon: swagger },
  { name: 'Git', icon: git },
  { name: 'Azure DevOps', icon: azuredevops },
  { name: 'Docker', icon: docker },
];

export const TechSlider = () => {
    const { t } = useLanguage();
  const [paused, setPaused] = useState(false);
  const [expanded, setExpanded] = useState(false);

  return (
    <Stack aria-labelledby="stack-title" $paused={paused} $expanded={expanded}>
      <div className="stack-heading">
        <div>
          <h2 id="stack-title">{t("My technology stack")}</h2>
          <p className="stack-description">{t("Languages, frameworks, and tools I use to build and deliver software.")}</p>
        </div>
        <div className="controls">
          {!expanded && <button type="button" onClick={() => setPaused(!paused)} aria-pressed={paused}>
            {paused ? <Play size={14} aria-hidden="true" /> : <Pause size={14} aria-hidden="true" />}
            {paused ? t("Resume animation") : t("Pause animation")}
          </button>}
          <button type="button" aria-expanded={expanded} aria-controls="stack-groups" onClick={() => setExpanded(!expanded)}>
            {expanded ? t("Show slider") : t("View all")}
          </button>
        </div>
      </div>
      <div id="stack-groups">
        <div className="window" tabIndex={expanded ? undefined : 0} role="region" aria-label={t("Technologies and tools")}>
          <Track className="tech-track" $duration={58}>
            {[0, 1].map(copy => (
              <ul key={copy} aria-label={copy === 0 ? t("Technologies and tools") : undefined} aria-hidden={copy === 1 ? true : undefined} className={copy === 1 ? 'duplicate' : undefined}>
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
  button { display: inline-flex; align-items: center; gap: 7px; min-height: 40px; padding: 8px 12px; border: 1px solid var(--border); border-radius: var(--radius-small); color: var(--muted); background: transparent; font-size: 12px; transition: var(--control-transition); }
  button:hover { color: var(--text); border-color: #535960; }
  .window { overflow: hidden; padding: 4px 0; mask-image: linear-gradient(90deg, transparent, #000 24px, #000 calc(100% - 24px), transparent); }
  .window:focus-visible { outline: 2px solid var(--primary-light); outline-offset: 4px; }
  li { flex-shrink: 0; display: flex; align-items: center; gap: 10px; padding: 13px 18px; border: 1px solid var(--border); border-radius: 8px; background: var(--surface); color: var(--text); font-size: 13px; white-space: nowrap; transition: var(--control-transition); }
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
