import { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";
import githubIcon from '../../assets/github.png';
import linkedinIcon from '../../assets/linkedin.png';
import backgroundVideo from '../../assets/main-banner.png';
import whatsappIcon from '../../assets/whatsapp.png';
import About from "../About";
import { Background } from "../BackgroundEclipse";
import Projects from "../Projects";
import { SocialFooter } from "../SocialMedia";
import { TechSlider } from "../TechSlider";

interface MouseMovements {
    clientX: number;
    clientY: number;
}

const curriculumUrl =
  "https://drive.google.com/file/d/1rNLEny2TgxbY6d6ASpLnipbGo2YWuISH";

const resumeUrl =
  "https://drive.google.com/file/d/1ZakvZK_1uRrCiVU7DuDbkPOcv_Ptg47b";

export const Main = () => {
    const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e: MouseMovements) => {
            setCursorPosition({ x: e.clientX, y: e.clientY })
        }

        window.addEventListener("mousemove", handleMouseMove)

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
        }
    }, [])

    useEffect(() => {
        const handleMouseMove = (e: MouseMovements) => {
            const { clientX, clientY } = e;
            const offsetX = (clientX - window.innerWidth / 2) * 0.05;
            const offsetY = (clientY - window.innerHeight / 2) * 0.05;
            document.querySelector('.character img')?.setAttribute(
                'style',
                `transform: translate(${offsetX}px, ${offsetY}px)`
            );
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    return (
        <>
        <Background />
            <Introduction id="home">
                <div className="info">
                    <p>My name is</p>
                    <h1>Victor Moni</h1>
                    <TerminalText>
                      &gt; Full Stack Developer
                   </TerminalText>
                    <div className="cv-style">
                        <a
                            href={curriculumUrl}
                            className="download-cv links"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Currículo
                        </a>

                      <a
                        href={resumeUrl}
                        className="download-cv links"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Resume
                    </a>
                    </div>
                 </div>

                <div className="arrow">
                    <p>↓</p>
                </div>
                <div className="social-media">
                    <a href="https://github.com/victormoni" className="logo" target="_blank" rel="noopener noreferrer">
                        <img src={githubIcon} alt="github icon" />
                    </a>
                    <a href="https://www.linkedin.com/in/victormoni" className="logo" target="_blank" rel="noopener noreferrer">
                        <img src={linkedinIcon} alt="linkedin icon" />
                    </a>
                    <a href="https://wa.me/5511943936479" className="logo" target="_blank" rel="noopener norefereer">
                        <img src={whatsappIcon} alt="whatsapp icon" />
                    </a>
                </div>
            </Introduction>
            <SectionTransition />
            <TechSlider />
            <About />
            <Projects />
            <SocialFooter />
            <BackgroundPrompt>
            </BackgroundPrompt>
            <CursorDot style={{ left: `${cursorPosition.x}px`, top: `${cursorPosition.y}px` }}></CursorDot>
            <CursorOutline style={{ left: `${cursorPosition.x}px`, top: `${cursorPosition.y}px` }}></CursorOutline>
        </>
    )
}

const terminalTyping = keyframes`
    0% {
        width: 0;
    }

    40% {
        width: 245px;
    }

    70% {
        width: 245px;
    }

    100% {
        width: 0;
    }
`;

const terminalCursor = keyframes`
    0%,
    100% {
        border-color: transparent;
    }

    50% {
        border-color: var(--primary-light);
    }
`;

const CursorDot = styled.div`
    width: 5px;
    height: 5px;
    background-color: white;
    position: fixed;
    top: 0;
    left: 0;
    transform: translate(-50%, -50%);
    border-radius: 50%;
    z-index: 9;
    pointer-events: none;
    @media(max-width: 768px){
        display: none;
    }
`

const TerminalText = styled.span`
    display: block;
    width: 0;
    overflow: hidden;
    white-space: nowrap;

    color: var(--primary-light);
    font-family: inherit;
    font-size: 24px;
    font-weight: 500;

    border-right: 3px solid var(--primary-light);

    animation:
        ${terminalTyping} 6s steps(22) infinite,
        ${terminalCursor} 0.7s step-end infinite;

    @media (max-width: 380px) {
        font-size: 15px;
    }
`;

const CursorOutline = styled.div`
    width: 30px;
    height: 30px;
    border: 2px solid hsla(0, 0%, 100%, 0.5);
    position: fixed;
    top: 0;
    left: 0;
    transform: translate(-50%, -50%);
    border-radius: 50%;
    z-index: 8;
    pointer-events: none;
    transition: left 0.1s ease, top 0.1s ease;

    @media(max-width: 768px){
        display: none;
    }
`

const Introduction = styled.main`
  display: flex;
  align-items: center;
  padding: 0 150px;
  height: 78vh;
  margin-bottom: 0;
  position: relative;
  z-index: 1;
  width: 100%;
  background-image: url(${backgroundVideo});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center 20%;
  background-color: transparent;

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.410);
    z-index: -1;
  }
  &::before {
    content: "";
    position: absolute;
    bottom: -1px;
    left: 0;
    width: 100%;
    height: 150px;
    background: linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, black 100%);
    z-index: 2;
    pointer-events: none;
  }
    .info p{
        font-size: 24px;
        color: #c2c2c2;
    }
    .info h1{
        font-size: 60px;
        margin-bottom: 10px;
    }
    .info span{
        color: var(--primary-light);
        font-size: 24px;
    }
   .info p,
   .info h1,
   .info .cv-style {
      animation: fade-up 0.5s 0.4s backwards;
    }
   .info .cv-style {
      display: flex;
      align-items: center;
      gap: 12px;
      margin-top: 25px;
   }
   .info .links {
      background: var(--primary);
      color: white;
      width: auto;
      max-width: fit-content;

      display: inline-flex;
      align-items: center;
      justify-content: center;

      border: 2px solid var(--primary);
      border-radius: 5px;

      font-weight: 600;
      padding: 12px 24px;
      margin: 10px 0;

      cursor: pointer;
      animation: fade-up 0.5s 0.4s backwards;
      transition: 0.15s ease-in;

      &:hover {
          background: var(--primary-light);
          border-color: var(--primary-light);
      }
  }

    .info .links img{
        width: 20px;
        height: 20px;
        margin-right: 10px;
    }

    .arrow {
        position: absolute;
        left: 50%;
        bottom: 100px;
        animation: anima-seta 2000ms ease-in-out infinite;
        opacity: 0;
    }


    .social-media{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        background-color: white;
        border-radius: 10px 0 0 10px;
        position: absolute;
        right: 0;
        z-index: 999999;
        animation: fade-up 0.5s 0.4s backwards;
    }
    .social-media .logo{
        padding: 10px;
    }
    .social-media .logo img{
        width: 50px;
        height: 50px;
    }

   @media (max-width: 1024px) {
    padding: 40px 20px;
}

@media (max-width: 768px) {
    background-position: 60%;
    padding: 40px 20px 10px;

    .info h1 {
        font-size: 40px;
    }

    .info .cv-style {
        display: flex;
        align-items: center;
        gap: 12px;
    }

    .arrow {
        left: 43%;
    }
}

@media (max-width: 450px) {
    padding: 40px 16px 10px;

    .info {
        width: 100%;
    }

    .info .cv-style {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 8px;
        width: 100%;
        margin-top: 25px;
    }

    .info .links {
        width: 100%;
        max-width: 220px;
        margin: 0;
    }

    .social-media .logo {
        padding: 7px;
    }

    .social-media .logo img {
        width: 40px;
        height: 40px;
    }
}

@media (max-width: 380px) {
    background-image: url(${backgroundVideo});

    &::after {
        background-color: rgba(0, 0, 0, 0.2);
    }

    .info h1 {
        font-size: 32px;
    }

    .info span {
        font-size: 15px;
    }

    .info p {
        font-size: 20px;
    }

    .info .links {
        max-width: 190px;
        padding: 10px 18px;
        font-size: 14px;
    }
}
`

const BackgroundPrompt = styled.div`
    position: fixed;
    left: 0;
    top: 0;
    z-index: -999;
    width: 100%;
    height: 100%;
    background-color: black;
    img{
        min-width: 100%;
        min-height: 100%;
        width: auto;
        height: auto;
        opacity: 0.675;
    }
`

const SectionTransition = styled.div`
  position: relative;
  width: 100%;
  height: 0px;
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0.6), transparent);
  z-index: 1;
  margin-top: -1px;
`;
