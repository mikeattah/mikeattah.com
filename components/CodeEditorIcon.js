import Image from "next/image";

export default function CodeEditorIcon({ ...props }) {
  return (
    <a
      className="relative w-10 h-10 mx-3 rounded-full ring-4 ring-white shadow-lg"
      href={props.hrefName}
      rel="noreferrer"
      target="_blank"
    >
      <Image
        alt={props.altName}
        className="rounded-full"
        layout="fill"
        objectFit="cover"
        objectPosition="50% 50%"
        src={props.srcName}
        title={props.altName}
      />
    </a>
  );
}
