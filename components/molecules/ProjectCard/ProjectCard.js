import Image from "next/image";

export default function ProjectCard({
  src,
  alt,
  title,
  tools,
  description,
  repo,
  site,
}) {
  return (
    <div className="w-11/12 sm:w-120 max-h-200 mx-0 mt-0 mb-7 p-0 rounded-2xl shadow-lg transform hover:shadow-2xl z-50">
      <div className="relative w-full h-60">
        <Image
          alt={alt}
          className="rounded-tr-2xl rounded-tl-2xl"
          layout="fill"
          objectFit="cover"
          objectPosition="50% 50%"
          src={src}
        />
      </div>
      <div className="w-full max-h-112 flex flex-col justify-start items-center bg-white rounded-b-2xl m-0 pt-2 px-1.5">
        <div className="w-full max-h-96 flex flex-col justify-start items-center">
          <h2 className="text-blue-600 font-bold text-center text-2xl sm:text-2.5xl font-sec my-0.5">
            {title}
          </h2>
          <p className="text-black text-center font-ter my-0.5">
            {description}
          </p>
          <p className="text-blue-600 text-center font-ter my-0.5">
            Tools: {tools}
          </p>
        </div>
        <div className="w-full h-16 flex flex-row justify-evenly items-center m-0 p-0">
          <a
            className="text-blue-600 hover:text-white hover:bg-blue-600 font-bold border-blue-600 border-2 rounded-xl py-1 px-4 font-ter"
            href={repo}
          >
            View Repo
          </a>
          <a
            className="text-blue-600 hover:text-white hover:bg-blue-600 font-bold border-blue-600 border-2 rounded-xl py-1 px-4 font-ter"
            href={site}
          >
            Live Site
          </a>
        </div>
      </div>
    </div>
  );
}
