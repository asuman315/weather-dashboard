import React, { FC } from "react";
import { SearchInputProps } from "./SearchInput.types";
import { searchInputStrings } from "./SearchInput.strings";
import {CustomIcon} from "@/components/shared-components";

// --------------------- SearchInput Component ---------------------
// SearchInput Component
// Has two variants of search input component with different styles
// --------------------- SearchInput Component ---------------------
export const SearchInput: FC<SearchInputProps> = (props) => {
  const { searchPlaceholder } = searchInputStrings;

  const {
    placeholder = searchPlaceholder,
    value,
    onChange,
    onSearch,
    searchVariant = "one",
    classes,
  } = props;

  return searchVariant === "one" ? (
    <SearchVariantOne
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      onSearch={onSearch}
      classes={classes}
    />
  ) : (
    <SearchVariantTwo
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      onSearch={onSearch}
      classes={classes}
    />
  );
};

const SearchVariantOne: FC<SearchInputProps> = (props) => {
  const { placeholder = "Search", value, onChange, onSearch, classes } = props;

  return (
    <div className={`relative ${classes}`} data-testid="search-variant-one">
      <input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e)}
        className="border-[1px] w-full text-sm xl:text-base rounded-md px-14px py-10px focus:border-primary-500"
        inputMode="search"
      />
      <div
        className="absolute top-0 right-0 bg-primary-500 flex items-center justify-center rounded-lg cursor-pointer p-9px xl:p-11px"
        data-testid="search-icon-one"
        onClick={onSearch}
      >
        <CustomIcon svg="searchIcon" iconSize="sm-icon" iconColor="text-white" />
      </div>
    </div>
  );
};

const SearchVariantTwo: FC<SearchInputProps> = (props) => {
  const { placeholder = "Search", value, onChange, onSearch, classes } = props;

  return (
    <div className={`relative ${classes}`} data-testid="search-variant-two">
      <div
        className="absolute left-0 px-2 py-10px xl:px-10px xl:py-13px rounded-lg cursor-pointer"
        onClick={onSearch}
      >
        <CustomIcon svg="searchIcon" iconSize="md-icon" iconColor="text-gray-500" />
      </div>
      <input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e)}
        className="pl-10 xl:pl-11 border-[1px] w-full text-sm xl:text-base rounded-md py-10px focus-ring"
        inputMode="search"
      />
    </div>
  );
};
