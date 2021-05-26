import styled from "styled-components";
import { FaKiwiBird } from "react-icons/fa";
import { Container } from "../../styles/globals";

export const Nav = styled.nav`
  background: white;
  height: 110px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  position: sticky;
  top: 0;
  z-index: 999;
`;

export const NavbarContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  height: 80px;

  ${Container}
`;

export const NavLogo = styled.a`
  font-weight: 600;
  color: #191919;
  justify-self: flex-start;
  cursor: pointer;
  text-decoration: none;
  font-size: 2rem;
  display: flex;
  align-items: center;
`;

export const NavIcon = styled(FaKiwiBird)`
  margin-right: 0.8rem;
  color: #74c947;
`;

export const NavTitle = styled.p`
  color: #74c947;
`;

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 960px) {
    color: #191919;
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 55%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;

  @media screen and (max-width: 960px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 90vh;
    position: absolute;
    top: 110px;
    left: ${({ click }) => (click ? 0 : "-100%")};
    opacity: 1;
    transition: all 0.5s ease;
    background: #171717;
  }
`;

export const NavItem = styled.li`
  height: 80px;
  border-bottom: 2px solid transparent;

  &:hover {
    border-bottom: 2px solid white;
  }

  @media screen and (max-width: 960px) {
    width: 100%;

    &:hover {
      border: none;
    }
  }
`;

export const NavLinks = styled.a`
  font-weight: 600;
  color: #191919;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0.5rem 1rem;
  height: 100%;

  @media screen and (max-width: 960px) {
    color: white;
    text-align: center;
    padding: 2rem;
    width: 100%;
    display: table;

    &:hover {
      cursor: pointer;
      color: #74c947;
      transition: all 0.3s ease;
    }
  }
`;

export const NavButton = styled.button`
  border-radius: 50px;
  background: #74c947;
  white-space: nowrap;
  padding: 20px 30px;
  color: white;
  font-size: 20px;
  font-weight: 600;
  outline: none;
  border: none;
  cursor: pointer;

  &:hover {
    transition: all 0.3s ease-in;
    background: #66b83b;
  }

  @media screen and (max-width: 960px) {
    padding: 12px 64px;
    font-size: 1.2rem;
    width: 100%;
  }
`;

export const NavItemButton = styled.li`
  @media screen and (max-width: 960px) {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
  }
`;

export const NavButtonLink = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  padding: 8px 16px;
  height: 100%;
  width: 100%;
  border: none;
  outline: none;
`;
