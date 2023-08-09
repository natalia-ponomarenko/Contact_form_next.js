import NavItem from "../NavItem/NavItem";
import { MENU_LIST } from "@/utilities/constants";
import "./NavbarMobile.scss";
import Link from "next/link";
import { inter } from "../../layout";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

const NavbarMobile = ({ setNavActive }) => {
  return (
    <nav className="mobile-nav">
      <div className="mobile-nav__header-group">
        <Link
          href="/"
          className="mobile-nav__logo"
        >
          <h3 className={`${inter.className} mobile-logo`}>Logo Here</h3>
        </Link>
        <div>
          <FontAwesomeIcon
            icon={faXmark}
            className="mobile-nav__close-icon"
            onClick={() => {
              setNavActive(false);
            }}
          />
        </div>
      </div>
      <div className="mobile-nav__menu-list">
        {MENU_LIST.map((list) => {
          const { text } = list;
          return (
            <div
              key={text}
              onClick={() => {
                setNavActive(false);
              }}
            >
              <NavItem
                className="mobile-nav__link"
                {...list}
              />
            </div>
          );
        })}
      </div>
        <div className="mobile-user-block">
          <Link
            className="mobile-user-block__white-ring"
            href="/"
            title="go to user account"
          >
            <Image
              src="/icons/userIconWhite.svg"
              height={20}
              width={20}
              alt="user icon"
            />
          </Link>
          <Link
            className="mobile-user-block__white-ring"
            href="/"
            title="go to cart"
          >
            <Image
              src="/icons/cartIconWhite.svg"
              width={20}
              height={20}
              alt="cart icon"
            />
          </Link>
        </div>
    </nav>
  );
};

export default NavbarMobile;
