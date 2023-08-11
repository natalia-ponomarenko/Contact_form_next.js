import Link from "next/link";
import Image from "next/image";

type Props = {
  href: string;
  title: string;
  src: string;
  alt: string;
  className: string
}

const UserLink: React.FC<Props> = ({ href, title, src, alt, className }) => {
  return (
    <Link
      className={className}
      href={href}
      title={title}
    >
      <Image
        src={src}
        width={20}
        height={20}
        alt={alt}
      />
    </Link>
  );
};

export default UserLink;
