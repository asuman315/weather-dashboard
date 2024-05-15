import React, { useContext } from "react";
import { PrimaryButton } from "@/components/shared-components";
import { MyAppContext } from "../../pages/_app";
import { useRouter } from "next/router";
import { iconSVGs } from "@/assets/iconSVGs";

const MobileHeader = () => {
  const { setIsMobileNavOpen } = useContext(MyAppContext) || {};
  const { pathname } = useRouter();

  return (
    <section className="lg:hidden">
      <section className=" flex items-center justify-between pl-4 py-3 pr-2 border-b-[1px] border-gray-200">
        <div
          className="md-icon text-gray-500"
          aria-label="Open menu"
          role="button"
          tabIndex={0}
          onClick={() => setIsMobileNavOpen(true)}
        >
          {iconSVGs?.menuIcon}
        </div>
        <div className="w-fit">
          <PrimaryButton
            label="Create Event"
            icon={iconSVGs?.plusIcon}
            iconPos="left"
            iconColor="text-white"
            width="w-fit"
            onAction={() => {}}
          />
        </div>
      </section>
    </section>
  );
};

export default MobileHeader;
