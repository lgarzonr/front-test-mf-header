import { render } from "@testing-library/react";
import UserMenu from "./UserMenu";
import React from "react";

describe("UserMenu test", () => {
  it("should render the Menu component", () => {
    const view = render(
      <UserMenu
        menuItems={[
          "Categorías",
          "Ofertas",
        ]}
        initials="LG"
      />
    );
    expect(view.getAllByText("Categorías")).toBeTruthy();
    expect(view.getAllByText("LG")).toBeTruthy();
  });
});
