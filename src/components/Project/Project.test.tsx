import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it, vi } from 'vitest'
import { Project } from './index'

const project = {
  cover: '/cover.png',
  category: 'Personal Project',
  title: 'Example app',
  lastUpdated: '09/20/2025',
}

describe('Project', () => {
  it('renders project details and working external actions', () => {
    render(<Project {...project} description="A useful app" rating={4}
      repoLink="https://github.com/example/app" liveLink="https://example.com" />)

    expect(screen.getByRole('heading', { name: project.title })).toBeVisible()
    expect(screen.getByRole('img', { name: project.title })).toHaveAttribute('src', project.cover)
    expect(screen.getByText('A useful app')).toBeVisible()
    expect(screen.getByLabelText('4 out of 5 stars')).toBeInTheDocument()
    expect(screen.getByText(`Last update: ${project.lastUpdated}`)).toBeVisible()
    for (const [name, url] of [
      ['Repository', 'https://github.com/example/app'],
      ['Demonstration', 'https://example.com'],
    ]) {
      const link = screen.getByRole('link', { name })
      expect(link).toHaveAttribute('href', url)
      expect(link).toHaveAttribute('target', '_blank')
      expect(link).toHaveAttribute('rel', 'noopener noreferrer')
    }
  })

  it('marks unavailable demonstrations as disabled without creating a link', () => {
    render(<Project {...project} repoLink="https://github.com/example/app" />)
    expect(screen.getByText('No Demonstration')).toHaveAttribute('aria-disabled', 'true')
    expect(screen.queryByRole('link', { name: /demonstration/i })).not.toBeInTheDocument()
    expect(screen.queryByLabelText(/out of 5 stars/)).not.toBeInTheDocument()
  })

  it('omits actions when no destination is provided', () => {
    render(<Project {...project} />)
    expect(screen.queryByRole('link')).not.toBeInTheDocument()
    expect(screen.queryByText('No Demonstration')).not.toBeInTheDocument()
  })

  it('calls the favorite callback and reflects the favorite state from props', async () => {
    const user = userEvent.setup()
    const onFavorite = vi.fn()
    const { rerender } = render(<Project {...project} onFavorite={onFavorite} />)
    await user.click(screen.getByRole('button', { name: 'Add project to favorites' }))
    expect(onFavorite).toHaveBeenCalledTimes(1)

    rerender(<Project {...project} onFavorite={onFavorite} isFavorite />)
    await user.click(screen.getByRole('button', { name: 'Remove project from favorites' }))
    expect(onFavorite).toHaveBeenCalledTimes(2)
  })
})
