import React from "react";
import Image from "next/image";
import Layout from "./Layout";
import StackAnimation from "./StackAnimation/StackAnimation";
import { stackList } from "../stackList";

export default function FixedSection({ title, description, ...props }) {
  return (
    <Layout pageDescription={description} pageTitle={title}>
      <div className="w-full h-full">
        <section className="w-[300px] h-full flex flex-col justify-center items-center border">
          <div className="w-[200px] h-[200px] rounded-full relative">
            <Image
              alt="Mike Attah"
              className=""
              layout="fill"
              objectFit="cover"
              objectPosition="top center"
              src="/images/personal/mikeattah-about-002.png"
            />
          </div>
          <h1 className="text-center text-black text-6xl sm:text-9xl font-bold leading-tight font-pri mb-3">
            Mike Attah
          </h1>
          <p className="text-black text-center text-3xl sm:text-5xl italic mb-3 font-sec">
            I am a Full Stack Developer of Web, Mobile and Desktop Applications
            and I am passionate about creating beautiful and intuitive user
            experiences.
          </p>
          <StackAnimation stackList={stackList} />
          <button>HIRE ME</button>
        </section>
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
