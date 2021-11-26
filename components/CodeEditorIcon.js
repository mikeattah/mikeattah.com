import Image from "next/image";

export default function CodeEditorIcon({ ...props }) {
  return (
    <a
      className="relative w-10 h-10 mx-3 rounded-full ring-4 ring-white shadow-lg"
      href={props.hrefName}
      target="_blank"
      rel="noreferrer"
    >
      <Image
        src={props.srcName}
        layout="fill"
        objectFit="cover"
        objectPosition="50% 50%"
        alt={props.altName}
        title={props.altName}
        className="rounded-full"
      />
    </a>
  );
}
