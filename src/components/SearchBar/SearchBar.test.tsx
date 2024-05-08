import React from "react";
import { SearchBar } from "./SearchBar";
import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe("SearchBar test", () => {
  it("should render the SearchBar component", () => {
    const view = render(
      <SearchBar
        searchValue={""}
        setSearchValue={function (value: string): void {
          throw new Error("Function not implemented.");
        }}
        onSearchClick={function (): void {
          throw new Error("Function not implemented.");
        }}
      />
    );
    expect(view.getAllByText("Buscar productos, marcas y más…")).toBeTruthy();
  });

  it("should trigger function onChange", () => {
    const setSearchValue = jest.fn();
    const view = render(
      <SearchBar
        searchValue={"Celulare"}
        setSearchValue={setSearchValue}
        onSearchClick={function (): void {
          throw new Error("Function not implemented.");
        }}
      />
    );
    const input = view.getByRole("textbox");
    userEvent.type(input, "s");

    expect(setSearchValue).toHaveBeenCalledWith("Celulares");
  });

  it("should trigger function onSearchClick", () => {
    const onSearchClick = jest.fn();
    const view = render(
      <SearchBar
        searchValue={"Celulare"}
        setSearchValue={function (value: string): void {
          throw new Error("Function not implemented.");
        }}
        onSearchClick={onSearchClick}
      />
    );
    const button = view.getByTestId("SearchIcon");
    userEvent.click(button);

    expect(onSearchClick).toHaveBeenCalled();
  });
});
