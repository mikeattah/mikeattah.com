import {
  About,
  Contact,
  Home,
  Layout,
  Projects,
  Services,
} from '@components/templates';

export default function Index({ title, description }) {
  return (
    <Layout description={description} title={title}>
      <Home />
      <About />
      <Projects />
      <Services />
      <Contact />
    </Layout>
  );
}

export async function getStaticProps() {
  const configData = await import('../../siteConfig.json');

  return {
    props: {
      title: configData.default.title,
      description: configData.default.description,
    },
  };
}
