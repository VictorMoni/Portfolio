"use client";

import { Folder, Home, User, Users } from "lucide-react";
import { useEffect, useState } from "react";
import styled, { css } from "styled-components";

export default function Header(){
    const [activeSection, setActiveSection] = useState<string>("");

    useEffect(() => {
        const handleScroll = () => {
            const sections = ["home", "about", "projects", "socialmedia"];
            const scrollPosition = window.scrollY + 100;

            for (const id of sections) {
                const el = document.getElementById(id);
                if (el) {
                    const offsetTop = el.offsetTop;
                    const offsetHeight = el.offsetHeight;

                    if (
                        scrollPosition >= offsetTop &&
                        scrollPosition < offsetTop + offsetHeight
                    ) {
                        setActiveSection(id);
                        break;
                    }
                }
            }
        };

        window.addEventListener("scroll", handleScroll);
        handleScroll();

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <Container>
            <Nav>
                <TooltipWrapper>
                    <NavItem href="#home" $active={activeSection === "home"}>
                        <Home size={18} />
                    </NavItem>
                    <TooltipText>Home</TooltipText>
                </TooltipWrapper>

                <TooltipWrapper>
                    <NavItem href="#about" $active={activeSection === "about"}>
                        <User size={18} />
                    </NavItem>
                    <TooltipText>About</TooltipText>
                </TooltipWrapper>

                <TooltipWrapper>
                    <NavItem href="#projects" $active={activeSection === "projects"}>
                        <Folder size={18} />
                    </NavItem>
                    <TooltipText>Projects</TooltipText>
                </TooltipWrapper>
                <TooltipWrapper>
                    <NavItem href="#socialmedia" $active={activeSection === "socialmedia"}>
                        <Users size={18} />
                    </NavItem>
                    <TooltipText>Social media</TooltipText>
                </TooltipWrapper>
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

  &:hover span {
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
