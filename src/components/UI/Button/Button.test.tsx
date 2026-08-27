import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";

import Button from "./Button";

describe("Button", () => {
  it("(Snapshot) renders a primary button", () => {
    const { asFragment } = render(<Button>Continue</Button>);

    expect(asFragment()).toMatchSnapshot();
  });

  it("(Snapshot) renders as an anchor when href is provided", () => {
    const { asFragment } = render(
      <Button href="/docs" variant="secondary">
        Read more
      </Button>
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it("calls onClick when clicked", () => {
    const handleClick = vi.fn();
    render(<Button onClick={handleClick}>Continue</Button>);

    fireEvent.click(screen.getByRole("button", { name: "Continue" }));

    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it("does not call onClick when disabled", () => {
    const handleClick = vi.fn();
    render(
      <Button onClick={handleClick} disabled>
        Continue
      </Button>
    );

    fireEvent.click(screen.getByRole("button", { name: "Continue" }));

    expect(handleClick).not.toHaveBeenCalled();
  });
});
