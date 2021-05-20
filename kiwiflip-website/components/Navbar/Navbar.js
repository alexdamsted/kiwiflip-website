import React, { useState } from "react";
import Link from "next/link";
import {
  MobileIcon,
  Nav,
  NavbarContainer,
  NavButton,
  NavButtonLink,
  NavIcon,
  NavItem,
  NavItemButton,
  NavLinks,
  NavLogo,
  NavMenu,
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
        <NavMenu onClick={handleClick} click={click}>
          <NavItem>
            <Link href="/">
              <NavLinks>Sign Up</NavLinks>
            </Link>
          </NavItem>
          <NavItemButton>
            <NavButtonLink>
              <NavButton>Download App</NavButton>
            </NavButtonLink>
          </NavItemButton>
        </NavMenu>
      </NavbarContainer>
    </Nav>
  );
};

export default Navbar;
