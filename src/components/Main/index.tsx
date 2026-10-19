import { useLanguage } from '../../i18n';
import { ArrowUpRight, Github, Linkedin, MessageCircle } from 'lucide-react';
import styled, { keyframes } from 'styled-components';
import banner from '../../assets/main-banner.webp';
import About from '../About';
import Education from '../Education';
import Projects from '../Projects';
import { SocialFooter } from '../SocialMedia';
import { TechSlider } from '../TechSlider';

const resumes = {
  pt: 'https://drive.google.com/file/d/1rNLEny2TgxbY6d6ASpLnipbGo2YWuISH/view?usp=sharing',
  en: 'https://drive.google.com/file/d/1ZakvZK_1uRrCiVU7DuDbkPOcv_Ptg47b/view?usp=sharing',
  es: 'https://drive.google.com/file/d/1IvYgqcfUJrkQwHRuXavWJR-eM0MK6OyR/view?usp=sharing',
};

export const Main = () => {
  const { t, language } = useLanguage();
  return (
  <>
    <Introduction id="home">
      <div className="info">
        <p className="eyebrow">{t("SOFTWARE DEVELOPMENT · BUSINESS PERSPECTIVE")}</p>
        <h1>Victor Moni</h1>
        <p className="role">
          <span className="role-measure">{t(".NET Full Stack Developer")}</span>
          <span className="role-typing" aria-hidden="true">{t(".NET Full Stack Developer")}</span>
        </p>
        <p className="summary">{t("I build reliable .NET applications with a practical business mindset, while expanding my knowledge of cloud and security.")}</p>
        <div className="actions">
          <a className="primary-action" href="#projects">{t("Explore projects")}<ArrowUpRight size={17} aria-hidden="true" /></a>
          <a className="secondary-action" href={resumes[language]} target="_blank" rel="noopener noreferrer">{t("Resume")}<ArrowUpRight size={16} aria-hidden="true" /></a>
        </div>
        <div className="socials">
          <a href="https://github.com/victormoni" aria-label="GitHub" target="_blank" rel="noopener noreferrer"><Github size={19} /></a>
          <a href="https://www.linkedin.com/in/victormoni" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer"><Linkedin size={19} /></a>
          <a href="https://wa.me/5511943936479" aria-label="WhatsApp" target="_blank" rel="noopener noreferrer"><MessageCircle size={19} /></a>
          <span aria-hidden="true" />
          <a className="contact" href="#socialmedia">{t("Contact me")}<ArrowUpRight size={14} aria-hidden="true" /></a>
        </div>
      </div>
      <div className="hero-art" aria-hidden="true" />
    </Introduction>
    <TechSlider />
    <About />
    <Education />
    <Projects />
    <SocialFooter />
  </>
  );
};

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
    background: var(--hero-overlay), url(${banner}) center 30% / cover;
    opacity: var(--hero-opacity);
    pointer-events: none;
  }
  &::after {
    content: ''; position: absolute; inset: auto 0 0; height: 160px;
    background: linear-gradient(transparent, var(--background)); z-index: -1;
  }
  .info { max-width: 650px; }
  .eyebrow { color: var(--primary-light); font-size: 10px; font-weight: 600; letter-spacing: .18em; margin-bottom: 24px; line-height: 1.8; }
  h1 { font-size: clamp(52px, 7vw, 88px); line-height: 1.05; letter-spacing: -.06em; font-weight: 700; }
  .role {
    position: relative;
    width: max-content;
    max-width: 100%;
    margin-top: 16px;
    font-family: inherit;
    font-size: clamp(16px, 2.2vw, 24px);
    color: var(--text);
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
  .summary { max-width: 490px; color: var(--hero-summary); font-size: 16px; line-height: 1.85; margin: 24px 0 32px; }
  .actions { display: flex; gap: 12px; flex-wrap: wrap; }
  .actions a { display: inline-flex; align-items: center; gap: 12px; min-height: 46px; padding: 12px 20px; border-radius: var(--radius-small); font-size: 14px; font-weight: 600; transition: var(--control-transition); }
  .primary-action { color: #fff; background: var(--primary); border: 1px solid var(--primary); &:hover { background: #247eb5; } }
  .secondary-action { border: 1px solid var(--border); background: var(--surface); &:hover { border-color: var(--primary-light); } }
  .socials { display: flex; align-items: center; gap: 8px; margin-top: 32px; }
  .socials a { display: inline-flex; align-items: center; justify-content: center; min-width: 44px; min-height: 44px; color: var(--muted); transition: var(--control-transition); &:hover { color: var(--text); } }
  .socials > span { width: 1px; height: 18px; background: var(--border); margin: 0 12px; }
  .socials .contact { gap: 8px; font-size: 13px; }

  .hero-art { display: none; }
  html[data-theme="light"] & {
    display: grid;
    grid-template-columns: minmax(0, 1.1fr) minmax(0, 1fr);
    gap: 56px;
    min-height: auto;
    padding-top: 152px;
    padding-bottom: 76px;
    &::before, &::after { display: none; }
    .info { max-width: 100%; min-width: 0; }
    h1 { font-size: clamp(48px, 5.5vw, 78px); }
    .hero-art {
      display: block;
      width: 100%;
      min-height: 390px;
      align-self: stretch;
      border-radius: 18px;
      border: 1px solid rgba(32,43,48,.12);
      background: url(${banner}) 64% center / cover;
      box-shadow: 0 16px 40px rgba(25,38,45,.13);
    }
    .secondary-action { background: transparent; border-color: #a3afb2; }
    .eyebrow { letter-spacing: .14em; }
    .socials { margin-top: 24px; }
    @media (max-width: 1000px) {
      gap: 28px;
      grid-template-columns: minmax(0, 1.15fr) minmax(0, .85fr);
      h1 { font-size: clamp(42px, 6vw, 62px); }
    }
    @media (max-width: 760px) {
      grid-template-columns: 1fr;
      gap: 36px;
      padding-top: 132px;
      padding-bottom: 48px;
      h1 { font-size: clamp(48px, 9vw, 68px); }
      .hero-art { min-height: 0; aspect-ratio: 16 / 9; background-position: center 55%; }
    }
  }

  @media (max-width: 900px) {
    html[data-theme="light"] &::before {
      background-image: linear-gradient(90deg, rgba(197,208,218,.94), rgba(197,208,218,.88) 72%, rgba(197,208,218,.35)), url(${banner});
    }
  }
  @media (max-width: 600px) {
    min-height: 660px; padding-top: 145px; padding-bottom: 70px;
    &::before { background-position: 60% center; opacity: .3; }
    .eyebrow { max-width: 260px; }
    .summary { font-size: 15px; }
  }
`;
