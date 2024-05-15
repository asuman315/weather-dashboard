import React, { FC, useState, useContext, useRef } from "react";
import { useRouter } from "next/router";
import { MyAppContext } from "@/pages/_app";

interface NavItemProps {
  item: { label: string; icon: React.ReactNode, path?: string};
}

// This component renders a single navigation item.
const NavItem: FC<NavItemProps> = (props) => {
  const { setIsMobileNavOpen } = useContext(MyAppContext);
  const { item } = props;
  const router = useRouter();
  const { pathname } = router;
  const currentPage = router.pathname;
  const selectedPage = currentPage.includes(item.label.toLowerCase());

  const getClasses = () => {
    const baseClasses =
      "mb-2 hover:bg-primary-100 hover:rounded-md font-semibold text-gray-800 flex py-2 px-3 items-center gap-3 cursor-pointer text-base group";
    const selectedClasses = selectedPage
      ? "text-primary-500 bg-primary-100 rounded-md"
      : "";
    const selectedIconClasses = selectedPage
      ? "text-primary-500"
      : "text-gray-800";
    const navItemClasses = `${baseClasses} ${selectedClasses}`;
    const iconClasses = `w-6 xl:w-7 h-6 xl:h-7 group-hover:text-primary-500 ${selectedIconClasses}`;
    return { navItemClasses, iconClasses };
  };

  const navigateToPage = () => {
    router.push(`${item.path}`);
    setIsMobileNavOpen(false);
  };

  return (
    <div
      className={getClasses().navItemClasses}
      onClick={navigateToPage}
      role="button"
    >
      <div className={getClasses().iconClasses}>{item.icon}</div>
      <h3 className="capitalize group-hover:text-primary-500 ">{item.label}</h3>
    </div>
  );
};

export default NavItem;
