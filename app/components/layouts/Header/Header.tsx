"use client";
import NavbarMobile from "../NavbarMobile/NavbarMobile";
import Navbar from "../Navbar/Navbar";
import "./Header.scss";
import { useState } from "react";
import { animated, useSpring } from "react-spring";

const Header = () => {
  const [isMobileNavActive, setMobileNavActive] = useState(false);

  const slideInAnimation = useSpring({
    minHeight: "100vh",
    width: "100%",
    opacity: isMobileNavActive ? 1 : 0,
    transform: isMobileNavActive ? "translateY(0)" : "translateY(-100%)",
  });

  return (
    <header className="header">
      {isMobileNavActive ? (
        <animated.nav style={slideInAnimation}>
          <NavbarMobile setNavActive={setMobileNavActive} />
        </animated.nav>
      ) : (
        <Navbar setNavActive={setMobileNavActive} />
      )}
    </header>
  );
};

export default Header;
