import Image from "next/image";
import { nanoid } from "nanoid";
import { portfolio } from "../public/data/portfolio";

export default function Carousel() {
  return (
    <div className="w-full h-[900px] border">
      {portfolio.map((item) => {
        const { src, alt } = item;
        return (
          <div
            key={nanoid()}
            className="relative w-64 h-full carousel-item m-0 p-0"
          >
            <Image
              src={src}
              alt={alt}
              className="rounded-xl"
              layout="fill"
              objectFit="cover"
              objectPosition="center"
            />
            <div className="absolute w-full h-full"></div>
          </div>
        );
      })}
      <div></div>
    </div>
  );
}
