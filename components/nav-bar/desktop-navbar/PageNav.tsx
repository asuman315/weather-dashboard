import React from "react";
import { navList } from "../navList";
import NavItem from "../NavItem";


// This page navigation component is used to display the navigation items on the left side of the page for large screen.
const PageNav = () => {

  return (
    <section className="w-full overflow-y-auto">
      {navList?.map((item, index) => (
        <NavItem
          key={index}
          item={item}
        />
      ))}
    </section>
  );
};

export default PageNav;
