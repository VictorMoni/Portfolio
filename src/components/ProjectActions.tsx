import { Code2, SquareDashedMousePointer } from "lucide-react";
import styled from "styled-components";
import { useLanguage } from "../i18n";

type Props = { demoLink?: string; repoLink?: string; iconSize?: number };
export default function ProjectActions({
  demoLink,
  repoLink,
  iconSize = 18,
}: Props) {
  const { t } = useLanguage();
  return (
    <>
      {demoLink ? (
        <a
          href={demoLink}
          className="links"
          target="_blank"
          rel="noopener noreferrer"
        >
          <SquareDashedMousePointer size={iconSize} />
          {t("Live demo")}
        </a>
      ) : (
        <DisabledButton className="links disabled" aria-disabled="true">
          <SquareDashedMousePointer size={iconSize} />
          {t("Demo unavailable")}
        </DisabledButton>
      )}
      {repoLink && (
        <a
          href={repoLink}
          className="links secondary"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Code2 size={iconSize} />
          {t("View repository")}
        </a>
      )}
    </>
  );
}
const DisabledButton = styled.span`
  && {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    padding: 8px 0;
    background: transparent;
    border: 0;
    color: var(--muted);
    font-size: 12px;
    font-weight: 400;
    cursor: default;
  }
`;
