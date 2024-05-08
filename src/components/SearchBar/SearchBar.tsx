import { Divider, TextField } from "@mui/material";
import React from "react";
import SearchIcon from "@mui/icons-material/Search";

interface SearchBarProps {
  searchValue: string;
  setSearchValue: (value: string) => void;
  onSearchClick: () => void;
}

export const SearchBar = (props: SearchBarProps) => {
  return (
    <TextField
      id="outlined-basic"
      label={props.searchValue ? "" : "Buscar productos, marcas y más…"}
      variant="outlined"
      size="small"
      value={props.searchValue}
      onChange={(e) => {
        props.setSearchValue(e.target.value);
      }}
      sx={{ width: "100%", backgroundColor: "white", borderRadius: 0 }}
      InputProps={{
        endAdornment: (
          <>
            <Divider
              orientation="vertical"
              variant="middle"
              flexItem
              sx={{ marginRight: "5px" }}
            />
            <SearchIcon
              onClick={props.onSearchClick}
              sx={{ cursor: "pointer" }}
            />
          </>
        ),
      }}
      InputLabelProps={{ shrink: false }}
    />
  );
};
