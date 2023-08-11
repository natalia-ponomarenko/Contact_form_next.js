"use client";
import { poppins } from "../../../../utilities/fonts";
import "./ContactLinksBlock.scss";
import { useEffect, useState } from "react";
import ContactLink from "../ContactLink/ContactLink";

type Props = {
  margin?: number;
};

// The component was separated to reuse Logic, it was possible to write the same
// code in each needed Component. But as the styles are different, I have to handle the window resize.
// I'm not sure which way is better - duplicate the code and write css appropriately,
//or handle window resizing to fit the styles.

const ContactLinksBlock: React.FC<Props> = ({ margin }) => {
  const [shouldApplyMargin, setShouldApplyMargin] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setShouldApplyMargin(window.innerWidth > 800);
    }
  }, []);

  return (
    <div className={`${poppins.className} contacts`}>
      <ContactLink
        href="tel:+1012 3456 789"
        iconSrc="/icons/call.svg"
        label="+1012 3456 789"
        margin={shouldApplyMargin ? margin : 5}
      />
      <ContactLink
        href="mailto:demo@gmail.com"
        iconSrc="/icons/email.svg"
        label="demo@gmail.com"
        margin={shouldApplyMargin ? margin : 5}
      />
      <ContactLink
        href="https://goo.gl/maps/LCSU6QTLmZ1zcu6a6"
        iconSrc="/icons/location.svg"
        label="132 Dartmouth Street Boston, Massachusetts 02156 United States"
        margin={shouldApplyMargin ? margin : 5}
      />
    </div>
  );
};

export default ContactLinksBlock;
