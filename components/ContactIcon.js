import Image from "next/image";

export default function ContactIcon({ ...props }) {
  return (
    <a
      className="transform  sm:scale-135 lg:scale-100"
      href={props.href}
      target="_blank"
      rel="noreferrer"
    >
      <Image
        src={props.src}
        width="30"
        height="30"
        objectPosition="center"
        alt={props.alt}
        className="hover:opacity-50"
      />
    </a>
  );
}
