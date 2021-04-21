import React, { useState, useEffect } from "react";
import styled, { css } from "styled-components";
import { Link, useLocation } from "react-router-dom";
import { menuData } from "../data/MenuData";
// import { Button } from "./Button";
// import { FaBars } from "react-icons/fa";
import { animateScroll as scroll } from "react-scroll";
import { Link as LinkS } from "react-scroll";
import Bars from "../images/bars.svg";

const Nav = styled.nav`
  height: 60px;
  display: flex;
  justify-content: space-between;
  padding: 1rem 2rem;
  z-index: 100;
  position: fixed;
  width: 100%;
`;

const NavLink = css`
  color: #fff;
  display: flex;
  align-items: center;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  text-decoration: none;

  &.active {
    border-bottom: 3px solid #fff;
    height: 58px;
  }

  @media screen and (max-width: 768px) {
    padding: 0;
  }
`;

const Logo = styled(Link)`
  ${NavLink}
  font-style: italic;
  font-family: "Lato", sans-serif;
  font-size: 24px;
  font-weight: 400;
`;

// const MenuBars = styled(FaBars)`
const MenuBars = styled.i`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
    background-image: url(${Bars});
    background-size: contain;
    height: 40px;
    width: 40px;
    cursor: pointer;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-50%, 25%);
    color: #fff;
  }
`;

const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: -48px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const NavMenuLinks = styled(LinkS)`
  ${NavLink}
  font-size: 1rem;
`;

const NavBtn = styled.div`
  display: flex;
  align-items: center;
  margin-right: 24px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const LogoBox = styled.div`
  width: 50px;
  height: 50px;
  display: block;
  overflow: visible;
  border: 5px solid #fff;
  border-radius: 5px;
  position: relative;
  transform: rotate(0deg);
  transition: transform 0.4s ease-in-out;

  &:hover {
    transform: rotate(90deg);
    transition: transform 0.4s ease-in-out;
  }

  &:hover > span {
    transform: translate(-50%, -50%) rotate(-90deg);
    transition: transform 0.4s ease-in-out;
  }
`;

const LogoText = styled.span`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) rotate(0deg);
  transition: transform 0.4s ease-in-out;
  font-weight: 700;
  font-size: 16px;
`;

const Navbar = ({ toggle }) => {
  const [navbar, setNavbar] = useState(false);
  const location = useLocation();

  const changeBackground = () => {
    if (window.pageYOffset >= 100) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  useEffect(() => {
    const watchScroll = () => {
      window.addEventListener("scroll", changeBackground);
    };

    watchScroll();

    return () => {
      window.removeEventListener("scroll", changeBackground);
    };
  }, []);

  let style = {
    backgroundColor:
      navbar || location.pathname !== "/" ? "#cd853f" : "transparent",
    transition: "0.4s",
  };

  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <Nav style={style}>
      <Logo to="/" onClick={toggleHome}>
        <LogoBox>
          <LogoText>KD</LogoText>
        </LogoBox>
      </Logo>
      <MenuBars onClick={toggle} />
      <NavMenu>
        {menuData.map((item, index) => (
          <NavMenuLinks
            to={item.link}
            key={index}
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
            offset={-60}
          >
            {item.title}
          </NavMenuLinks>
        ))}
      </NavMenu>
      <NavBtn>
        {/* <Button primary="true" to="/contact">
          Contact Us
        </Button> */}
      </NavBtn>
    </Nav>
  );
};

export default Navbar;
