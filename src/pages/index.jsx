import Layout from "components/templates";
import About from "components/templates";
import Contact from "components/templates";
import Home from "components/templates";
import Projects from "components/templates";
// import Services from "components/templates";

export default function Index({ title, description, ...props }) {
  return (
    <Layout pageDescription={description} pageTitle={title}>
      {/*
      <Home />
      <About />
      <Projects />
      <Contact />
      */}
    </Layout>
  );
}

export async function getStaticProps() {
  const configData = await import("../../siteConfig.json");

  return {
    props: {
      title: configData.default.title,
      description: configData.default.description,
    },
  };
}
