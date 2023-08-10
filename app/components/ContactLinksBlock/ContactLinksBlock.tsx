'use client';
import Image from 'next/image';
import { poppins } from '../../layout';
import './ContactLinksBlock.scss';
import { useEffect, useState } from 'react';

type Props = {
  margin?: number;
}

// The component was separated to reuse Logic, it was possible to write the same
// code in each needed Component. But as the styles are different, I have to handle the window resize.
// I don't know what is the better way - duplicate the code and write css appropriately, 
//or handle window resizing to fit the styles.

const ContactLinksBlock: React.FC<Props> = ({ margin }) => {
  const [shouldApplyMargin, setShouldApplyMargin] = useState(false);
  
  useEffect(() => {
    if (typeof window !== 'undefined') {
      setShouldApplyMargin(window.innerWidth > 800);
    }
  }, []);

  return (
    <div className={`${poppins.className} contacts`}>
      <a href="tel:+1012 3456 789" style={{ marginBottom: shouldApplyMargin ? margin : 5 }}>
        <Image
          src="/icons/call.svg"
          width={20}
          height={20}
          alt="phone icon"
        />
        <p>+1012 3456 789</p>
      </a>
      <a href="mailto:demo@gmail.com" style={{ marginBottom: shouldApplyMargin ? margin : 5 }}>
        <Image
          src="/icons/email.svg"
          width={20}
          height={20}
          alt="phone icon"
        />
        <p>demo@gmail.com</p>
      </a>
      <a
        href="https://goo.gl/maps/LCSU6QTLmZ1zcu6a6"
        target="_blank"
        rel="noopener"
        style={{ marginBottom: shouldApplyMargin ? margin : 5 }}
      >
        <Image
          src="/icons/location.svg"
          width={20}
          height={20}
          alt="phone icon"
        />
        <p>132 Dartmouth Street Boston, Massachusetts 02156 United States</p>
      </a>
    </div>
  );
};

export default ContactLinksBlock;
