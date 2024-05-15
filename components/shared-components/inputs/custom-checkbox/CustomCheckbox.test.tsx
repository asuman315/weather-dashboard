import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import CustomCheckbox from './CustomCheckbox';

describe('CustomCheckbox', () => {
  const labels = ['male', 'female'];
  const handleSelectedLabel = jest.fn();

  it('renders correctly', () => {
    const { getByText } = render(
      <CustomCheckbox labels={labels} handleSelectedLabel={handleSelectedLabel} />
    );
    
    expect(getByText('male')).toBeInTheDocument();
    expect(getByText('female')).toBeInTheDocument();
  });

  it('calls handleSelectedLabel when a label is clicked', () => {
    const { getByText } = render(
      <CustomCheckbox labels={labels} handleSelectedLabel={handleSelectedLabel} />
    );
    
    fireEvent.click(getByText('female'));
    expect(handleSelectedLabel).toHaveBeenCalledWith('female');
  });

  // label has the right color when clicked
    it('changes the color of the label when clicked', () => {
        const { getByText } = render(
        <CustomCheckbox labels={labels} handleSelectedLabel={handleSelectedLabel} />
        );
        const maleLabel = getByText('male');
        const femaleLabel = getByText('female')
        fireEvent.click(femaleLabel);
        expect(femaleLabel).toHaveClass('text-primary-500');
        expect(maleLabel).toHaveClass('text-gray-500');
    }
    );
});
