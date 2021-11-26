import Image from "next/image";
// https://mikeattah.com/public

import Layout from "../components/Layout.js";
import CodeEditorIcon from "../components/CodeEditorIcon.js";
import ProjectCard from "../components/ProjectCard.js";

import { portfolio } from "../portfolio.js";

import { nanoid } from "nanoid";

export default function Projects({ title, description, ...props }) {
  let numberSet = new Set();
  let numberArray = [];
  let projectArray = [];

  const selectProjects = () => {
    let randomNumber = Math.floor(Math.random() * portfolio.length);
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
  // console.log(numberSet);

  return (
    <Layout pageTitle={`${title} | Projects`}>
      <div className="relative w-full h-full flex flex-col justify-center items-center">
        <Image
          src="/fakurian-design-GJKx5lhwU3M-unsplash.jpg"
          layout="fill"
          objectFit="cover"
          objectPosition="top left"
          alt="Background sky blue waves"
          className="-z-10"
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
          {projectArray.map((project, index) => {
            let { src, alt, title, tools, description, repo, site } = project;
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
            hrefName="https://github.com/mikeattah"
            srcName="/githubb.png"
            altName="Github"
          />
          <CodeEditorIcon
            hrefName="https://codepen.io/mikeattah"
            srcName="/codepenn.png"
            altName="Codepen"
          />
          <CodeEditorIcon
            hrefName="https://codesandbox.io/u/mikeattah"
            srcName="/codesandboxx.png"
            altName="Codesandbox"
          />
        </div>
      </div>
    </Layout>
  );
}

export async function getStaticProps() {
  const configData = await import(`../siteConfig.json`);

  return {
    props: {
      title: configData.default.title,
      description: configData.default.description,
    },
  };
}
