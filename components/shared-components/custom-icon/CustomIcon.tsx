import { CustomIconProps } from "./customIcon.types";
import React from "react";
import {iconSVGs } from "@/assets/iconSVGs";


export const CustomIcon: React.FC<CustomIconProps> = props => {
    const { svg, iconSize, iconColor, classes, onAction, role } = props;
    return (
      <div className={`${iconSize ?? 'w-6 h-6'} ${iconColor ?? 'text-primary-500'} ${classes}`} onClick={onAction} role={role}>
        { typeof svg === 'string' ? iconSVGs[svg] : svg}
      </div>
    )
  }
