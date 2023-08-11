import ContactLinksBlock from "../../uiComponents/ContactLinksBlock/ContactLinksBlock";
import "./ContactPage.scss";
import { poppins } from "../../../../utilities/fonts";
import ContactForm from "../../forms/ContactForm/ContactForm";
import SocialLink from "../../uiComponents/SocialLink/SocialLink";

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
            <SocialLink
              href="https://twitter.com/"
              iconSrc="/icons/twitter.svg"
              title="twitter"
            />
            <SocialLink
              href="https://www.instagram.com/"
              iconSrc="/icons/insta.svg"
              title="instagram"
              className="contact-page__socials-ring--white"
            />
            <SocialLink
              href="https://discord.com/"
              iconSrc="/icons/discord.svg"
              title="discord"
            />
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
