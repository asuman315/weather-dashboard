

export interface CustomIconProps {
    svg : React.ReactNode | string;
    iconSize?: string;
    iconColor?: string
    classes?: string;
    onAction?: () => void;
    role?: string;
  }