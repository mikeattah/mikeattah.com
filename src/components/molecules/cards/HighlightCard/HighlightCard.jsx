import Image from "next/image";

function BlogCard({ src, alt }) {
  return (
    <div className="relative w-64 h-full carousel-item m-0 p-0">
      <Image
        alt={alt}
        className="rounded-xl"
        layout="fill"
        objectFit="cover"
        objectPosition="center"
        src={src}
      />
    </div>
  );
}

export default BlogCard;
