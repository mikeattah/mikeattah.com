import Image from "next/image";

export default function HobbyCard({ ...props }) {
  return (
    <div
      className="relative w-64 h-full carousel-item m-0 p-0"
      key={props.key}
    >
      <Image
        alt={props.alt}
        className="rounded-xl"
        layout="fill"
        objectFit="cover"
        objectPosition="center"
        src={props.src}
      />
    </div>
  );
}
