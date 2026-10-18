import { fireEvent, render, screen } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'
import Header from './index'

describe('Header', () => {
  it('provides named navigation links for keyboard and screen reader users', () => {
    render(<Header />)
    expect(screen.getByRole('navigation', { name: 'Main navigation' })).toBeVisible()
    for (const [name, href] of [
      ['Home', '#home'], ['Career', '#about'],
      ['Education', '#education'], ['Projects', '#projects'], ['Social media', '#socialmedia'],
    ]) {
      expect(screen.getByRole('link', { name })).toHaveAttribute('href', href)
    }
  })

  it('tracks the active section using document coordinates, including nested sections', () => {
    const about = document.createElement('section')
    about.id = 'about'
    document.body.append(about)
    vi.spyOn(about, 'getBoundingClientRect').mockReturnValue({ top: -50 } as DOMRect)
    // A nested section can have offsetTop=0 despite being far down the document.
    vi.spyOn(window, 'scrollY', 'get').mockReturnValue(1200)
    vi.spyOn(document.documentElement, 'scrollHeight', 'get').mockReturnValue(5000)
    try {
      render(<Header />)
      fireEvent.scroll(window)
      expect(screen.getByRole('link', { name: 'Career' })).toHaveAttribute('aria-current', 'location')
      expect(screen.getByRole('link', { name: 'Home' })).not.toHaveAttribute('aria-current')
    } finally {
      about.remove()
    }
  })

  it('marks the final section as active at the bottom even when it is shorter than the viewport', () => {
    const footer = document.createElement('section')
    footer.id = 'socialmedia'
    document.body.append(footer)
    vi.spyOn(footer, 'getBoundingClientRect').mockReturnValue({ top: 300 } as DOMRect)
    vi.spyOn(window, 'scrollY', 'get').mockReturnValue(1200)
    vi.spyOn(window, 'innerHeight', 'get').mockReturnValue(800)
    vi.spyOn(document.documentElement, 'scrollHeight', 'get').mockReturnValue(2000)
    try {
      render(<Header />)
      expect(screen.getByRole('link', { name: 'Social media' })).toHaveAttribute('aria-current', 'location')
    } finally {
      footer.remove()
    }
  })
})
