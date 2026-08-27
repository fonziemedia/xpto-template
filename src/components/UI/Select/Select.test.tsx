import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";

import Select from "./Select";

describe("Select", () => {
  it("(Snapshot) renders a labeled select", () => {
    const { asFragment } = render(
      <Select
        id="status"
        label="Status"
        defaultValue="pending"
        onChange={() => {}}
      >
        <option value="pending">Pending</option>
        <option value="approved">Approved</option>
      </Select>
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it("calls onChange with the selected value", () => {
    const handleChange = vi.fn();
    render(
      <Select
        id="status"
        label="Status"
        defaultValue="pending"
        onChange={handleChange}
      >
        <option value="pending">Pending</option>
        <option value="approved">Approved</option>
      </Select>
    );

    fireEvent.change(screen.getByLabelText("Status"), {
      target: { value: "approved" }
    });

    expect(handleChange).toHaveBeenCalledTimes(1);
    expect(screen.getByLabelText<HTMLSelectElement>("Status").value).toBe(
      "approved"
    );
  });
});
