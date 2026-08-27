import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";

import IconButton from "./IconButton";

describe("IconButton", () => {
  it("(Snapshot) renders a default icon button", () => {
    const { asFragment } = render(
      <IconButton aria-label="Close dialog">×</IconButton>
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it("(Snapshot) renders a submit icon button with a custom radius", () => {
    const { asFragment } = render(
      <IconButton aria-label="Submit" radius="lg" type="submit">
        ✓
      </IconButton>
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it("calls onClick when clicked", () => {
    const handleClick = vi.fn();
    render(
      <IconButton aria-label="Close dialog" onClick={handleClick}>
        ×
      </IconButton>
    );

    fireEvent.click(screen.getByRole("button", { name: "Close dialog" }));

    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
