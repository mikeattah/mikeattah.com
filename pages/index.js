import Layout from "../components/Layout";
import Carousel from "../components/Carousel";
import Projects from "../components/Projects";

export default function Home({ title, description, ...props }) {
  return (
    <Layout title={`${title} | Home`} description={description}>
      <div className="w-[900px] min-h-min flex flex-col mt-[135px] border">
        <Carousel />
        <Projects />
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
