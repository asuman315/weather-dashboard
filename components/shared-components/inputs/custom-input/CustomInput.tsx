import React, { FC, useState } from "react";
import { InputFieldItemsProps, InputFieldProps } from "./customInput.types";
import { CustomIcon } from "../../custom-icon";

export const CustomInPut: FC<InputFieldItemsProps> = ({
  inputFieldItems,
  onSubmit,
}) => {
  const [showPassword, setShowPassword] = useState<boolean>(false);

  return (
    <form onSubmit={onSubmit} role="form" className="w-full">
      {inputFieldItems.map((inputFieldItem: InputFieldProps) => (
        <div key={inputFieldItem.label} className="mb-4">
          <div>
            <label
              className="cursor-pointer capitalize text-sm font-medium text-gray-700"
              htmlFor={inputFieldItem.label}
            >
              {inputFieldItem.label}
            </label>
            {inputFieldItem.required && <span>*</span>}
          </div>
          <div className="relative">
            <input
              data-testid={"text-box"}
              className={`${inputFieldItem.className} border p-3 rounded-lg bg-transparent text-base text-gray-500 border-gray-300 font-normal w-full focus-ring`}
              id={inputFieldItem.label}
              name={inputFieldItem.name}
              placeholder={inputFieldItem.placeholder}
              value={inputFieldItem.value}
              onChange={(e) => inputFieldItem.onChange(e)}
              type={ // show or hide password if the input field is a password field
                inputFieldItem.type === "password"
                  ? showPassword
                    ? "text"
                    : "password"
                  : inputFieldItem.type
              }
              disabled={inputFieldItem.disabled}
              required={inputFieldItem.required}
              autoFocus={inputFieldItem.autoFocus}
              maxLength={inputFieldItem.maxLength}
              minLength={inputFieldItem.minLength}
              pattern={inputFieldItem.pattern}
              readOnly={inputFieldItem.readOnly}
              autoComplete={inputFieldItem.autoComplete}
              inputMode={inputFieldItem.inputMode}
              step={inputFieldItem.step}
              min={inputFieldItem.min}
              max={inputFieldItem.max}
              list={inputFieldItem.list}
              form={inputFieldItem.form}
              multiple={inputFieldItem.multiple}
              accept={inputFieldItem.accept}
              ref={inputFieldItem.inputRef}
              onPaste={inputFieldItem.onPaste}
              onKeyUp={inputFieldItem.onKeyUp}
              onKeyDown={inputFieldItem.onKeyDown}
              onFocus={inputFieldItem.onFocus}
              onBlur={inputFieldItem.onBlur}
              onClick={inputFieldItem.onClick}
              onDoubleClick={inputFieldItem.onDoubleClick}
              onContextMenu={inputFieldItem.onContextMenu}
              onWheel={inputFieldItem.onWheel}
              onDrag={inputFieldItem.onDrag}
              onDragEnd={inputFieldItem.onDragEnd}
              onDragEnter={inputFieldItem.onDragEnter}
              onDragExit={inputFieldItem.onDragExit}
              onDragLeave={inputFieldItem.onDragLeave}
              onDragOver={inputFieldItem.onDragOver}
              onDragStart={inputFieldItem.onDragStart}
              onDrop={inputFieldItem.onDrop}
              onPointerDown={inputFieldItem.onPointerDown}
              onPointerMove={inputFieldItem.onPointerMove}
            />
            {inputFieldItem.type === "password" && (
              <div className="cursor-pointer absolute top-3 right-2" onClick={() => setShowPassword(prevState => !prevState)}>
                {showPassword ? ( // show or hide password icon

                  <CustomIcon svg="eyeIcon" iconColor="text-gray-500" />
                ) : (
                  <CustomIcon svg="eyeSlashIcon" iconColor="text-gray-500" />
                )}
              </div>
            )}
          </div>
          {inputFieldItem.error && <span>{inputFieldItem.error}</span>}
        </div>
      ))}
    </form>
  );
};
