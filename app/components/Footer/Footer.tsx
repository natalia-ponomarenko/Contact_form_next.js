"use client";
import Link from "next/link";
import "./Footer.scss";
import { inter, poppins, manrope } from "../../layout";
import { useForm } from "react-hook-form";
import ContactLinksBlock from "../ContactLinksBlock/ContactLinksBlock";

type FormValues = {
  email: string;
};

const Footer = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    mode: "onSubmit", // Set validation mode to "onSubmit"
  });

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
            <ContactLinksBlock margin={5}/>
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
          <h3 className="join-us__header">Join our newsletter</h3>
          <div className="join-us__input-wrapper">
            <form onSubmit={handleSubmit((data) => console.log(data))}>
              <input
                type="text"
                {...register("email", {
                  required: "Fill in your email",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Invalid email address",
                  },
                })}
                placeholder="Your email address"
                className={poppins.className}
              />
              <button type="submit">Subscribe</button>
            </form>
            <small className="join-us__message">{errors.email?.message}</small>
          </div>
          <p className={`${manrope.className} join-us__extra`}>
            * Will send you weekly updates for your better tool management.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
