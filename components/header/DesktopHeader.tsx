import React, { useContext } from "react";
import { SearchInput, PrimaryButton } from "@/components/shared-components";
import { iconSVGs } from "@/assets/iconSVGs";
import { useRouter } from "next/router";
import { MyAppContext } from "@/pages/_app";

// This component is used to render the header for large screens (large tablets and desktop)
const DesktopHeader = () => {

  return (
    <section className="hidden lg:flex flex-col bg-white fixed left-[16rem] xl:left-[19.5rem] right-0 top-0 z-10 ">
      <section
        className={`flex items-center justify-between py-4 pl-3 pr-15px xl:px-22px border-b border-gray-200`}
      >
        <h1 className="font-semibold lg:text-2xl text-gray-800 mr-6 capitalize">
          Kampala Events Hub
        </h1>
        <div className="flex justify-between items-center w-[75%] max-w-6xl">
          <div className="w-[64%]">
            <SearchInput value="" onChange={() => {}} searchVariant="two" />
          </div>
          <div className="flex items-center justify-between">
            <PrimaryButton
              label='Create Event'
              icon={'plusIcon'}
              iconPos="left"
              iconColor="text-white"
              onAction={() => {}}
            />
          </div>
        </div>
      </section>
    </section>
  );
};

export default DesktopHeader;
