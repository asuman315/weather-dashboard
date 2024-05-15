import React, { useContext, useState, useEffect, FC } from "react";
import { iconSVGs } from "@/assets/iconSVGs";
import Image from "next/image";
import { PhoneNumberInputProps, CountryCodeProps, CountryProps } from "./phoneNumberInput.types";

// this component is used in the signup and login pages to get the user's phone number and country code

const MAX_PHONE_NUMBER_LENGTH = 15;
const DEFAULT_COUNTRY_CODE = '+1';
const DEFAULT_CODE = 'US';

const PhoneNumberInput: FC<PhoneNumberInputProps> = ({ getFullPhoneNumber, defaultCountryCode, defaultPhoneNumber, required = true}) => {
  const [showCountryCodes, setShowCountryCodes] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState(defaultPhoneNumber);
  const [countryCodes, setCountryCodes] = useState<CountryCodeProps []>([]);
  const [selectedCountryCode, setSelectedCountryCode] = useState<CountryCodeProps>({
    country_code: defaultCountryCode ?? DEFAULT_COUNTRY_CODE,
    code: DEFAULT_CODE,
    flag: "",
    name: "",
  });
  const [searchedCountry, setSearchedCountry] = useState("");
 
  useEffect(() => {
    const fetchCountryCodes = async () => {
      try {
        const response = await fetch("https://restcountries.com/v3.1/all");
        const data = await response.json();
        let countryCodes = data.map((country: CountryProps) => {
          const { name, flags, cca2, idd } = country;
          return {
            name: name.common,
            flag: flags?.png,
            code: cca2,
            country_code: `${idd.root}${idd.suffixes?.[0]}`,
          };
        });
        // Sort country codes in alphabetical order based on name
        countryCodes = countryCodes.sort((a: { name: string; }, b: { name: string; }) =>
          a.name.localeCompare(b.name)
        );
        setCountryCodes(countryCodes);
      } catch (error) {
        console.error("Failed to fetch country codes:", error);
      }
    };
    fetchCountryCodes();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleCountryChange = ({ country_code, code, flag, name }: CountryCodeProps ) => {
    const getCountryCode = code === 'US' ? '+1' : country_code; // set country code to 1 for united states
    setSelectedCountryCode({ country_code : getCountryCode, code, flag, name });
    setShowCountryCodes(false);
  };

  const handlePhoneNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const onlyNumbers = value.replace(/[^0-9]/g, ""); // user should not enter numbers without any special characters and spaces
    if (onlyNumbers.length <= MAX_PHONE_NUMBER_LENGTH)  setPhoneNumber(onlyNumbers);
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) =>  setSearchedCountry(e.target.value);

  useEffect(() => {
    getFullPhoneNumber(`${selectedCountryCode?.country_code ?? defaultCountryCode ?? '+1'}${phoneNumber}`);
  }, [phoneNumber, selectedCountryCode]);

  // get the default country code based on the default country code
  const defaultCode = countryCodes.find((country: CountryCodeProps) => country.country_code === defaultCountryCode)?.code;

  return (
    <article className="article relative">
      <h4 className="heading">Phone number{required && '*'}</h4>
      <div className="flex">
        <div
          className="flex cursor-pointer pl-3 py-1 border-r-0 rounded-l-lg border border-gray-300 items-center"
          onClick={(e) => {
            setShowCountryCodes(!showCountryCodes);
          }}
          data-testid="country-code-dropdown"
        >
          <p className="text-primary-900 text-base font-normal">
            {selectedCountryCode?.code ?? defaultCode}
          </p>
          <div
            className={`text-gray-300 ml-[-5px] mt-[-3px] w-8 h-8 duration-200 ease-in-out ${showCountryCodes && "rotate-180"}`}
          >
            {iconSVGs?.arrowDownTwoIcon}
          </div>
        </div>
        <div className="flex items-center w-full py-2 pl-10px pr-3 border border-l-0 border-primary-10 outline-none  bg-transparent rounded-r-lg border-gray-300">
          <p className="text-gray-500 font-normal pr-1">
            {selectedCountryCode?.country_code}
          </p>
          <input
            type="text"
            value={phoneNumber}
            placeholder="Phone number"
            onChange={(e) => handlePhoneNumberChange(e)}
            autoComplete="on"
            className="font-normal text-gray-500 w-full outline-none"
            inputMode="tel"
            required={required}
          />
        </div>
      </div>
      {showCountryCodes && (
        <div className="absolute h-[500px]  overflow-y-auto bg-primary-50 z-20 rounded-lg py-2" data-testid='country-codes'>
          <div className="px-3">
            <input
              type="text"
              value={searchedCountry}
              onChange={handleSearchChange}
              placeholder="Search countries..."
              className="w-full py-2 px-4 mb-2 rounded-lg border border-gray-300 focus-ring"
            />
          </div>
          {countryCodes
            ?.filter((country) =>
              country.name.toLowerCase().includes(searchedCountry.toLowerCase())
            )
            .map((country) => {
              const { name, flag, code, country_code } = country;
              return (
                <div
                  key={code}
                  className="flex hover:bg-primary-100 pl-4 pr-6 py-2 items-center cursor-pointer group"
                  onClick={() =>
                    handleCountryChange({ name, flag, code, country_code })
                  }
                  data-testid='country'
                >
                  <img
                    src={flag}
                    alt={`Flag image for ${name}`}
                    className="w-6 h-5"
                  />
                  <p className="text-gray-500 font-medium text-sm md:text-base ml-4 group-hover:text-primary-500">
                    {name}
                  </p>
                </div>
              );
            })}
        </div>
      )}
    </article>
  );
};

export default PhoneNumberInput;
