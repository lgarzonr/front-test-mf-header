import React from "react";
import "./HeaderView.scss";
import { Avatar } from "@mui/material";
import { useHeaderViewModel } from "./HeaderViewModel";
import { SearchBar } from "../components/SearchBar/SearchBar";
import Menu from "../components/Menu/Menu";
import UserMenu from "../components/UserMenu/UserMenu";

const HeaderView = ({ navigate }: any) => {
  const { menuItems, userConfig, searchValue, setSearchValue, onSearchClick } =
    useHeaderViewModel();

  return (
    <header className="meli-header">
      <div className="meli-header__container">
        <div>MELI Logo</div>
        <div className="meli-header__search-control">
          <SearchBar
            searchValue={searchValue}
            setSearchValue={setSearchValue}
            onSearchClick={() => onSearchClick(navigate)}
          />
        </div>
        <div className="meli-header__menu">
          <Menu menuItems={menuItems} />
        </div>
        <div className="meli-header__user-menu">
          <UserMenu
            initials={userConfig.initials}
            menuItems={userConfig.menuItems}
          />
        </div>
      </div>
    </header>
  );
};

export { HeaderView };
