import { Avatar } from "@mui/material";
import React from "react";

interface MenuProps {
  initials: string;
  menuItems: string[];
}

const UserMenu = (props: MenuProps) => {
  return (
    <>
      <Avatar
        sx={{
          bgcolor: "white",
          color: "black",
          width: 24,
          height: 24,
          fontSize: 12,
        }}
      >
        {props.initials}
      </Avatar>
      {props.menuItems.map((item) => (
        <span key={item}>{item}</span>
      ))}
    </>
  );
};

export default UserMenu;
