import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import { PrimaryButton } from "./PrimaryButton";

describe("PrimaryButton Component", () => {
  // Render Test: Default Props
  it("renders with default label when no props are provided", () => {
    const { getByText } = render(<PrimaryButton />);
    expect(getByText("Coming Today (22)")).toBeInTheDocument();
  });

  // Render Test: Custom Label
  it("renders with custom label when label prop is provided", () => {
    const { getByText } = render(<PrimaryButton label="Custom Label" />);
    expect(getByText("Custom Label")).toBeInTheDocument();
  });

  // Prop Test: Icon Position
  it("renders with icon on the right by default", () => {
    const { getByTestId } = render(<PrimaryButton icon='arrowRightIcon' />);
    const button = screen.getByTestId("right-icon");
    expect(button).toBeInTheDocument();
  });

  it("renders with icon on the left when iconPos is left", () => {
    render(<PrimaryButton iconPos="left" icon='arrowRightIcon' />);
    expect(screen.getByTestId("left-icon")).toBeInTheDocument();
  });

  // Prop Test: Click Event
  it("calls onAction callback when button is clicked", () => {
    const handleClick = jest.fn();
    const { getByText } = render(<PrimaryButton onAction={handleClick} />);
    fireEvent.click(getByText("Coming Today (22)"));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  // Prop Test: Custom Button Classes
  it("applies custom button classes when buttonClasses prop is provided", () => {
    const { container } = render(
      <PrimaryButton buttonClasses="custom-class" />
    );
    const button = container.querySelector("button");
    expect(button).toHaveClass("custom-class");
  });
});
