import { renderHook } from "@testing-library/react";
import { useHeaderViewModel } from "./HeaderViewModel";

describe("HeaderViewModel test", () => {
  it("should retunr properties", () => {
    const { result } = renderHook(() => useHeaderViewModel());
    expect(result.current.menuItems).toEqual([
      "Categorías",
      "Ofertas",
      "Historial",
      "Supermercado",
      "Moda",
      "Vender",
      "Ayuda/PQR",
    ]);
    const navigate = jest.fn();
    result.current.onSearchClick(navigate);
    expect(navigate).toHaveBeenCalledWith("/items?search=");
  });
});
