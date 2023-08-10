"use client";
import Link from "next/link";
import { MENU_LIST } from "../../../utilities/constants";
import NavItem from "../NavItem/NavItem";
import { inter } from "../../layout";
import { useState } from "react";
import "./Navbar.scss";
import Image from "next/image"

type Props = {
  setNavActive: (active: boolean) => void;
};

const Navbar: React.FC<Props>= ({ setNavActive }) => {
  return (
    <nav className="nav">
      <Link
        href="/"
        className="nav__logo"
      >
        <h3 className={`${inter.className} logo`}>Logo Here</h3>
      </Link>
      <div
        onClick={() => setNavActive(true)}
        className="nav__menu-bar"
      >
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div className="nav__menu-list">
        {MENU_LIST.map((list, i) => {
          const { text } = list;
          return (
            <div
              key={text}
              onClick={() => {
                setNavActive(false);
              }}
              className="nav__link"
            >
              <NavItem {...list} />
            </div>
          );
        })}
        <div className="user-block">
          <Link
            className="user-block__ring"
            href="/"
            title="go to user account"
          >
            <Image
              src="/icons/userIcon.svg"
              height={20}
              width={20}
              alt="user icon"
            />
          </Link>
          <Link
            className="user-block__ring"
            href="/"
            title="go to cart"
          >
            <Image
              src="/icons/cartIcon.svg"
              width={20}
              height={20}
              alt="cart icon"
            />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
