import Layout from "../components/Layout";
// import Carousel from "../components/Carousel";
// import Projects from "../components/Projects";

export default function Home({ title, description, ...props }) {
  return (
    <Layout title={`${title} | Home`} description={description}>
      <div className="w-full min-h-min flex flex-col border">HOME</div>
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
