import Image from "next/image";
import { poppins } from "../../../../utilities/fonts";

type Props = {
  href: string;
  iconSrc: string;
  label: string;
  margin: number;
}

const ContactLink:React.FC<Props> = ({ href, iconSrc, label, margin }) => {
  return (
    <a
      href={href}
      style={{ marginBottom: margin }}
    >
      <Image
        src={iconSrc}
        width={20}
        height={20}
        alt={`${label} icon`}
      />
      <p className={poppins.className}>{label}</p>
    </a>
  );
};

export default ContactLink;
