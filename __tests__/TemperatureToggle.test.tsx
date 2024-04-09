// __tests__/TemperatureToggle.test.tsx
// At the top of your test file
import React from 'react';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import TemperatureToggle from '../components/TemperatureToggle';

describe('TemperatureToggle Component', () => {
  it('renders correctly', () => {
    const { getByText } = render(<TemperatureToggle />);
    expect(getByText('Switch to Fahrenheit')).toBeInTheDocument();
  });
});
