import ContactLinksBlock from "../ContactLinksBlock/ContactLinksBlock";
import "./ContactPage.scss";
import { poppins } from "../../layout";
import Image from "next/image";
import ContactForm from "../ContactForm/ContactForm";

const ContactPage: React.FC = () => {
  return (
    <div className={`${poppins.className} contact-page`}>
      <h1>Contact Us</h1>
      <p className="contact-page__question">
        Any questions or remarks? Just write us a message!
      </p>
      <div className="contact-page__main-wrapper">
        <div className="contact-page__contacts">
          <div>
            <h2>Contact Information</h2>
            <p className="contact-page__paragraph">
              Say something to start a live chat!
            </p>
          </div>
          <ContactLinksBlock margin={45} />
          <div className="contact-page__socials">
            <a
              className="contact-page__socials-ring"
              href="https://twitter.com/"
              target="_blank"
              rel="noopener"
              title="twitter"
            >
              <Image
                src="/icons/twitter.svg"
                width={20}
                height={20}
                alt="twitter icon"
              />
            </a>
            <a
              className="contact-page__socials-ring contact-page__socials-ring--white"
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener"
              title="instagram"
            >
              <Image
                src="/icons/insta.svg"
                width={25}
                height={25}
                alt="instagram icon"
              />
            </a>
            <a
              className="contact-page__socials-ring"
              href="https://discord.com/"
              target="_blank"
              rel="noopener"
              title="discord"
            >
              <Image
                src="/icons/discord.svg"
                width={20}
                height={20}
                alt="discord icon"
              />
            </a>
          </div>
          <div className="contact-page__decor-wrapper">
            <div className="contact-page__decor-small"></div>
            <div className="contact-page__decor-large"></div>
          </div>
        </div>
        <ContactForm />
      </div>
    </div>
  );
};

export default ContactPage;
