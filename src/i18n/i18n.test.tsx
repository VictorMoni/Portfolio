import LanguageSwitcher from './LanguageSwitcher';
import { render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import App from '../App';
import { LanguageProvider, useLanguage } from './index';

function Probe() {
  const { language, setLanguage, t } = useLanguage();
  return <button onClick={() => setLanguage('es')}>{language}: {t('Contact me')}</button>;
}

beforeEach(() => {
  localStorage.clear();
  vi.spyOn(navigator, 'language', 'get').mockReturnValue('en-US');
});
afterEach(() => {
  localStorage.clear();
  vi.restoreAllMocks();
});

describe('Portfolio languages', () => {
  it('supports keyboard selection, Escape and outside clicks in the language dropdown', async () => {
    const user = userEvent.setup();
    render(<LanguageProvider><LanguageSwitcher /></LanguageProvider>);
    const trigger = screen.getByRole('button', { name: 'Change language' });
    await user.click(trigger);
    expect(screen.getByRole('button', { name: 'English' })).toHaveFocus();
    await user.keyboard('{Escape}');
    expect(trigger).toHaveFocus();
    expect(trigger).toHaveAttribute('aria-expanded', 'false');
    await user.keyboard('{ArrowDown}{ArrowDown}{Enter}');
    expect(document.documentElement.lang).toBe('es-ES');
    const spanishTrigger = screen.getByRole('button', { name: 'Cambiar idioma' });
    expect(spanishTrigger).toHaveAttribute('aria-expanded', 'false');
    await user.click(spanishTrigger);
    await user.click(document.body);
    expect(spanishTrigger).toHaveAttribute('aria-expanded', 'false');
  });

  it('switches all sections and accessible labels between Portuguese, Spanish and English', async () => {
    const user = userEvent.setup();
    render(<App />);
    await user.click(screen.getByRole('button', { name: 'Change language' }));
    await user.click(screen.getByRole('button', { name: 'Português' }));
    expect(screen.getByRole('link', { name: 'Explorar projetos' })).toHaveAttribute('href', '#projects');
    expect(screen.getByRole('heading', { name: 'Minhas tecnologias' })).toBeVisible();
    expect(screen.getByRole('heading', { name: 'Segurança da Informação' })).toBeVisible();
    expect(screen.getByRole('link', { name: /Ver carta de recomendação:/ })).toHaveAttribute('target', '_blank');
    expect(screen.getAllByRole('link', { name: 'Ver repositório' })).toHaveLength(4);
    const status = screen.getByRole('heading', { name: 'Segurança da Informação' }).closest('article')!;
    expect(within(status).getByText('Em andamento')).toHaveAttribute('data-progress', 'true');
    expect(screen.getByRole('heading', { name: 'Cursos extracurriculares' })).toBeVisible();
    expect(screen.getByRole('link', { name: 'Ver certificado: Excel 2016 com VBA' })).toHaveAttribute('href', 'https://drive.google.com/file/d/1BdgEBuyZhdCB-0D5farGGQDywkCD_uoy/view?usp=sharing');
    expect(document.documentElement.lang).toBe('pt-BR');
    expect(screen.getByRole('link', { name: 'Currículo' })).toHaveAttribute('href', 'https://drive.google.com/file/d/1rNLEny2TgxbY6d6ASpLnipbGo2YWuISH/view?usp=sharing');
    await user.click(screen.getByRole('button', { name: 'Alterar idioma' }));
    await user.click(screen.getByRole('button', { name: 'Español' }));
    expect(screen.getByRole('link', { name: 'Contáctame' })).toHaveAttribute('href', '#socialmedia');
    expect(screen.getByRole('heading', { name: 'Trayectoria' })).toBeVisible();
    expect(screen.getByRole('heading', { name: 'Proyectos personales' })).toBeVisible();
    expect(document.documentElement.lang).toBe('es-ES');
    expect(screen.getByRole('link', { name: 'Currículum' })).toHaveAttribute('href', 'https://drive.google.com/file/d/1IvYgqcfUJrkQwHRuXavWJR-eM0MK6OyR/view?usp=sharing');
    await user.click(screen.getByRole('button', { name: 'Cambiar idioma' }));
    await user.click(screen.getByRole('button', { name: 'English' }));
    expect(screen.getByRole('link', { name: 'Resume' })).toHaveAttribute('href', 'https://drive.google.com/file/d/1ZakvZK_1uRrCiVU7DuDbkPOcv_Ptg47b/view?usp=sharing');
    expect(screen.getByRole('heading', { name: 'Career' })).toBeVisible();
    expect(document.documentElement.lang).toBe('en-US');
  }, 30000);

  it('remembers the selected language across visits', async () => {
    const user = userEvent.setup();
    const view = render(<LanguageProvider><Probe /></LanguageProvider>);
    await user.click(screen.getByRole('button'));
    expect(localStorage.getItem('portfolio-language')).toBe('es');
    view.unmount();
    render(<LanguageProvider><Probe /></LanguageProvider>);
    expect(screen.getByRole('button')).toHaveTextContent('es: Contáctame');
  });

  it('uses the browser language when no preference is saved', () => {
    vi.spyOn(navigator, 'language', 'get').mockReturnValue('pt-BR');
    render(<LanguageProvider><Probe /></LanguageProvider>);
    expect(screen.getByRole('button')).toHaveTextContent('pt: Entre em contato');
  });

  it('ignores invalid saved languages', () => {
    localStorage.setItem('portfolio-language', 'invalid');
    render(<LanguageProvider><Probe /></LanguageProvider>);
    expect(screen.getByRole('button')).toHaveTextContent('en: Contact me');
  });
});
