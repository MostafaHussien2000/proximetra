import React from "react";
import { IoClose, IoMenu } from "react-icons/io5";

function BurgerMenu({ isOpen, setIsOpen }) {
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div
      onClick={toggleMenu}
      style={{ fontSize: "25px", cursor: "pointer" }}
      className="burger-menu"
    >
      {isOpen ? <IoClose /> : <IoMenu />}
    </div>
  );
}

export default BurgerMenu;
