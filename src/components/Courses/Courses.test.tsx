import { render, screen, within, fireEvent } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { LanguageProvider } from "../../i18n";
import Courses from "./index";
import { courses } from "../../data/courses";

describe("Courses", () => {
  it("shows all four courses with their certificate destinations", () => {
    render(<LanguageProvider><Courses /></LanguageProvider>);
    for (const course of courses) {
      const card = screen.getByRole("heading", { name: course.title }).closest("article")!;
      expect(within(card).getByRole("link", { name: `View certificate: ${course.title}` }))
        .toHaveAttribute("href", course.link);
      expect(within(card).getByText(course.provider)).toBeVisible();
    }
  });

  it("scrolls with the controls and arrow keys without intercepting certificate links", () => {
    render(<LanguageProvider><Courses /></LanguageProvider>);
    const area = screen.getByRole("region", { name: "Courses carousel" });
    vi.spyOn(area.querySelector("article")!, "getBoundingClientRect")
      .mockReturnValue({ width: 330 } as DOMRect);
    const scrollBy = vi.fn();
    area.scrollBy = scrollBy;
    fireEvent.click(screen.getByRole("button", { name: "Next courses" }));
    expect(scrollBy).toHaveBeenLastCalledWith({ left: 350, behavior: "smooth" });
    fireEvent.keyDown(area, { key: "ArrowLeft" });
    expect(scrollBy).toHaveBeenLastCalledWith({ left: -350, behavior: "smooth" });
    fireEvent.click(screen.getByRole("button", { name: "Previous courses" }));
    expect(scrollBy).toHaveBeenLastCalledWith({ left: -350, behavior: "smooth" });
    const calls = scrollBy.mock.calls.length;
    fireEvent.keyDown(screen.getByRole("link", { name: "View certificate: Responsive Web Design" }), { key: "ArrowRight" });
    expect(scrollBy).toHaveBeenCalledTimes(calls);
  });
});
