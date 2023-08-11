import NavItem from "../../uiComponents/NavItem/NavItem";
import { MENU_LIST } from "../../../../utilities/constants";
import "./NavbarMobile.scss";
import Link from "next/link";
import { inter } from "../../../../utilities/fonts";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import UserLink from "../../uiComponents/UserLink/UserLink";

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
        <UserLink
          className="mobile-user-block__white-ring"
          href="/"
          title="go to user account"
          src="/icons/userIconWhite.svg"
          alt="user icon"
        />
        <UserLink
          className="mobile-user-block__white-ring"
          href="/"
          title="go to cart"
          src="/icons/cartIconWhite.svg"
          alt="cart icon"
        />
      </div>
    </nav>
  );
};

export default NavbarMobile;
