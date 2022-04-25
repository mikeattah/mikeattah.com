import React from "react";
import Image from "next/image";
import Layout from "../components/Layout";
import StackAnimation from "../components/StackAnimation/StackAnimation";
import { stackList } from "../stackList";

export default function Home({ title, description, ...props }) {
  return (
    <Layout pageDescription={description} pageTitle={title}>
      <main className="w-[900px] h-full flex flex-col border"></main>
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
