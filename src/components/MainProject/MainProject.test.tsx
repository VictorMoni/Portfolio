import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { afterEach, expect, it, vi } from 'vitest'
import MainProject from './index'
import ThemeToggle from '../ThemeToggle'

vi.mock('../MediaGallery', () => ({
  default: ({ images }: { images: string[] }) => <div>{images.map((src, index) => <img key={index} src={src} alt={`Capture ${index + 1}`} />)}</div>,
}))

afterEach(() => {
  localStorage.removeItem('portfolio-theme')
  delete document.documentElement.dataset.theme
})

it('keeps all four captures in sync with the saved theme and theme toggle', async () => {
  localStorage.setItem('portfolio-theme', 'light')
  const user = userEvent.setup()
  render(<><ThemeToggle /><MainProject /></>)
  const captures = () => screen.getAllByRole('img', { name: /Capture/ })
  expect(captures()).toHaveLength(4)
  for (const image of captures()) expect(image.getAttribute('src')).toContain('-light.jpg')
  await user.click(screen.getByRole('button', { name: 'Switch to dark mode' }))
  for (const image of captures()) expect(image.getAttribute('src')).not.toContain('-light.jpg')
  await user.click(screen.getByRole('button', { name: 'Switch to light mode' }))
  for (const image of captures()) expect(image.getAttribute('src')).toContain('-light.jpg')
})
