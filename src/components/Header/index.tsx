import ThemeToggle from '../ThemeToggle';
import LanguageSwitcher from '../../i18n/LanguageSwitcher';
import { useLanguage } from '../../i18n';

import { Folder, GraduationCap, Home, User, Users } from "lucide-react";
import { useEffect, useState } from "react";
import styled, { css } from "styled-components";

const navigationItems = [
    { id: "home", label: "Home", icon: Home },
    { id: "about", label: "Career", icon: User },
    { id: "education", label: "Education", icon: GraduationCap },
    { id: "projects", label: "Projects", icon: Folder },
    { id: "socialmedia", label: "Social media", icon: Users },
];

export default function Header(){
    const { t } = useLanguage();
    const [activeSection, setActiveSection] = useState<string>("");

    useEffect(() => {
        const handleScroll = () => {
            const isAtBottom =
                Math.ceil(window.scrollY + window.innerHeight) >=
                document.documentElement.scrollHeight;
            const currentSection = [...navigationItems].reverse().find(({ id }) => {
                const section = document.getElementById(id);
                return section && (isAtBottom || section.getBoundingClientRect().top <= 100);
            });

            setActiveSection(currentSection?.id ?? "home");
        };

        window.addEventListener("scroll", handleScroll);
        handleScroll();

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <Container>
            <Nav aria-label={t("Main navigation")}>
                {navigationItems.map(({ id, label, icon: Icon }) => (
                    <TooltipWrapper key={id}>
                        <NavItem
                            href={`#${id}`}
                            aria-label={t(label)}
                            aria-current={activeSection === id ? "location" : undefined}
                            $active={activeSection === id}
                        >
                            <Icon size={18} aria-hidden="true" />
                        </NavItem>
                        <TooltipText aria-hidden="true">{t(label)}</TooltipText>
                    </TooltipWrapper>
                ))}
            </Nav>
            <LanguageSwitcher />
            <ThemeToggle />
        </Container>
    );
}


export const Container = styled.header`
  width: fit-content;
  position: fixed;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  top: 1rem;
  align-items: center;
  justify-content: space-between;
  opacity: 1;
  padding: 0.5rem 1rem;
  background-color: var(--header-background); backdrop-filter:blur(16px);
  color: var(--text);
  border-radius: 1rem;
  border:1px solid var(--border);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  z-index: 9;
  transition: var(--control-transition);
  max-width: calc(100vw - 16px);
  @media (max-width: 600px) {
    padding: 5px;
    nav { gap: 0; }
    nav a { padding: 6px; min-width: 30px; min-height: 44px; }
  }

  &:hover {
    opacity: 1;
}
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  cursor: pointer;
  gap: 0.5rem;
`;

interface NavItemProps {
    $active: boolean;
}

export const TooltipWrapper = styled.div`
  position: relative;
  display: inline-block;

  &:hover span,
  &:focus-within span {
    opacity: 1;
    visibility: visible;
    transform: translateY(0);
  }
`;

export const TooltipText = styled.span`
  position: absolute;
  bottom: -80%;
  background-color: var(--text);
  color: var(--background);
  padding: 4px 8px;
  border-radius: 4px;
  white-space: nowrap;
  font-size: 0.75rem;
  opacity: 0;
  visibility: hidden;
  transition: var(--control-transition);
  pointer-events: none;
  z-index: 10;
`;

export const NavItem = styled.a<NavItemProps>`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding:0.8rem;
  border-radius:8px;
  transition: var(--control-transition);

 ${({ $active }) =>
        $active &&
        css`
      background-color: var(--active-background);
      color: var(--primary-light);
      box-shadow:inset 0 0 0 1px var(--active-border);

    `}

  &:hover {
    background-color: var(--hover-surface);
  }

  @media(max-width: 768px){
    padding: 0.65rem;
    min-width: 44px;
    min-height: 44px;
    justify-content: center;
  }
`;
