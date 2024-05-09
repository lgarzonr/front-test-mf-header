import { render } from "@testing-library/react";
import Menu from "./Menu";
import React from "react";

describe("Menu test", () => {
  it("should render the Menu component", () => {
    const view = render(
      <Menu
        menuItems={[
          "Categorías",
          "Ofertas",
          "Historial",
          "Supermercado",
          "Moda",
          "Vender",
          "Ayuda/PQR",
        ]}
      />
    );
    expect(view.getAllByText("Categorías")).toBeTruthy();
  });
});
