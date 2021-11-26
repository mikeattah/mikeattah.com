import Image from "next/image";

export default function HobbyCard({ ...props }) {
  return (
    <div className="relative w-64 h-full carousel-item m-0 p-0" key={props.key}>
      <Image
        src={props.src}
        layout="fill"
        objectFit="cover"
        objectPosition="center"
        alt={props.alt}
        className="rounded-xl"
      />
    </div>
  );
}
