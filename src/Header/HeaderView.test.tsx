import { render, waitFor } from "@testing-library/react";
import { HeaderView } from "./HeaderView";
import React from "react";
import userEvent from "@testing-library/user-event";

const onSearchClick = jest.fn();
jest.mock("./HeaderViewModel", () => ({
  useHeaderViewModel: () => ({
    menuItems: ["Item 1", "Item 2"],
    userConfig: {
      initials: "US",
      menuItems: ["Config 1", "Config 2"],
    },
    searchValue: "",
    setSearchValue: () => {},
    onSearchClick: onSearchClick,
  }),
}));

describe("HeaderView test", () => {
  it("should render the HeaderView component", () => {
    const view = render(<HeaderView></HeaderView>);
    expect(view.getByText("Item 1")).toBeTruthy();

    const button = view.getByTestId("SearchIcon");
    userEvent.click(button);
    
    expect(onSearchClick).toHaveBeenCalledTimes(1);
  });
});
