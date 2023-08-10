import Link from "next/link";
import { roboto } from "../../layout";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import "./NavItem.scss";

type Props = {
  href: string;
  text: string;
  className?: string;
}

const NavItem: React.FC<Props> = ({ href, text, className }) => {
  const angleDown =
  text === "Features" ? (
    <div className="icon-wrapper">
        <FontAwesomeIcon icon={faAngleDown} />
      </div>
    ) : null;
    
    //Later it is possible to share the active state from the parent to apply styles when link is open
    const isActive = text === 'Contact';

  return (
    <Link
      className={`${roboto.className} link ${className} ${isActive ? 'link--active' : ''}`}
      href={href}
    >
      {text}
      {angleDown}
    </Link>
  );
};

export default NavItem;
