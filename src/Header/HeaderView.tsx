import React from "react";
import "./HeaderView.scss";
import { Avatar, TextField } from "@mui/material";
import { useSearchParams } from "react-router-dom";
import { useHeaderViewModel } from "./HeaderViewModel";

const HeaderView = ({ navigate }: any) => {
  const { menuItems, userConfig, searchValue, setSearchValue, onSearchClick } =
    useHeaderViewModel();

  return (
    <header className="meli-header">
      <div className="meli-header__container">
        <div>MELI Logo</div>
        <div className="meli-header__search-control">
          <TextField
            id="outlined-basic"
            label={searchValue ? "" : "Buscar productos, marcas y más…"}
            variant="outlined"
            size="small"
            value={searchValue}
            onChange={(e) => {
              setSearchValue(e.target.value);
            }}
            sx={{ width: "100%", backgroundColor: "white", borderRadius: 0 }}
            InputProps={{
              endAdornment: (
                <button
                  className="meli-header__search-control__button"
                  type="submit"
                  onClick={() => {
                    onSearchClick(navigate);
                  }}
                >
                  Buscar
                </button>
              ),
            }}
            InputLabelProps={{ shrink: false }}
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
