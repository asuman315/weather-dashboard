import React from 'react';

interface CustomIconProps {
    svg : React.ReactNode;
    iconSize?: string;
    iconColor?: string
  }

  const CustomIcon: React.FC<CustomIconProps> = props => {
    const { svg, iconSize, iconColor } = props;
    return (
      <div className={`${iconSize ?? 'w-6 h-6'} ${iconColor ?? 'text-gray-500'}`}>
        {svg}
      </div>
    )
  };

  export default CustomIcon;