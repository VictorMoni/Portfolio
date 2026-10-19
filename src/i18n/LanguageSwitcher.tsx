import styled from 'styled-components';
import { useLanguage } from './index';
import type { Language } from './index';

const languages: { code: Language; label: string; short: string }[] = [
  { code: 'pt', label: 'Português', short: 'PT' },
  { code: 'en', label: 'English', short: 'EN' },
  { code: 'es', label: 'Español', short: 'ES' },
];

function Flag({ code }: { code: Language }) {
  return <svg viewBox="0 0 28 20" width="22" height="16" aria-hidden="true" focusable="false">
    {code === 'pt' ? <>
      <path fill="#229e45" d="M0 0h28v20H0z" />
      <path fill="#ffdf36" d="m14 2 12 8-12 8L2 10z" />
      <circle cx="14" cy="10" r="4.5" fill="#244b96" />
      <path d="M10 8.5q4-.5 8 3" stroke="white" strokeWidth="1" fill="none" />
    </> : code === 'en' ? <>
      <path fill="#fff" d="M0 0h28v20H0z" />
      {[0, 3.08, 6.16, 9.24, 12.32, 15.4, 18.48].map(y => <path key={y} fill="#b83b49" d={`M0 ${y}h28v1.54H0z`} />)}
      <path fill="#294675" d="M0 0h12v10.8H0z" />
      {[2, 5.5, 9].flatMap(x => [2, 5.4, 8.5].map(y => <circle key={`${x}-${y}`} cx={x} cy={y} r=".65" fill="white" />))}
    </> : <>
      <path fill="#bd2839" d="M0 0h28v20H0z" />
      <path fill="#f9ca46" d="M0 5h28v10H0z" />
      <path fill="#bd2839" d="M7 8h4v5H7z" />
    </>}
  </svg>;
}

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();
  return <Selector role="group" aria-label="Português / English / Español">
    {languages.map(option => <button key={option.code} type="button" lang={option.code}
      aria-label={option.label} title={option.label} aria-pressed={language === option.code}
      onClick={() => setLanguage(option.code)}>
      <Flag code={option.code} /><span>{option.short}</span>
    </button>)}
  </Selector>;
}

const Selector = styled.div`
  display: flex;
  gap: 4px;
  margin-left: 12px;
  padding-left: 12px;
  border-left: 1px solid var(--border);
  button {
    display: flex; flex-direction: column; align-items: center; justify-content: center;
    gap: 3px; width: 40px; min-height: 44px; padding: 4px;
    background: transparent; color: var(--muted); border: 1px solid transparent;
    border-radius: 8px; font-size: 9px; letter-spacing: .05em;
    transition: background .2s, border-color .2s;
  }
  button[aria-pressed="true"] { background: #173044; border-color: #31566e; color: var(--text); }
  button:hover { background: #262b31; }
  svg { display: block; border-radius: 2px; }
  @media (max-width: 600px) {
    margin-left: 5px; padding-left: 5px; gap: 1px;
    button { width: 32px; }
    svg { width: 20px; }
  }
`;
