import Link from "next/link";
import { MENU_LIST } from "../../../../utilities/constants";
import NavItem from "../../uiComponents/NavItem/NavItem";
import { inter } from "../../../../utilities/fonts";
import "./Navbar.scss";
import UserLink from "../../uiComponents/UserLink/UserLink";

type Props = {
  setNavActive: (active: boolean) => void;
};

const Navbar: React.FC<Props> = ({ setNavActive }) => {
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
          <UserLink
            className="user-block__ring"
            href="/"
            title="go to user account"
            src="/icons/userIcon.svg"
            alt="user icon"
          />
          <UserLink
            className="user-block__ring"
            href="/"
            title="go to cart"
            src="/icons/cartIcon.svg"
            alt="cart icon"
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
