import { render, screen, within } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import App from './App'

describe('Portfolio', () => {
  it('renders the introduction and navigation targeting existing sections', () => {
    render(<App />)
    expect(screen.getByRole('heading', { level: 1, name: 'Victor Moni' })).toBeVisible()
    expect(screen.getByRole('link', { name: 'Contact me' })).toHaveAttribute('href', '#socialmedia')
    const links = within(screen.getByRole('navigation')).getAllByRole('link')
    expect(links.map(link => link.getAttribute('href'))).toEqual([
      '#home', '#about', '#education', '#projects', '#socialmedia',
    ])
    for (const link of links) {
      const id = link.getAttribute('href')!.slice(1)
      expect(document.getElementById(id)).toBeInTheDocument()
    }
    expect(screen.getByRole('link', { name: 'Resume' })).toHaveAttribute(
      'href', 'https://drive.google.com/file/d/1ZakvZK_1uRrCiVU7DuDbkPOcv_Ptg47b/view?usp=sharing',
    )
  })

  it('shows the featured projects with their repository destinations', () => {
    render(<App />)
    for (const title of ['Sankhya', 'TodoApp', 'TaskyHub']) {
      const heading = screen.getByRole('heading', { name: title })
      const card = heading.closest('article')!
      expect(within(card).getByRole('link', { name: 'View repository' })).toHaveAttribute(
        'href', `https://github.com/victormoni/${title}`,
      )
    }
  })
})
