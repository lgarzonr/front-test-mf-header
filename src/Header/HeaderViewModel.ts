import { useCallback, useState } from "react";
import "./HeaderView.scss";

const useHeaderViewModel = () => {
  const menuItems = [
    "Categorías",
    "Ofertas",
    "Historial",
    "Supermercado",
    "Moda",
    "Vender",
    "Ayuda/PQR",
  ];

  const userConfig = {
    initials: "JR",
    menuItems: ["Mis compras", "Favoritos"],
  };

  const [searchValue, setSearchValue] = useState("");

  const onSearchClick = useCallback(
    (fn: any) => {
      fn(`/items?search=${searchValue}`);
    },
    [searchValue]
  );

  return { menuItems, userConfig, searchValue, setSearchValue, onSearchClick };
};

export { useHeaderViewModel };
