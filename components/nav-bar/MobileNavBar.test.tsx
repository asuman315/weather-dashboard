import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { MobileNavBar } from "./MobileNavBar";
import { navList } from "./navList";
import { MyAppContext } from "../../pages/_app";
import NavItem from "./NavItem";

   // Example of setting up the test environment
   jest.mock("next/router", () => ({
    useRouter() {
      return {
        pathname: "/dashboard/second-item",
        push: jest.fn(),
      };
    },
  }));

describe("MobileNavBar Component", () => {
  it("renders correctly", () => {
    // Define a mock context value with the appropriate structure
    const mockContextValue = {
      isMobileNavOpen: false,
      setIsMobileNavOpen: jest.fn(),
    };

    // Render the MobileNavBar component within the MyAppContext.Provider
    const { getByText, getByPlaceholderText } = render(
      <MyAppContext.Provider value={mockContextValue}>
        <MobileNavBar />
      </MyAppContext.Provider>
    );

    // Asserts that elements such as search input and nav items are present
    expect(getByPlaceholderText("Search")).toBeInTheDocument();
    navList.forEach((item) => {
      expect(getByText(item.label)).toBeInTheDocument();
    });
  });

  it('clicked item is selected when clicked', () => {
    // Mock context and necessary values
    const setIsMobileNavOpen = jest.fn();
    const navList = [
      { label: 'first-item', icon: <span>Icon1</span> },
      { label: 'second-item', icon: <span>Icon2</span> }
    ];

    // Render component within the mocked context provider
    const { getByText } = render(
      <MyAppContext.Provider value={{ setIsMobileNavOpen }}>
        <NavItem item={navList[1]} /> {/* Pass the second item as props */}
      </MyAppContext.Provider>
    );

    // Simulate clicking the navigation item
    const itemToClick = getByText('second-item');
    fireEvent.click(itemToClick);

    // Retrieve the parent div of the clicked item
    const parentDiv = itemToClick.parentElement;

    // Assertions to ensure the correct classes are applied
    expect(parentDiv).toHaveClass('text-primary-500'); // Check if the selected class is applied
    expect(parentDiv).toHaveClass('bg-primary-100'); // Additional class checks can be added here
    expect(parentDiv).toHaveClass('rounded-md');
  });
});