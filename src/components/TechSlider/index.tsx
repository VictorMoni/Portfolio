import styled, { keyframes } from "styled-components";
import react from "../../assets/react.svg";
import spring from "../../assets/spring.svg";
import typescript from "../../assets/typescript.svg";
import javascript from "../../assets/javascript.svg";
import nextjs from "../../assets/nextjs.svg";
import css from "../../assets/css.svg";
import angular from "../../assets/angular.svg";
import postgresql from "../../assets/postgresql.svg";
import tailwindcss from "../../assets/tailwindcss.svg";
import html5 from "../../assets/html5.svg";
import java from "../../assets/java.svg";
import mysql from "../../assets/mysql.svg";
import vitejs from "../../assets/vitejs.svg";
import git from "../../assets/git.svg";
import intellijidea from "../../assets/intellijidea.svg";
import atlassian from "../../assets/atlassian.svg";
import docker from "../../assets/docker.svg";
import kubernetes from "../../assets/kubernetes.svg";
import vscode from "../../assets/vscode.svg";
import mongodb from "../../assets/mongodb.svg";
import sass from "../../assets/sass.svg";

const logos = [intellijidea, java, spring, vscode, typescript, nextjs, vitejs, react, angular,
  tailwindcss, javascript, css, sass, html5, git, docker, kubernetes, mysql, postgresql, mongodb, atlassian];

export const TechSlider = () => {
    // Criamos múltiplas cópias para garantir um loop suave
    const repeatedLogos = [...logos, ...logos, ...logos];

    return (
        <SliderWrapper>
            <SliderContent>
                {repeatedLogos.map((logo, index) => (
                    <TechBox key={`${logo}-${index}`}>
                        <img src={logo} alt={`tech-logo-${index}`} />
                    </TechBox>
                ))}
            </SliderContent>
        </SliderWrapper>
    );
};

const scroll = keyframes`
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(calc(-100% / 3));
  }
`;

const SliderWrapper = styled.div`
  overflow: hidden;
  width: 100%;
  z-index: 0;
  background-color: transparent;
  position: relative;
  bottom: 0;
  user-select: none;
  padding: 40px 0;

  @media (max-width: 768px) {
    padding: 20px 0;
  }
`;

const SliderContent = styled.div`
  display: flex;
  width: fit-content;
  animation: ${scroll} 15s linear infinite;
  gap: 30px;

  @media (max-width: 768px) {
    gap: 15px;
  }
`;

const TechBox = styled.div`
  background: #1A1A1A;
  width: 100px;
  height: 100px;
  opacity: 0.6;
  border-radius: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  box-shadow: rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset, rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.1);
    opacity: 1;
  }

  img {
    max-width: 60%;
    max-height: 60%;
    object-fit: contain;
  }

  @media (max-width: 768px) {
    width: 80px;
    height: 80px;
  }
`;

