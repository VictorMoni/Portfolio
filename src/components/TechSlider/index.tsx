import styled, { keyframes } from "styled-components";
import angular from "../../assets/angular.svg";
import atlassian from "../../assets/atlassian.svg";
import csharp from "../../assets/csharp.svg";
import css from "../../assets/css.svg";
import dbeaver from "../../assets/dbeaver.svg";
import docker from "../../assets/docker.svg";
import figma from "../../assets/figma.svg";
import git from "../../assets/git.svg";
import grafana from "../../assets/grafana.svg";
import html5 from "../../assets/html5.svg";
import intellijidea from "../../assets/intellijidea.svg";
import java from "../../assets/java.svg";
import javascript from "../../assets/javascript.svg";
import kubernetes from "../../assets/kubernetes.svg";
import linuxmint from "../../assets/linuxmint.svg";
import microsoftsqlserver from "../../assets/microsoftsqlserver.svg";
import oracle from "../../assets/oracle.svg";
import postgresql from "../../assets/postgresql.svg";
import rabbitmq from "../../assets/rabbitmq.svg";
import sass from "../../assets/sass.svg";
import spring from "../../assets/spring.svg";
import tailwindcss from "../../assets/tailwindcss.svg";
import typescript from "../../assets/typescript.svg";
import ubuntu from "../../assets/ubuntu.svg";
import uml from "../../assets/uml.svg";
import visualbasic from "../../assets/visualbasic.svg";
import visualstudio from "../../assets/visualstudio.svg";
import vscode from "../../assets/vscode.svg";
import windows11 from "../../assets/windows11.svg";

const logos = [intellijidea, oracle, java, spring, grafana, vscode, rabbitmq, typescript,  visualbasic, dbeaver, linuxmint,  angular, microsoftsqlserver, uml, tailwindcss, visualstudio, ubuntu, javascript, csharp, windows11, css, sass, html5, git, docker, kubernetes, postgresql, atlassian, figma];

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
  padding: 25px 0;

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
  width: 65px;
  height: 65px;
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

