// __tests__/SearchBar.test.tsx
import React from 'react';
import { render } from '@testing-library/react';
import SearchBar from '../components/SearchBar';
import { WeatherContext } from '@/pages/_app';


describe('SearchBar Component', () => {
  const mockContextValue = {
    city: 'Test City',
    setCity: jest.fn(),
    search: jest.fn(),
  };

  it('renders correctly', () => {
    const { getByPlaceholderText } = render(
    <WeatherContext.Provider value={mockContextValue}>
      <SearchBar />
    </WeatherContext.Provider>
  );
    expect(getByPlaceholderText('Enter city name...')).toBeInTheDocument();
  });
});
