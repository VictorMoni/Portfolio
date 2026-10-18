"use client";

import { Folder, Home, User, Users } from "lucide-react";
import { useEffect, useState } from "react";
import styled, { css } from "styled-components";

const navigationItems = [
    { id: "home", label: "Home", icon: Home },
    { id: "about", label: "About", icon: User },
    { id: "projects", label: "Projects", icon: Folder },
    { id: "socialmedia", label: "Social media", icon: Users },
];

export default function Header(){
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
            <Nav aria-label="Main navigation">
                {navigationItems.map(({ id, label, icon: Icon }) => (
                    <TooltipWrapper key={id}>
                        <NavItem
                            href={`#${id}`}
                            aria-label={label}
                            aria-current={activeSection === id ? "location" : undefined}
                            $active={activeSection === id}
                        >
                            <Icon size={18} aria-hidden="true" />
                        </NavItem>
                        <TooltipText aria-hidden="true">{label}</TooltipText>
                    </TooltipWrapper>
                ))}
            </Nav>
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
  opacity: 0.7;
  padding: 0.5rem 1rem;
  background-color: #171717;
  color: white;
  border-radius: 1rem;
  border: 1px solid gray;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  z-index: 9;
  transition: opacity 0.4s ease-in-out;

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
  background-color: #333;
  color: #fff;
  padding: 4px 8px;
  border-radius: 4px;
  white-space: nowrap;
  font-size: 0.75rem;
  opacity: 0;
  visibility: hidden;
  transition: all 0.2s ease-in-out;
  pointer-events: none;
  z-index: 10;
`;

export const NavItem = styled.a<NavItemProps>`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 1rem;
  border-radius: 10px 10px 0 0;
  transition: background-color 0.2s;

 ${({ $active }) =>
        $active &&
        css`
      background-color: rgba(10, 60, 110, 0.7);
      color: #1fb3eeff;
      border-bottom: 2px solid #1fb3eeff;

    `}

  &:hover {
    background-color: #3f3f46;
  }

  @media(max-width: 768px){
    padding: 0.3rem;
  }
`;
