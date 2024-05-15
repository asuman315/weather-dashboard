import { render, fireEvent, waitFor, screen } from '@testing-library/react';
import PhoneNumberInput from './PhoneNumberInput';
import React from 'react'

describe('PhoneNumberInput', () => {
let setFullPhoneNumber: jest.Mock;

beforeEach(() => {
    setFullPhoneNumber = jest.fn();
    global.fetch = jest.fn().mockResolvedValue({
        json: jest.fn().mockResolvedValue([
            {
                name: { common: 'United States' },
                flags: { png: 'https://restcountries.com/data/usa.svg' },
                cca2: 'US',
                idd: { root: '+1', suffixes: [''] },
            },
            {
                name: { common: 'India' },
                flags: { png: 'https://restcountries.com/data/ind.svg' },
                cca2: 'IN',
                idd: { root: '+91', suffixes: [''] },
            },
        ]),
    });
});

it('renders without crashing', () => {
    render(<PhoneNumberInput getFullPhoneNumber={setFullPhoneNumber} />);
});

  it('displays the default phone number and country code', async () => {
    render(<PhoneNumberInput getFullPhoneNumber={setFullPhoneNumber} defaultPhoneNumber={'11 1234 5678'} defaultCountryCode={'+91'} />);

    await waitFor(() => screen.getByPlaceholderText('Phone number'));

    const inputElement = screen.getByPlaceholderText('Phone number') as HTMLInputElement;
    expect(inputElement.value).toBe('11 1234 5678');
    expect(screen.getByText('+91')).toBeInTheDocument();
  });

  it('updates the phone number when typed into the input', async () => {
    render(<PhoneNumberInput getFullPhoneNumber={setFullPhoneNumber} />);

    await waitFor(() => screen.getByPlaceholderText('Phone number'));

    fireEvent.change(screen.getByPlaceholderText('Phone number'), { target: { value: '1234567899' } });
    const inputElement = screen.getByPlaceholderText('Phone number') as HTMLInputElement;
    expect(inputElement.value).toBe('1234567899');
  });

  it('calls getFullPhoneNumber with the full phone number when the phone number is changed', async () => {
    render(<PhoneNumberInput getFullPhoneNumber={setFullPhoneNumber} defaultCountryCode={'+91'} />);

    await waitFor(() => screen.getByPlaceholderText('Phone number'));

    fireEvent.change(screen.getByPlaceholderText('Phone number'), { target: { value: '1234567890' } });

    expect(setFullPhoneNumber).toHaveBeenCalledWith('+911234567890');
  });

  it('updates the country code when a country is selected from the dropdown', async () => {
    render(<PhoneNumberInput getFullPhoneNumber={setFullPhoneNumber} />);

    await waitFor(() => screen.getByText('US'));

    fireEvent.click(screen.getByText('US'));

    await waitFor(() => screen.getByText('India'));

    fireEvent.click(screen.getByText('India'));

    expect(screen.getByText('IN')).toBeInTheDocument();
    expect(screen.getByText('+91')).toBeInTheDocument();
  });
});