import { About, Contact, Home, Layout, Projects } from 'components/templates';

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
  const configData = await import('../../siteConfig.json');

  return {
    props: {
      title: configData.default.title,
      description: configData.default.description,
    },
  };
}
