import React from "react";
import "./HeaderView.scss";
import { Avatar } from "@mui/material";
import { useHeaderViewModel } from "./HeaderViewModel";
import { SearchBar } from "./Components/SearchBar/SearchBar";

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
          {menuItems.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
        <div className="meli-header__user-menu">
          <Avatar
            sx={{
              bgcolor: "white",
              color: "black",
              width: 24,
              height: 24,
              fontSize: 12,
            }}
          >
            {userConfig.initials}
          </Avatar>
          {userConfig.menuItems.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
      </div>
    </header>
  );
};

export { HeaderView };
