import {
  Code2,
  SquareDashedMousePointer
} from "lucide-react";
import React, { useId, useState } from "react";
import styled from "styled-components";

type CardProjectProps = {
  cover: string;

  title: string;
  description?: string;
  engineeringFocus?: string;
  technologies?: string[];
  lastUpdated: string;
  repoLink?: string;
  liveLink?: string;
};

export const Project: React.FC<CardProjectProps> = ({
  cover,
  title,
  description,
  technologies = [],
  lastUpdated,
  repoLink,
  liveLink,
  engineeringFocus,
}) => {
  const [expanded, setExpanded] = useState(false);
  const descriptionId = useId();
  return (
    <Card>
      <Cover src={cover} alt={title} loading="lazy" decoding="async" />

      <Content>
        <TitleRow>
          <Title>{title}</Title>
        </TitleRow>

        {description && (
          <><Description id={descriptionId} $expanded={expanded}>{description}</Description><DetailsButton type="button" aria-expanded={expanded} aria-controls={descriptionId} onClick={() => setExpanded(!expanded)}>{expanded ? "Show less" : "View details"}</DetailsButton>{expanded && engineeringFocus && <FocusNote><strong>Engineering focus</strong>{engineeringFocus}</FocusNote>}</>
        )}

        <Technologies aria-label="Technologies">{technologies.map(technology => <span key={technology}>{technology}</span>)}</Technologies>

        {(repoLink || liveLink) && (
          <ActionMethods>
            {liveLink ? (
              <a
                href={liveLink}
                className="links"
                target="_blank"
                rel="noopener noreferrer"
              >
                <SquareDashedMousePointer size={17} />
                Live demo
              </a>
            ) : (
              <DisabledButton
                className="links disabled"
                aria-disabled="true"
              >
                <SquareDashedMousePointer size={17} />
                Demo unavailable
              </DisabledButton>
            )}

            {repoLink && (
              <a
                href={repoLink}
                className="links secondary"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Code2 size={17} />
                View repository
              </a>
            )}
          </ActionMethods>
        )}

        <LastUpdated>
          Updated: <time dateTime={lastUpdated}>{new Intl.DateTimeFormat("en", { month: "short", day: "numeric", year: "numeric", timeZone: "UTC" }).format(new Date(lastUpdated))}</time>
        </LastUpdated>
      </Content>
    </Card>
  );
};

// Styled Components

const Card = styled.article`
  width: 100%;
  max-width: 360px;
  min-width: 250px;

  overflow: hidden;
  background:var(--surface);
  border:1px solid var(--border);
  border-radius: 12px;

  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);

  color: #fff;
  font-family:inherit;

  transition:
    transform 0.2s ease,
    box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.4);
  }

  @media (max-width: 768px) {
    max-width: 330px;
    min-width: 240px;
  }

  @media (max-width: 450px) {
    max-width: 100%;
    min-width: 0;
  }
`;

const Cover = styled.img`
  display: block;
  width: 100%;
  height: 210px;

  padding: 8px;
  border-radius: var(--radius);
  object-fit: contain;

  @media (max-width: 450px) {
    height: 190px;
  }
`;

const Content = styled.div`
  padding:20px;
`;

const TitleRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  min-height: 30px;
  margin-bottom: 6px;
`;

const Title = styled.h3`
  margin: 0;

  font-size: 1.2rem;
  font-weight: 700;
  color: #fff;
  line-height: 1.25;
`;

const Description = styled.p<{ $expanded: boolean }>`
  display: -webkit-box;
  overflow: hidden;

  margin: 0 0 10px;

  color:var(--muted);

  font-size: 0.88rem;
  line-height:1.65;

  -webkit-box-orient: vertical;
  -webkit-line-clamp: ${({ $expanded }) => $expanded ? "unset" : 3};
`;

const DetailsButton = styled.button`
  background: transparent;
  border: 0;
  padding: 4px 0;
  margin-bottom: 12px;
  color: var(--primary-light);
  font: inherit;
  font-size: 0.85rem;
  cursor: pointer;
  &:hover { text-decoration: underline; }
  &:focus-visible { outline: 2px solid var(--primary-light); outline-offset: 4px; }
`;

const FocusNote = styled.p`
  color: #cbd5e1;
  font-size: 0.85rem;
  line-height: 1.6;
  margin-bottom: 16px;
  strong { display: block; color: #fff; margin-bottom: 4px; }
`;

const Technologies = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-bottom: 12px;
  span {
    padding: 4px 8px;
    border: 1px solid var(--border);
    border-radius: 6px;
    background: var(--background);
    color: var(--muted);
    font-size: 0.72rem;
    line-height: 1.4;
  }
`;

const ActionMethods = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;

  width: 100%;
  margin: 8px 0;

  .links {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 6px;

    min-height: 34px;
    padding: 6px 9px;

    background: var(--primary);
    border: 2px solid var(--primary);
    border-radius: 6px;

    color: white;
    text-decoration: none;

    font-size: 0.76rem;
    font-weight: 500;

    transition:
      background 0.2s ease,
      border-color 0.2s ease;

    &:hover {
      background: #247eb5;
      border-color: var(--primary-light);
    }
  }

  .links.secondary {
    background: transparent;

    &:hover {
      background: var(--primary);
      color: white;
    }
  }

  @media (max-width: 450px) {
    flex-direction: column;

    .links {
      width: 100%;
    }
  }
`;

const DisabledButton = styled.span`
&& { display:inline-flex; align-items:center; gap:6px; padding:8px 0; background:transparent; border:0; color:var(--muted); font-size:12px; font-weight:400; cursor:default; }
`;

const LastUpdated = styled.p`
  margin: 8px 0 0;

  color: #888;

  font-size: 0.72rem;
  line-height: 1.2;
`;
