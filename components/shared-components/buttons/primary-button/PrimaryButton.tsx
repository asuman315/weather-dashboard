import React, { FC } from "react";
import { PrimaryButtonProps } from "./PrimaryButton.types";
import { iconSVGs } from "@/assets/iconSVGs";

/* ------------------------------ context ---------------------------------------
  - This component is used to display a primary button in the UI
  - The button can be used to trigger an action
  - The button can have an icon on the left or right side of the text
  - The button can have a different size (sm, md, lg, xl, 2xl)
 --------------------------------- context -------------------------------------*/
export const PrimaryButton: FC<PrimaryButtonProps> = (props) => {
  const {
    label = "Coming Today (22)",
    icon,
    iconPos = "right",
    buttonClasses = "w-full uppercase", //
    onAction,
    hideIcon = false,
    iconColor = "text-primary-500",
    iconWidth = "w-6",
    iconHeight = "h-6",
    fullyRounded = false,
    border,
    font,
    textColor,
    bgColor,
    hover,
    textSize,
    padding,
    rounded,
    width,
    textTransform,
    disabled,
    isLoading = false,
  } = props;

  const renderedIcon = typeof icon === "string" ? iconSVGs[icon] : icon;

  return (
    <button
      className={`flex flex-row items-center justify-center ${
        textTransform ?? "capitalize"
      } ${width ?? "w-full"} ${rounded ?? "roounded-xl"}  ${
        padding ?? "py-3 xl:py-4 px-5"
      } ${textSize ?? "text-sm xl:text-base"} ${
        hover ?? "hover:bg-primary-600"
      } ${bgColor ?? "bg-primary-500"} ${textColor ?? "text-white"} ${
        font ?? "font-semibold"
      } gap-1 duration-300 ease-in-out cursor-pointer ${
        border ?? "border-[1px]"
      } ${fullyRounded ? "rounded-full" : "rounded-lg"} ${buttonClasses}`}
      onClick={onAction}
      aria-label={label}
      role="button"
    >
      {iconPos === "left" && icon && (
        <span
          data-testid="left-icon"
          className={`${iconColor}  ${iconWidth} ${iconHeight}`}
        >
          {renderedIcon}
        </span>
      )}
      {isLoading ? <LoadingSpinner /> : <span>{label}</span>}
      {iconPos === "right" && icon && (
        <span
          data-testid="right-icon"
          className={`${iconColor}  ${iconWidth} ${iconHeight}`}
        >
          {renderedIcon}
        </span>
      )}
    </button>
  );
};

const LoadingSpinner = () => {
  return (
    <div className="flex gap-4 justify-center items-center">
      <div className="animate-spin rounded-full h-6 w-6 border-t-2 border-b-2 border-white"></div>
      <span>Loading...</span>
    </div>
  );
};
