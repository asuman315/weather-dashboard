// CustomInput.test.tsx

import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { CustomInPut } from './CustomInput';
import { InputFieldProps } from './customInput.types';

describe('CustomInPut', () => {
  const mockSubmit = jest.fn();
  const mockChange = jest.fn();

  const inputFieldItems = [
    { label: 'First Name', name: 'firstName', onChange: mockChange, value: '', inputMode: 'text', placeholder: 'Enter your first name'},
    { label: 'Last Name', name: 'lastName', onChange: mockChange, value: '', inputMode: 'text', placeholder: 'Enter your last name'},
    { label: 'Email', name: 'email', onChange: mockChange, value: '', inputMode: 'email', placeholder: 'Enter your email'},
    { label: 'City', name: 'city', onChange: mockChange, value: '', inputMode: 'text', placeholder: 'Enter city'},
  ];

  it('renders without crashing', () => {
    render(<CustomInPut inputFieldItems={inputFieldItems as InputFieldProps[]} onSubmit={mockSubmit} />);
  });

  it('renders correct number of input fields', () => {
    const { getAllByTestId } = render(<CustomInPut inputFieldItems={inputFieldItems as InputFieldProps[]} onSubmit={mockSubmit} />);
    expect(getAllByTestId('text-box')).toHaveLength(inputFieldItems.length);
  });

  it('calls onSubmit when form is submitted', () => {
    const { getByRole } = render(<CustomInPut inputFieldItems={inputFieldItems as InputFieldProps[]} onSubmit={mockSubmit} />);
    fireEvent.submit(getByRole('form'));
    expect(mockSubmit).toHaveBeenCalled();
  });

  it('calls onChange when input field value changes', () => {
    const { getAllByTestId } = render(<CustomInPut inputFieldItems={inputFieldItems as InputFieldProps[]} onSubmit={mockSubmit} />);
    fireEvent.change(getAllByTestId('text-box')[0], { target: { value: 'test' } });
    expect(mockChange).toHaveBeenCalled();
  });
});