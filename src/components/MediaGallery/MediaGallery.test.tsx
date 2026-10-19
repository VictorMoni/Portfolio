import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import MediaGallery from './index'

describe('MediaGallery', () => {
  it('renders both navigation arrows immediately for multiple images', () => {
    render(<MediaGallery images={['/first.png', '/second.png']} />)
    expect(screen.getByRole('button', { name: 'Previous images' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Next images' })).toBeInTheDocument()
  })

  it('does not show navigation arrows for a single image', () => {
    render(<MediaGallery images={['/first.png']} />)
    expect(screen.queryByRole('button', { name: 'Previous images' })).not.toBeInTheDocument()
    expect(screen.queryByRole('button', { name: 'Next images' })).not.toBeInTheDocument()
  })

  it('opens the selected image and closes it with Escape, restoring scrolling', async () => {
    const user = userEvent.setup()
    render(<MediaGallery images={['/first.png', '/second.png']} />)
    expect(screen.queryByAltText('expanded')).not.toBeInTheDocument()
    await user.click(screen.getByAltText('media-1'))
    expect(screen.getByAltText('expanded')).toHaveAttribute('src', '/second.png')
    expect(document.body).toHaveStyle({ overflow: 'hidden' })
    await user.keyboard('{Escape}')
    expect(screen.queryByAltText('expanded')).not.toBeInTheDocument()
    expect(document.body.style.overflow).toBe('')
  })

  it('closes the expanded image when clicked', async () => {
    const user = userEvent.setup()
    render(<MediaGallery images={['/first.png']} />)
    await user.click(screen.getByAltText('media-0'))
    await user.click(screen.getByAltText('expanded'))
    expect(screen.queryByAltText('expanded')).not.toBeInTheDocument()
    expect(document.body.style.overflow).toBe('')
  })

  it('restores scrolling when unmounted with an open image', async () => {
    const user = userEvent.setup()
    const { unmount } = render(<MediaGallery images={['/first.png']} />)
    await user.click(screen.getByAltText('media-0'))
    expect(document.body.style.overflow).toBe('hidden')
    unmount()
    expect(screen.queryByAltText('expanded')).not.toBeInTheDocument()
    expect(document.body.style.overflow).toBe('')
  })
})
