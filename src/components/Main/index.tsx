import { ArrowUpRight, Github, Linkedin, MessageCircle } from 'lucide-react';
import styled, { keyframes } from 'styled-components';
import banner from '../../assets/main-banner.webp';
import About from '../About';
import Education from '../Education';
import Projects from '../Projects';
import { SocialFooter } from '../SocialMedia';
import { TechSlider } from '../TechSlider';

export const Main = () => (
  <>
    <Introduction id="home">
      <div className="info">
        <p className="eyebrow">SOFTWARE DEVELOPMENT · BUSINESS PERSPECTIVE</p>
        <h1>Victor Moni<span aria-hidden="true">.</span></h1>
        <p className="role">
          <span className="role-measure">.NET Full Stack Developer</span>
          <span className="role-typing" aria-hidden="true">.NET Full Stack Developer</span>
        </p>
        <p className="summary">I build reliable .NET applications with a practical business mindset, while expanding my knowledge of cloud and security.</p>
        <div className="actions">
          <a className="primary-action" href="#projects">Explore projects <ArrowUpRight size={17} aria-hidden="true" /></a>
          <a className="secondary-action" href="https://drive.google.com/file/d/1ZakvZK_1uRrCiVU7DuDbkPOcv_Ptg47b" target="_blank" rel="noopener noreferrer">Resume <ArrowUpRight size={16} aria-hidden="true" /></a>
        </div>
        <div className="socials">
          <a href="https://github.com/victormoni" aria-label="GitHub" target="_blank" rel="noopener noreferrer"><Github size={19} /></a>
          <a href="https://www.linkedin.com/in/victormoni" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer"><Linkedin size={19} /></a>
          <a href="https://wa.me/5511943936479" aria-label="WhatsApp" target="_blank" rel="noopener noreferrer"><MessageCircle size={19} /></a>
          <span aria-hidden="true" />
          <a className="contact" href="#socialmedia">Contact me <ArrowUpRight size={14} aria-hidden="true" /></a>
        </div>
      </div>
    </Introduction>
    <TechSlider />
    <About />
    <Education />
    <Projects />
    <SocialFooter />
  </>
);

const typeRole = keyframes`
  0%, 8% { width: 0; }
  38%, 82% { width: 100%; }
  98%, 100% { width: 0; }
`;

const blinkCaret = keyframes`
  0%, 100% { border-color: transparent; }
  50% { border-color: var(--primary-light); }
`;

const Introduction = styled.main`
  position: relative;
  isolation: isolate;
  display: flex;
  align-items: center;
  min-height: 680px;
  min-height: min(820px, 84svh);
  padding: 170px var(--page-gutter) 72px;
  background: var(--background);
  &::before {
    content: '';
    position: absolute;
    inset: 0;
    z-index: -1;
    background: linear-gradient(90deg, #111214 5%, rgba(17,18,20,.86) 45%, rgba(17,18,20,.35)), url(${banner}) center 30% / cover;
    opacity: .55;
    pointer-events: none;
  }
  &::after {
    content: ''; position: absolute; inset: auto 0 0; height: 160px;
    background: linear-gradient(transparent, var(--background)); z-index: -1;
  }
  .info { max-width: 650px; }
  .eyebrow { color: var(--primary-light); font-size: 10px; font-weight: 600; letter-spacing: .18em; margin-bottom: 24px; line-height: 1.8; }
  h1 { font-size: clamp(52px, 7vw, 88px); line-height: 1.05; letter-spacing: -.06em; font-weight: 700; }
  h1 span { color: var(--primary-light); }
  .role {
    position: relative;
    width: max-content;
    max-width: 100%;
    margin-top: 16px;
    font-family: inherit;
    font-size: clamp(16px, 2.2vw, 24px);
    color: #dbe4ed;
    letter-spacing: -.025em;
    white-space: nowrap;
  }
  .role-measure { color: transparent; padding-right: 6px; }
  .role-typing {
    position: absolute;
    inset: 0 auto 0 0;
    overflow: hidden;
    width: 0;
    border-right: 2px solid var(--primary-light);
    animation: ${typeRole} 8s steps(24, end) infinite, ${blinkCaret} .8s step-end infinite;
  }
  .summary { max-width: 490px; color: var(--muted); font-size: 16px; line-height: 1.85; margin: 24px 0 32px; }
  .actions { display: flex; gap: 12px; flex-wrap: wrap; }
  .actions a { display: inline-flex; align-items: center; gap: 12px; min-height: 46px; padding: 12px 20px; border-radius: var(--radius-small); font-size: 14px; font-weight: 600; transition: background .2s, border-color .2s; }
  .primary-action { background: var(--primary); border: 1px solid var(--primary); &:hover { background: #247eb5; } }
  .secondary-action { border: 1px solid #36414e; background: rgba(24,26,29,.7); &:hover { border-color: var(--primary-light); } }
  .socials { display: flex; align-items: center; gap: 8px; margin-top: 32px; }
  .socials a { display: inline-flex; align-items: center; justify-content: center; min-width: 44px; min-height: 44px; color: var(--muted); transition: color .2s; &:hover { color: var(--text); } }
  .socials > span { width: 1px; height: 18px; background: var(--border); margin: 0 12px; }
  .socials .contact { gap: 8px; font-size: 13px; }
  @media (max-width: 600px) {
    min-height: 660px; padding-top: 145px; padding-bottom: 70px;
    &::before { background-position: 60% center; opacity: .3; }
    .eyebrow { max-width: 260px; }
    .summary { font-size: 15px; }
  }
`;
