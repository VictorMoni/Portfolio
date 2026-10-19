import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { afterEach, beforeEach, expect, it } from 'vitest';
import ThemeToggle from './ThemeToggle';

beforeEach(() => {
  localStorage.removeItem('portfolio-theme');
  delete document.documentElement.dataset.theme;
});
afterEach(() => {
  localStorage.removeItem('portfolio-theme');
  delete document.documentElement.dataset.theme;
});

it('switches themes and remembers the choice after remounting', async () => {
  const user = userEvent.setup();
  const view = render(<ThemeToggle />);
  expect(document.documentElement).toHaveAttribute('data-theme', 'dark');
  await user.click(screen.getByRole('button', { name: 'Switch to light mode' }));
  expect(document.documentElement).toHaveAttribute('data-theme', 'light');
  expect(localStorage.getItem('portfolio-theme')).toBe('light');
  view.unmount();
  render(<ThemeToggle />);
  expect(screen.getByRole('button', { name: 'Switch to dark mode' })).toHaveAttribute('aria-pressed', 'true');
  await user.click(screen.getByRole('button', { name: 'Switch to dark mode' }));
  expect(document.documentElement).toHaveAttribute('data-theme', 'dark');
});
