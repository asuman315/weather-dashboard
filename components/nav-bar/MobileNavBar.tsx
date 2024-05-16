import React, { useState, useContext, useRef, useEffect } from "react";
import { CustomIcon, SearchInput } from "@/components/shared-components";
import { iconSVGs } from "@/assets/iconSVGs";
import NavItem from "./NavItem";
import { navList } from "./navList";
import { MyAppContext } from "../../pages/_app";

export const MobileNavBar = () => {
  const { buildingIcon, crossIcon } = iconSVGs;
  const { setIsMobileNavOpen, isMobileNavOpen } = useContext(MyAppContext);

  const navBarRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (event: any) =>
      navBarRef.current &&
      !navBarRef.current.contains(event.target as Node) &&
      setIsMobileNavOpen(false);
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div
      className={`lg:hidden z-20 fixed left-0 h-screen top-0 right-0 transform duration-300 ease-in-out ${isMobileNavOpen ? "translate-x-0" : "-translate-x-full"}`}
    >
      <div className="h-screen backdrop-blur-md bg-gray-800 bg-opacity-50"></div>
      <div ref={navBarRef}>
        <div
          className="absolute top-3 right-2"
          onClick={() => setIsMobileNavOpen(false)}
        >
          <CustomIcon
            svg={crossIcon}
            iconSize="w-13 h-13"
            iconColor="text-white"
          />
        </div>
        <div className="absolute py-4 px-18px top-0 border-2 bg-white h-screen w-[75%]">
        <h1 className="font-semibold text-2xl text-gray-800 mr-6 capitalize">
          Kampala Events Hub
        </h1>
          <div className="my-5">
            <SearchInput
              placeholder="Search"
              value=""
              onChange={() => {}}
              searchVariant="two"
            />
          </div>
          <div className="w-full overflow-y-auto">
            {navList.map((item, index) => (
              <NavItem key={index} item={item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
