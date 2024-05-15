import { render, RenderResult } from "@testing-library/react";
import { CustomIcon } from "./CustomIcon";
import React from "react";

describe("CustomIcon component", () => {
  it("should render the SVG icon with default size and color", () => {
    const svg = <svg />;
    const { container }: RenderResult = render(<CustomIcon svg={svg} />);
    const iconElement = container.firstChild as HTMLElement;
    expect(iconElement).toBeDefined();
    expect(iconElement.innerHTML).toContain("<svg></svg>");
  });

  it("should render the SVG icon with specified size and color", () => {
    const svg = <svg />;
    const iconSize = "w-10 h-10"; // Example size
    const iconColor = "text-primary"; // Example color
    const { container }: RenderResult = render(
      <CustomIcon svg={svg} iconSize={iconSize} iconColor={iconColor} />
    );
    const iconElement = container.firstChild as HTMLElement;
    expect(iconElement).toBeDefined();
    expect(iconElement.className).toContain(iconSize);
    expect(iconElement.className).toContain(iconColor);
  });
});
