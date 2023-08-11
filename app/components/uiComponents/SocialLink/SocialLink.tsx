import Image from "next/image";

type Props = {
  href: string;
  iconSrc: string;
  title: string;
  className?: string;
};

const SocialLink: React.FC<Props> = ({ href, iconSrc, title, className }) => {
  return (
    <a
      className={`contact-page__socials-ring ${className}`}
      href={href}
      target="_blank"
      rel="noopener"
      title={title}
    >
      <Image
        src={iconSrc}
        width={20}
        height={20}
        alt={`${title} icon`}
      />
    </a>
  );
};

export default SocialLink;
