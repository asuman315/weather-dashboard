import React, { FC, useState } from "react";
import { CheckboxFieldItemsProps } from "./customCheckbox.types";
import { iconSVGs } from "@/assets/iconSVGs";
import { CustomIcon } from "../../custom-icon";

const CustomCheckbox: FC<CheckboxFieldItemsProps> = ({
  labels, handleSelectedLabel
}) => {
  const [checkedItem, setCheckedItem] = useState<string>(labels[0]);

  const handleCheckboxChange = (props: string) => {
    setCheckedItem(props); // set checked item to clicked item and remove the previous checked item
    handleSelectedLabel(props);
  };

  return (
    <section className="flex gap-3">
      {labels.map((label: string) => {
        const isChecked = checkedItem === label;

        return (
          <div
            key={label}
            className="mb-4 flex gap-10px items-center"
            onClick={() => handleCheckboxChange(label)}
          >
            <span className="cursor-pointer">{isChecked ? <CheckedIcon /> : <UnCheckedIcon />}</span>
            <p
              className={`capitalize text-sm font-normal cursor-pointer ${isChecked ? "text-primary-500" : "text-gray-500"}`}
            >
              {label}
            </p>
          </div>
        );
      })}
    </section>
  );
};

const UnCheckedIcon = () => {
  return (
    <CustomIcon
      svg={"checkBoxRoundedUnCheckedIcon"}
      iconColor="text-gray-300"
      iconSize="w-8 h-8"
    />
  );
};

const CheckedIcon = () => {
  return (
    <div className="w-7 h-7 border-2 rounded-full flex justify-center items-center border-primary-500 ">
      <CustomIcon
        svg={"checkBoxRoundedCheckedIcon"}
        iconColor="text-primary-500"
      />
    </div>
  );
};

export default CustomCheckbox;
