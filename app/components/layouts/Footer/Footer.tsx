import Link from "next/link";
import "./Footer.scss";
import { inter, poppins } from "../../../../utilities/fonts";
import ContactLinksBlock from "../../uiComponents/ContactLinksBlock/ContactLinksBlock";
import NewsLetterForm from "../../forms/NewsLetterForm/NewsLetterForm";

const Footer = () => {
  return (
    <footer className={`${poppins.className} footer`}>
      <Link
        href="/"
        className="footer__logo-link"
      >
        <h2 className={`${inter.className} footer__logo`}>Logo Here</h2>
      </Link>
      <hr />
      <div className="footer__group-wrapper">
        <div className="footer__group">
          <div className="footer__column">
            <h3>Reach us</h3>
            <ContactLinksBlock margin={5} />
          </div>
          <div className="footer__column footer__column-right footer__stretch">
            <h3>Company</h3>
            <Link href="/">About</Link>
            <Link href="/">Contact</Link>
            <Link href="/">Blogs</Link>
          </div>
        </div>
        <div className="footer__group">
          <div className="footer__column footer__stretch">
            <h3>Legal</h3>
            <Link href="/">Privacy Policy</Link>
            <Link href="/">Terms & Services</Link>
            <Link href="/">Terms of Use</Link>
            <Link href="/">Refund policy</Link>
          </div>
          <div className="footer__column footer__column-right footer__stretch">
            <h3>Quick Links</h3>
            <Link href="/">TechLabz Keybox</Link>
            <Link href="/">Downloads</Link>
            <Link href="/">Forum</Link>
          </div>
        </div>
        <div className="footer__newsletter-wrapper join-us">
          <NewsLetterForm />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
