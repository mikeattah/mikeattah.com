import React from "react";
import Layout from "../components/Layout";
import Carousel from "../components/Carousel";
import ProjectsSection from "../components/ProjectsSection";

export default function Home({ title, description, ...props }) {
  return (
    <Layout pageDescription={description} pageTitle={title}>
      <main className="w-[900px] min-h-min flex flex-col border">
        <Carousel />
        <ProjectsSection />
      </main>
      <footer className="w-[900px] h-[90px] flex flex-row border"></footer>
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
