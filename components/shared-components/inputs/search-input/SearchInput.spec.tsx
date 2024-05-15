import React from "react";
import { render } from "@testing-library/react";
import { SearchInput } from "./SearchInput";

describe("SearchInput Component", () => {
  // test to ensure SearchInput component renders without crashing
  it("renders without crashing", () => {
    const onChange = jest.fn();
    const onSearch = jest.fn();

    render(
      <SearchInput
        placeholder="Test Placeholder"
        value="Test Value"
        onChange={onChange}
        onSearch={onSearch}
        searchVariant="one" // You can change this to 'two' to test the second variant
      />
    );
  });

  // test to ensure SearchInput component - with SearchVariantTwo - renders without crashing
  it("renders without crashing", () => {
    const onChange = jest.fn();
    const onSearch = jest.fn();

    render(
      <SearchInput
        placeholder="Test Placeholder"
        value="Test Value"
        onChange={onChange}
        onSearch={onSearch}
        searchVariant="two" // You can change this to 'two' to test the second variant
      />
    );
  });

  // Test to ensure SearchVariantOne is rendered when searchVariant is one
  it('renders SearchVariantOne when searchVariant="one"', () => {
    const onChange = jest.fn();
    const onSearch = jest.fn();

    const { getByTestId } = render(
      <SearchInput
        placeholder="Test Placeholder"
        value="Test Value"
        onChange={onChange}
        onSearch={onSearch}
        searchVariant="one"
      />
    );

    expect(getByTestId("search-variant-one")).toBeInTheDocument(); //
  });

  // Test to ensure SearchVariantTwo is rendered when searchVariant is two
  it('renders SearchVariantTwo when searchVariant="two"', () => {
    const onChange = jest.fn();
    const onSearch = jest.fn();

    const { getByTestId } = render(
      <SearchInput
        placeholder="Test Placeholder"
        value="Test Value"
        onChange={onChange}
        onSearch={onSearch}
        searchVariant="two"
      />
    );

    expect(getByTestId("search-variant-two")).toBeInTheDocument();
  });

  // Test to ensure onSearch function is called when search icon is clicked
  it("calls onSearch function when search icon is clicked", () => {
    const onChange = jest.fn();
    const onSearch = jest.fn();

    const { getByTestId } = render(
      <SearchInput
        placeholder="Test Placeholder"
        value="Test Value"
        onChange={onChange}
        onSearch={onSearch}
        searchVariant="one"
      />
    );

    // test onSearch function is called when search icon is clicked
    const searchIcon = getByTestId("search-icon-one");
    searchIcon.click();

    expect(onSearch).toHaveBeenCalled();
  });
});
