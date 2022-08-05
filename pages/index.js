import React from "react";
import Image from "next/image";

import Layout from "components/atoms";
import StackAnimation from "components/organisms";

import { stackList } from "public/data/stackList";

export default function Home({ title, description, ...props }) {
  return (
    <Layout pageDescription={description} pageTitle={title}>
      <div className="w-full h-full">
        <div className="w-full h-2/3 flex flex-col justify-center items-center relative">
          <Image
            alt="Paaattern's Inn"
            className="-z-10"
            layout="fill"
            objectFit="cover"
            objectPosition="top left"
            src="/public/images/backgrounds/fakurian-design-GJKx5lhwU3M-unsplash.jpg"
          />
          <h1 className="text-center text-black text-6xl sm:text-9xl font-bold leading-tight font-pri mb-3">
            Hi I&apos;m{" "}
            <span className="text-blue-600 text-6xl sm:text-9xl font-bold leading-tight font-pri">
              Mike!
            </span>
          </h1>
          <h3 className="text-black text-center text-3xl sm:text-5xl italic mb-3 font-sec">
            I am a frontend developer
          </h3>
          <StackAnimation stackList={stackList} />
          {/* I am a Fullstack Developer! */}
          {/* I Build Extremely Fast */}
          {/* Web [] Mobile [] and Desktop [] */}
          {/* MERN Stack Apps. */}
        </div>
        <div className="w-full h-1/3 flex flex-row">
          <div className="w-full lg:w-1/2 h-full relative">
            <Image
              alt="Source Paaattern's Inn"
              className=""
              layout="fill"
              objectFit="cover"
              objectPosition="top"
              src="/public/images/backgrounds/paaatterns-022-p-1080.png"
            />
          </div>
          <div className="hidden lg:flex w-1/2 h-full relative">
            <Image
              alt="Paaattern's Inn"
              className=""
              layout="fill"
              objectFit="cover"
              objectPosition="top"
              src="/public/images/backgrounds/paaatterns-024-p-1080.png"
            />
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
