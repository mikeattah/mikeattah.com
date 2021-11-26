import Image from "next/image";
import Link from "next/link";

import Layout from "../components/Layout.js";
import StackCard from "../components/StackCard.js";
import HobbyCard from "../components/HobbyCard.js";
import ResumeCard from "../components/ResumeCard.js";

import { stackLogos } from "../stackLogos.js";
import { hobbies } from "../hobbies.js";

import { nanoid } from "nanoid";

export default function About({ title, description, ...props }) {
  return (
    <Layout pageTitle={`${title} | About`}>
      <div className="relative w-full h-full flex flex-col justify-between items-center m-0 p-0">
        <Image
          src="/fakurian-design-GJKx5lhwU3M-unsplash.jpg"
          layout="fill"
          objectFit="cover"
          objectPosition="top left"
          alt="Background sky blue waves"
          className="-z-10"
        />
        {/* top container */}
        <div className="w-11/12 max-h-500 flex flex-col justify-center items-center z-50 bg-transparent py-3">
          {/* picture & text */}
          <div className="w-full max-h-250 flex flex-col sm:flex-row justify-between lg:justify-evenly items-center my-1">
            {/* picture */}
            <div className="relative w-64 lg:w-3/12 h-64 sm:h-80 lg:h-88 rounded-full sm:rounded-2xl shadow-2xl mt-1 mb-3 sm:m-0">
              <Image
                src="/mikeattah-about-002.png"
                layout="fill"
                objectFit="cover"
                objectPosition="top center"
                alt="Picture of Mike Attah"
                className="rounded-full sm:rounded-2xl"
              />
            </div>
            {/* text */}
            <div className="w-full sm:w-7/12 min-h-88 max-h-120 text-left text-black sm:text-lg bg-white rounded-2xl shadow-2xl p-3">
              <h2 className="text-blue-600 font-bold mt-0 mx-0 mb-0.5 py-0">
                <span className="text-yellow-400">&#128075;</span> HELLO!
              </h2>
              <p className="mb-0.5 sm:mb-1.5 lg:mb-0.5">
                I am a civil engineer turned frontend developer!
              </p>
              <p className="mb-0.5 sm:mb-1.5 lg:mb-0.5">
                My rumble-tumble journey into tech started in March 2021 and it
                has so far been an exciting and challenging - but totally worth
                it - experience.
              </p>
              <p className="mb-0.5 sm:mb-1.5 lg:mb-0.5">
                I have completed several courses on freeCodeCamp, Codecademy,
                Sololearn and W3Schools related to HTML, CSS, JavaScript, React
                and more!
              </p>
              <p className="mb-0.5 sm:mb-1.5 lg:mb-0.5">
                Please checkout my &#128679;{" "}
                <Link href="/projects" passHref>
                  <a className="text-blue-600 font-bold hover:underline">
                    Projects
                  </a>
                </Link>{" "}
                page to see what I have built so far. You can also get a copy of
                my resume by clicking or tapping the download icon below. I am
                eager to get started on building amazing projects or products!
              </p>
              <p className="mb-0.5 sm:mb-1.5 lg:mb-0.5">
                I am available for freelance and fulltime roles. And I can build
                Web and Mobile apps with the tools shown below.
              </p>
            </div>
          </div>
          {/* stack and resume */}
          <div className="w-full sm:max-w-full max-h-144 flex flex-col justify-evenly items-center my-1">
            {/* stack */}
            <div className="w-full max-h-112 flex flex-row flex-wrap justify-center items-center m-0 p-0">
              {stackLogos.map((stack, index) => {
                let { tool, src } = stack;
                return <StackCard key={nanoid()} src={src} tool={tool} />;
              })}
            </div>
            {/* resume */}
            <div className="w-full max-h-24 flex flex-row justify-center items-center m-0 p-0">
              <ResumeCard />
            </div>
          </div>
        </div>
        {/* bottom container */}
        <div className="w-11/12 h-40 flex flex-col justify-between items-center my-3 sm:my-5 sm:m-0 pb-2">
          {/* leisure text */}
          <div className="w-full h-1/7 flex flex-row justify-center items-center sm:items-end border-0 sm:border-b border-blue-600 p-0">
            <p className="text-blue-600 font-bold text-sm sm:text-base font-ter pb-1">
              <span className="text-yellow-400">&#10024;</span> Things I do for
              leisure and growth{" "}
              <span className="text-yellow-400">&#10024;</span>
            </p>
          </div>
          {/* leisure cards */}
          <div className="w-full h-4/5 space-x-8 carousel carousel-center rounded-box py-0 px-10 sm:px-0">
            {hobbies.map((hobby, index) => {
              let { src, alt } = hobby;
              return <HobbyCard key={nanoid()} src={src} alt={alt} />;
            })}
          </div>
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
