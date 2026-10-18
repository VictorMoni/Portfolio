import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { Project } from './index'

const project = {
  cover: '/cover.png',
  title: 'Example app',
  lastUpdated: '2025-09-20',
}

describe('Project', () => {
  it('renders project details and working external actions', () => {
    render(<Project {...project} description="A useful app" technologies={["React", "TypeScript"]}
      repoLink="https://github.com/example/app" liveLink="https://example.com" />)

    expect(screen.getByRole('heading', { name: project.title })).toBeVisible()
    expect(screen.getByRole('img', { name: project.title })).toHaveAttribute('src', project.cover)
    expect(screen.getByText('A useful app')).toBeVisible()
    expect(screen.getByLabelText('Technologies')).toHaveTextContent('React')
    expect(screen.getByText("Sep 20, 2025")).toBeVisible()
    for (const [name, url] of [
      ['View repository', 'https://github.com/example/app'],
      ['Live demo', 'https://example.com'],
    ]) {
      const link = screen.getByRole('link', { name })
      expect(link).toHaveAttribute('href', url)
      expect(link).toHaveAttribute('target', '_blank')
      expect(link).toHaveAttribute('rel', 'noopener noreferrer')
    }
  })

  it('marks unavailable demonstrations as disabled without creating a link', () => {
    render(<Project {...project} repoLink="https://github.com/example/app" />)
    expect(screen.getByText('Demo unavailable')).toHaveAttribute('aria-disabled', 'true')
    expect(screen.queryByRole('link', { name: /live demo/i })).not.toBeInTheDocument()
    expect(screen.queryByLabelText(/out of 5 stars/)).not.toBeInTheDocument()
  })

  it('expands and collapses the full description accessibly', async () => {
    const user = userEvent.setup()
    render(<Project {...project} description="Complete project description" engineeringFocus="Checkout architecture" />)
    const toggle = screen.getByRole('button', { name: 'View details' })
    expect(toggle).toHaveAttribute('aria-expanded', 'false')
    expect(document.getElementById(toggle.getAttribute('aria-controls')!)).toHaveTextContent('Complete project description')
    expect(screen.queryByText('Checkout architecture')).not.toBeInTheDocument()
    await user.click(toggle)
    expect(screen.getByText('Checkout architecture')).toBeVisible()
    expect(screen.getByRole('button', { name: 'Show less' })).toHaveAttribute('aria-expanded', 'true')
    await user.click(screen.getByRole('button', { name: 'Show less' }))
    expect(screen.getByRole('button', { name: 'View details' })).toHaveAttribute('aria-expanded', 'false')
  })

  it('omits actions when no destination is provided', () => {
    render(<Project {...project} />)
    expect(screen.queryByRole('link')).not.toBeInTheDocument()
    expect(screen.queryByText('Demo unavailable')).not.toBeInTheDocument()
  })

})
