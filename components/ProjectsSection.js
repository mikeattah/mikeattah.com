import Image from "next/image";
import { nanoid } from "nanoid";
import CodeEditorIcon from "../components/CodeEditorIcon";
import ProjectCard from "../components/ProjectCard";
import { portfolio } from "../public/data/portfolio";

export default function ProjectsSection(props) {
  const numberSet = new Set();
  let numberArray = [];
  let projectArray = [];
  const selectProjects = () => {
    const randomNumber = Math.floor(Math.random() * portfolio.length);
    numberSet.add(randomNumber);
    while ([...numberSet].length < 6) {
      selectProjects();
    }
    if ([...numberSet].length === 6) {
      numberArray = [...numberSet];
      projectArray = [
        portfolio[numberArray[0]],
        portfolio[numberArray[1]],
        portfolio[numberArray[2]],
        portfolio[numberArray[3]],
        portfolio[numberArray[4]],
        portfolio[numberArray[5]],
      ];
    }
  };
  selectProjects();
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
        {projectArray.map((project) => {
          const { src, alt, title, tools, description, repo, site } = project;
          return (
            <ProjectCard
              alt={alt}
              description={description}
              key={nanoid()}
              repo={repo}
              site={site}
              src={src}
              title={title}
              tools={tools}
            />
          );
        })}
      </div>
      <div className="w-full h-16 flex flex-row justify-center items-start m-0 p-0">
        <CodeEditorIcon
          altName="Github"
          hrefName="https://github.com/mikeattah"
          srcName="/githubb.png"
        />
        <CodeEditorIcon
          altName="Codepen"
          hrefName="https://codepen.io/mikeattah"
          srcName="/codepenn.png"
        />
        <CodeEditorIcon
          altName="Codesandbox"
          hrefName="https://codesandbox.io/u/mikeattah"
          srcName="/codesandboxx.png"
        />
      </div>
    </div>
  );
}
