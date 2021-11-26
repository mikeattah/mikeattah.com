import Image from "next/image";

export default function ContactIcon({ ...props }) {
  return (
    <a
      className="transform  sm:scale-135 lg:scale-100"
      href={props.href}
      rel="noreferrer"
      target="_blank"
    >
      <Image
        alt={props.alt}
        className="hover:opacity-50"
        height="30"
        objectPosition="center"
        src={props.src}
        width="30"
      />
    </a>
  );
}
