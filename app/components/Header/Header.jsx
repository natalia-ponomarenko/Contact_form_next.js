'use client';
import NavbarMobile from "../NavbarMobile/NavbarMobile";
import Navbar from "../Navbar/Navbar";
import "./Header.scss";
import { useState } from 'react';
import SlideIn from "../SlideIn/SlideIn";

const Header = () => {
  const [isMobileNavActive, setMobileNavActive] = useState(false);

  return <header className="header">
    {isMobileNavActive ? (
      <SlideIn>
      <NavbarMobile setNavActive={setMobileNavActive} />
      </SlideIn>
    ) : (
      <Navbar setNavActive={setMobileNavActive} />
    )}
    

  </header>;
};

export default Header;
