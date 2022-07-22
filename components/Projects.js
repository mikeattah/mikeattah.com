import Image from "next/image";
import { nanoid } from "nanoid";
import CodeEditorIcon from "./CodeEditorIcon";
import ProjectCard from "./ProjectCard";
import { portfolio } from "../public/data/portfolio";

export default function ProjectsSection() {
  const uniqueIndices = new Set(),
    selectedProjects = [];
  const selectProjects = () => {
    let randomNumber = Math.floor(Math.random() * portfolio.length);
    uniqueIndices.add(randomNumber);
  };
  while ([...uniqueIndices].length < 6) selectProjects();
  let selectedIndices = [...uniqueIndices],
    i = 0,
    len = selectedIndices.length;
  while (i < len) {
    selectedProjects.push(portfolio[selectedIndices[i]]);
    i++;
  }
  return (
    <div className="relative w-full h-full flex flex-col justify-center items-center">
      <Image
        alt="Background sky blue waves"
        className="-z-10"
        layout="fill"
        objectFit="cover"
        objectPosition="top left"
        src="/fakurian-design-GJKx5lhwU3M-unsplash.jpg"
      />
      <div className="w-full h-16 flex flex-row justify-center items-center my-3">
        <h1 className="text-black text-3xl sm:text-5xl md:text-5.5xl lg:text-5xl font-bold leading-tight font-pri m-0">
          Some of{" "}
          <span className="text-blue-600 text-3xl sm:text-5xl md:text-5.5xl lg:text-5xl font-bold leading-tight font-pri m-0">
            my projects
          </span>
        </h1>
      </div>
      <div className="w-full flex flex-row flex-grow flex-wrap justify-evenly items-start m-0 p-0">
        {selectedProjects.map((project) => {
          const { src, alt, title, tools, description, repo, site } = project;
          return (
            <ProjectCard
              key={nanoid()}
              src={src}
              alt={alt}
              title={title}
              tools={tools}
              description={description}
              repo={repo}
              site={site}
            />
          );
        })}
      </div>
      <div className="w-full h-16 flex flex-row justify-center items-start m-0 p-0">
        <CodeEditorIcon
          href="https://github.com/mikeattah"
          src="/githubb.png"
          alt="Github"
        />
        <CodeEditorIcon
          href="https://codepen.io/mikeattah"
          src="/codepenn.png"
          alt="Codepen"
        />
        <CodeEditorIcon
          href="https://codesandbox.io/u/mikeattah"
          src="/codesandboxx.png"
          alt="Codesandbox"
        />
      </div>
    </div>
  );
}
