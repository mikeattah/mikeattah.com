import React from "react";
import Layout from "../components/Layout";
import Carousel from "../components/Carousel";
import ProjectSection from "../components/ProjectSection";

export default function Home({ title, description, ...props }) {
  return (
    <Layout pageDescription={description} pageTitle={title}>
      <main className="w-[900px] h-full flex flex-col border">
        <Carousel />
        <ProjectSection />
      </main>
      <footer></footer>
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
