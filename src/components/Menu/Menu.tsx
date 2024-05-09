import React from "react";

interface MenuProps {
  menuItems: string[];
}

const Menu = (props: MenuProps) => {
  return (
    <>
      {props.menuItems.map((item) => (
        <span key={item}>{item}</span>
      ))}
    </>
  );
};

export default Menu;
