import React, { useState } from "react";
import Link from "next/link";
import {
  MobileIcon,
  Nav,
  NavbarContainer,
  NavIcon,
  NavLogo,
} from "./Navbar.elements";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  return (
    <Nav>
      <NavbarContainer>
        <NavLogo>
          <NavIcon />
          Kiwiflip
        </NavLogo>
        <MobileIcon onClick={handleClick}>
          {click ? <FaTimes /> : <FaBars />}
        </MobileIcon>
      </NavbarContainer>
    </Nav>
  );
};

export default Navbar;
