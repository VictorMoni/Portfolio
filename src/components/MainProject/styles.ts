import styled from "styled-components";

export const Section = styled.section`
  position: relative;
  min-height: 100vh;
  min-height: 100svh;
  padding: max(104px, var(--section-space)) var(--page-gutter)
    var(--section-space);
  background: var(--background);
  border-top: 1px solid var(--border);
  color: var(--text);
  min-width: 0;
`;

export const Container = styled.div`
  padding: 32px;
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: var(--radius);

  @media (max-width: 600px) {
    padding: 20px;
  }
  position: relative;
  z-index: 3;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 12px;
  @media (max-width: 1023px) {
    .project-details > :first-child {
      margin-top: 0;
    }
  }

  @media (min-width: 1024px) {
    display: grid;
    grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
    column-gap: 3rem;
    row-gap: 0;
    align-items: start;
    .project-gallery {
      grid-column: 2;
      grid-row: 1 / span 2;
      align-self: center;
    }
    .project-details {
      grid-column: 1;
      grid-row: 2;
    }
  }
`;

export const Content = styled.div`
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  width: 100%;

  @media (min-width: 1024px) {
    width: 100%;
  }
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 1rem;
  gap: 0.25rem;

  h2 {
    font-size: 40px;
    font-weight: bold;
    color: var(--text);
    letter-spacing: -0.035em;

    @media (min-width: 1024px) {
      font-size: 40px;
    }
  }

  a {
    color: var(--muted);
    transition: var(--control-transition);

    &:hover {
      color: #3b82f6;
    }
  }
`;

export const Status = styled.div`
  display: flex;
  width: fit-content;
  margin-bottom: 20px;
  padding: 6px 10px;
  border: 1px solid var(--active-border);
  background: var(--status-background);
  border-radius: var(--radius-small);
  color: var(--status-text);
  font-size: 12px;
`;

export const Description = styled.p`
  color: var(--muted);
  margin-bottom: 1.5rem;
  line-height: 1.6;
  font-size: 18px;
  max-width: 42rem;
`;

export const ProjectScope = styled.p`
  margin-top: 24px;
  color: var(--muted);
  font-size: 14px;
  line-height: 1.6;
  strong {
    display: block;
    color: var(--text);
    margin-bottom: 6px;
  }
`;

export const Footer = styled.div`
  font-size: 0.75rem;
  color: var(--muted);
  display: flex;
  flex-direction: column;
  margin-top: 1.5rem;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const ActionMethods = styled.div`
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
    transition: var(--control-transition);
    &:hover {
      background: #247eb5;
    }
  }

  .links.secondary {
    color: var(--primary-light);
    background: transparent;
    border: 2px solid var(--primary);

    &:hover {
      background: var(--primary);
      color: white;
    }
  }

  @media (max-width: 450px) {
    flex-direction: column;
  }
`;

export const Technologies = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 20px;
  @media (max-width: 1023px) {
    margin-bottom: 0;
  }
  span {
    padding: 5px 10px;
    border: 1px solid var(--border);
    border-radius: 6px;
    background: var(--background);
    color: var(--muted);
    font-size: 0.85rem;
  }
`;
