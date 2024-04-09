// __tests__/TemperatureToggle.test.tsx
// At the top of your test file
import React from "react";
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import TemperatureToggle from "../components/TemperatureToggle";
import { WeatherContext } from "@/pages/_app";

describe("TemperatureToggle Component", () => {
  const mockContextValue = {
    city: "Test City",
    setCity: jest.fn(),
    search: jest.fn(),
    unit: "metric",
  };

  it("renders correctly", () => {
    const { getByText } = render(
      <WeatherContext.Provider value={mockContextValue}>
        <TemperatureToggle />
      </WeatherContext.Provider>
    );
    expect(getByText(/Switch to Celsius/i)).toBeInTheDocument();
  });
});
