import Image from "next/image";
import { nanoid } from "nanoid";
import Layout from "../components/Layout";
import StackCard from "../components/StackCard";
import HobbyCard from "../components/HobbyCard";
import OutlineButton from "../components/OutlineButton";
import { stackLogos } from "../public/data/stackLogos";
import { hobbies } from "../public/data/hobbies";
import PageHeader from "../components/PageHeader";

export default function About({ title, description, ...props }) {
  return (
    <Layout pageTitle={`${title} | About`}>
      {/* Top Container */}
      <PageHeader page="About" />
      {/* Bottom Container */}
      <div className="w-11/12 max-h-500 flex flex-col justify-center items-center z-50 bg-transparent py-3">
        {/* Text & Picture */}
        <div className="w-full max-h-250 flex flex-col sm:flex-row justify-between lg:justify-evenly items-center my-1">
          {/* Text */}
          <h2 className="text-blue-600 font-bold mb-0.5">
            <span className="text-yellow-400">&#128075;</span> HELLO!
          </h2>
          <p className="mb-0.5 sm:mb-1.5 lg:mb-0.5">
            I am a civil engineer turned frontend developer!
          </p>
          <p className="mb-0.5 sm:mb-1.5 lg:mb-0.5">
            My rumble-tumble journey into tech started in March 2021 and it has
            so far been an exciting and challenging - but totally worth it -
            experience.
          </p>
          <p className="mb-0.5 sm:mb-1.5 lg:mb-0.5">
            I have completed several courses on freeCodeCamp, Codecademy,
            Sololearn and W3Schools related to HTML, CSS, JavaScript, React and
            more!
          </p>
          <p className="mb-0.5 sm:mb-1.5 lg:mb-0.5">
            Please checkout my Projects page to see what I have built so far.
            You can also get a copy of my resume by clicking or tapping the
            download icon below. I am eager to get started on building amazing
            projects or products!
          </p>
          <p className="mb-0.5 sm:mb-1.5 lg:mb-0.5">
            I am available for freelance and fulltime roles. And I can build Web
            and Mobile apps with the tools shown below.
          </p>
          {/* Picture */}
          <div className="relative w-64 lg:w-3/12 h-64 sm:h-80 lg:h-88 rounded-full sm:rounded-2xl shadow-2xl mt-1 mb-3 sm:m-0">
            <Image
              alt="Picture of Mike Attah"
              className="rounded-full sm:rounded-2xl"
              layout="fill"
              objectFit="cover"
              objectPosition="top center"
              src="/mikeattah-about-002.png"
            />
          </div>
        </div>
        {/* Stack and Resume */}
        <div className="w-full sm:max-w-full max-h-144 flex flex-col justify-evenly items-center my-1">
          {/* Stack */}
          <div className="w-full max-h-112 flex flex-row flex-wrap justify-start items-center">
            {stackLogos.map((stack) => {
              const { tool, src } = stack;
              return <StackCard key={nanoid()} src={src} tool={tool} />;
            })}
          </div>
          {/* Resume */}
          <OutlineButton />
        </div>
        {/* Leisure Activities */}
        <div className="w-11/12 h-40 flex flex-col justify-between items-center my-3 sm:my-5 sm:m-0 pb-2">
          {/* Leisure Text */}
          <p className="text-blue-600 font-bold text-sm sm:text-base font-ter pb-1">
            <span className="text-yellow-400">&#10024;</span> Things I do for
            leisure and growth <span className="text-yellow-400">&#10024;</span>
          </p>
          {/* Leisure Cards */}
          <div className="w-full h-4/5 space-x-8 carousel carousel-center rounded-box px-10 sm:px-0">
            {hobbies.map((hobby) => {
              const { src, alt } = hobby;
              return <HobbyCard key={nanoid()} src={src} alt={alt} />;
            })}
          </div>
        </div>
      </div>
    </Layout>
  );
}

export async function getStaticProps() {
  const configData = await import("../siteConfig.json");
  return {
    props: {
      title: configData.default.title,
      description: configData.default.description,
    },
  };
}
