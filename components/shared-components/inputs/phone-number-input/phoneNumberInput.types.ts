import { Dispatch, SetStateAction } from "react";

export interface PhoneNumberInputProps {
  defaultPhoneNumber?: string;
  defaultCountryCode?: string;
  getFullPhoneNumber: Dispatch<SetStateAction<string>>;
  required?: boolean;
}

export interface CountryCodeProps {
  name: string;
  code: string;
  flag: string;
  country_code: string;
}

export interface CountryProps {
  name: { common: string };
  flags: {png: string};
  cca2: string;
  idd: { root: string; suffixes: string };
}
