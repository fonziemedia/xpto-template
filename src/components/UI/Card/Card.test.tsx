import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import Card from "./Card";

describe("Card", () => {
  it("(Snapshot) renders a default card", () => {
    const { asFragment } = render(<Card>Default content</Card>);

    expect(asFragment()).toMatchSnapshot();
  });

  it("(Snapshot) renders a feature card as a custom element", () => {
    const { asFragment } = render(
      <Card as="section" tone="feature" radius="4xl">
        Featured content
      </Card>
    );

    expect(asFragment()).toMatchSnapshot();
  });
});
