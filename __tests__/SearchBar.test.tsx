// __tests__/SearchBar.test.tsx
import React from 'react';
import { render } from '@testing-library/react';
import SearchBar from '../components/SearchBar';


describe('SearchBar Component', () => {
  it('renders correctly', () => {
    const { getByPlaceholderText } = render(<SearchBar />);
    expect(getByPlaceholderText('Enter city name...')).toBeInTheDocument();
  });
});
