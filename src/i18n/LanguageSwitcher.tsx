import { useEffect, useId, useRef, useState } from 'react';
import { Check, ChevronDown } from 'lucide-react';
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
  const { language, setLanguage, t } = useLanguage();
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const panelId = useId();
  const current = languages.find(option => option.code === language)!;

  useEffect(() => {
    if (!open) return;
    containerRef.current?.querySelector<HTMLButtonElement>('[aria-pressed="true"]')?.focus();
    const dismiss = (event: PointerEvent) => {
      if (!containerRef.current?.contains(event.target as Node)) setOpen(false);
    };
    document.addEventListener('pointerdown', dismiss);
    return () => document.removeEventListener('pointerdown', dismiss);
  }, [open]);

  return <Selector ref={containerRef}
    onBlur={event => { if (!event.currentTarget.contains(event.relatedTarget)) setOpen(false); }}
    onKeyDown={event => {
      if (event.key === 'Escape') { event.preventDefault(); setOpen(false); triggerRef.current?.focus(); }
    }}>
    <button ref={triggerRef} type="button" className="language-trigger" aria-label={t('Change language')}
      title={current.label} aria-expanded={open} aria-controls={panelId}
      onClick={() => setOpen(value => !value)}
      onKeyDown={event => { if (event.key === 'ArrowDown') { event.preventDefault(); setOpen(true); } }}>
      <Flag code={language} /><span>{current.short}</span>
      <ChevronDown size={13} className={open ? 'chevron open' : 'chevron'} aria-hidden="true" />
    </button>
    {open && <div className="language-panel" id={panelId} role="group" aria-label={t('Choose a language')}
      onKeyDown={event => {
        const keys = ['ArrowDown', 'ArrowUp', 'Home', 'End'];
        if (!keys.includes(event.key)) return;
        event.preventDefault();
        const options = Array.from(event.currentTarget.querySelectorAll('button'));
        const index = options.indexOf(document.activeElement as HTMLButtonElement);
        const next = event.key === 'Home' ? 0 : event.key === 'End' ? options.length - 1 :
          (index + (event.key === 'ArrowDown' ? 1 : -1) + options.length) % options.length;
        options[next]?.focus();
      }}>
      {languages.map(option => <button key={option.code} type="button" lang={option.code}
        aria-label={option.label} aria-pressed={language === option.code}
        onClick={() => { setLanguage(option.code); setOpen(false); triggerRef.current?.focus(); }}>
        <Flag code={option.code} /><span>{option.label}</span>
        {language === option.code && <Check size={15} className="check" aria-hidden="true" />}
      </button>)}
    </div>}
  </Selector>;
}

const Selector = styled.div`
  position: relative;
  flex-shrink: 0;
  margin-left: 12px;
  padding-left: 12px;
  border-left: 1px solid var(--border);
  button {
    display: flex; align-items: center; gap: 9px; min-height: 44px;
    padding: 8px 10px; color: var(--text); background: transparent;
    border: 1px solid transparent; border-radius: 8px; font: inherit;
    font-size: 12px; transition: var(--control-transition);
  }
  button:hover { background: var(--hover-surface); }
  .language-trigger { gap: 7px; }
  .language-trigger[aria-expanded="true"] { background: var(--active-background); border-color: var(--active-border); }
  .chevron { color: var(--muted); transition: transform .3s var(--control-easing); }
  .chevron.open { transform: rotate(180deg); }
  .language-panel {
    position: absolute; right: 0; top: calc(100% + 16px); width: 188px;
    padding: 6px; border: 1px solid var(--border); border-radius: 12px;
    background: var(--surface); box-shadow: 0 12px 32px rgba(0,0,0,.15);
    animation: fade-up .18s ease-out; z-index: 12;
  }
  .language-panel button { width: 100%; text-align: left; padding: 10px; gap: 12px; }
  .language-panel button[aria-pressed="true"] { background: var(--active-background); color: var(--primary-light); }
  .check { margin-left: auto; }
  svg { flex-shrink: 0; display: block; border-radius: 2px; }
  @media (max-width: 600px) {
    margin-left: 6px; padding-left: 6px;
    .language-trigger { gap: 5px; padding: 6px; }
    .language-trigger > svg:first-child { width: 20px; }
  }
`;
