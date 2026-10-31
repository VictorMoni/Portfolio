import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { expect, it } from 'vitest';
import { ProjectsCarousel } from './index';
import ThemeToggle from '../ThemeToggle';
import { sideProjects } from '../../data/projects';

it('switches every project screenshot with the portfolio theme', async () => {
  const previousTheme = document.documentElement.getAttribute('data-theme');
  const previousSaved = localStorage.getItem('portfolio-theme');
  const user = userEvent.setup();
  document.documentElement.setAttribute('data-theme', 'dark');
  localStorage.setItem('portfolio-theme', 'dark');
  const view = render(<><ThemeToggle /><ProjectsCarousel /></>);
  try {
    for (const project of sideProjects) {
      expect(project.lightCover).not.toBe(project.cover);
      expect(screen.getByRole('img', { name: project.title })).toHaveAttribute('src', project.cover);
    }
    await user.click(screen.getByRole('button', { name: 'Switch to light mode' }));
    await waitFor(() => {
      for (const project of sideProjects) {
        expect(screen.getByRole('img', { name: project.title })).toHaveAttribute('src', project.lightCover);
      }
    });
    await user.click(screen.getByRole('button', { name: 'Switch to dark mode' }));
    await waitFor(() => {
      for (const project of sideProjects) {
        expect(screen.getByRole('img', { name: project.title })).toHaveAttribute('src', project.cover);
      }
    });
  } finally {
    view.unmount();
    if (previousTheme === null) document.documentElement.removeAttribute('data-theme');
    else document.documentElement.setAttribute('data-theme', previousTheme);
    if (previousSaved === null) localStorage.removeItem('portfolio-theme');
    else localStorage.setItem('portfolio-theme', previousSaved);
  }
});
