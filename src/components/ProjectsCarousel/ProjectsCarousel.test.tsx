import { fireEvent, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it, vi } from 'vitest'
import { ProjectsCarousel } from './index'

describe('ProjectsCarousel', () => {
  it('allows keyboard users to scroll projects in both directions', async () => {
    const user = userEvent.setup()
    render(<ProjectsCarousel />)
    const scrollArea = screen.getByRole('heading', { name: 'Sankhya' }).closest('article')!.parentElement!
    const scrollBy = vi.fn()
    scrollArea.scrollBy = scrollBy

    screen.getByRole('button', { name: 'Next projects' }).focus()
    await user.keyboard('{Enter}')
    expect(scrollBy).toHaveBeenLastCalledWith({ left: 350, behavior: 'smooth' })
    screen.getByRole('button', { name: 'Previous projects' }).focus()
    await user.keyboard(' ')
    expect(scrollBy).toHaveBeenLastCalledWith({ left: -350, behavior: 'smooth' })
  })

  it('keeps an active drag across rerenders and stops dragging on mouse up', () => {
    const { rerender } = render(<ProjectsCarousel />)
    const scrollArea = screen.getByRole('heading', { name: 'Sankhya' }).closest('article')!.parentElement!
    scrollArea.scrollLeft = 200
    fireEvent.mouseDown(scrollArea, { clientX: 200 })
    rerender(<ProjectsCarousel />)
    fireEvent.mouseMove(scrollArea, { clientX: 160 })
    expect(scrollArea.scrollLeft).toBe(260)
    fireEvent.mouseUp(scrollArea)
    fireEvent.mouseMove(scrollArea, { clientX: 120 })
    expect(scrollArea.scrollLeft).toBe(260)
  })
})
