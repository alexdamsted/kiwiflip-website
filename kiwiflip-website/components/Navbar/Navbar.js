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
  NavTitle,
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
          <Link href="/" passHref>
            <NavTitle>Kiwiflip</NavTitle>
          </Link>
        </NavLogo>
        <MobileIcon onClick={handleClick}>
          {click ? <FaTimes /> : <FaBars />}
        </MobileIcon>
        <NavMenu onClick={handleClick} click={click}>
          <NavItem>
            <Link href="/signup" passHref>
              <NavLinks>Sign Up</NavLinks>
            </Link>
          </NavItem>
          <NavItemButton>
            <Link href="/download" passHref>
              <NavButtonLink>
                <NavButton>Download App</NavButton>
              </NavButtonLink>
            </Link>
          </NavItemButton>
        </NavMenu>
      </NavbarContainer>
    </Nav>
  );
};

export default Navbar;
