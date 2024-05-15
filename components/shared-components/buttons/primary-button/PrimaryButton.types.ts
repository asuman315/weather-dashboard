

export interface PrimaryButtonProps {
  label?: string;
  icon?: React.ReactNode | string; 
  iconPos?: 'left' | 'right';
  buttonClasses?: string;
  onAction?: () => void;
  hideIcon?: boolean;
  iconColor?: string;
  iconWidth?: string;
  iconHeight?: string;
  fullyRounded?: boolean;
  border?: string;
  font?: string;
  textColor?: string;
  bgColor?: string;
  disabled?: boolean;
  [key: string]: any;
  hover?: string;
  textSize?: string;
  padding?: string;
  rounded?: string;
  width?: string;
  textTransform?: string;
  isLoading?: boolean;
}