import { useEffect, useState } from 'react';
import { Moon, Sun } from 'lucide-react';
import styled from 'styled-components';
import { useLanguage } from '../i18n';

type Theme = 'dark' | 'light';

export default function ThemeToggle() {
  const { t } = useLanguage();
  const [theme, setTheme] = useState<Theme>(() => {
    try { return localStorage.getItem('portfolio-theme') === 'light' ? 'light' : 'dark'; }
    catch { return 'dark'; }
  });
  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    try { localStorage.setItem('portfolio-theme', theme); } catch { /* Optional persistence. */ }
  }, [theme]);
  const label = t(theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode');
  return <Toggle type="button" aria-label={label} title={label} aria-pressed={theme === 'light'}
    onClick={() => setTheme(current => current === 'dark' ? 'light' : 'dark')}>
    {theme === 'dark' ? <Sun size={18} aria-hidden="true" /> : <Moon size={18} aria-hidden="true" />}
  </Toggle>;
}

const Toggle = styled.button`
  display: inline-flex; align-items: center; justify-content: center;
  flex-shrink: 0; width: 40px; min-height: 44px; margin-left: 8px;
  border: 1px solid var(--border); border-radius: 8px;
  background: var(--surface); color: var(--text);
  transition: var(--control-transition);
  &:hover { background: var(--hover-surface); }
  @media (max-width: 600px) { width: 30px; margin-left: 4px; }
`;
