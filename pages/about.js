import Image from "next/image";
import styles from "../styles/About.module.scss";
import Layout from "../components/layout.js";

export default function About({ title, description, ...props }) {
  return (
    <Layout pageTitle={`${title} | About`}>
      <div className={styles.container}>
        <div className={styles.image}></div>
        <div className={styles.content}>
          <div className={styles.contenttop}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Vestibulum morbi blandit cursus risus. In fermentum posuere urna nec
            tincidunt. Id leo in vitae turpis massa sed. Cras fermentum odio eu
            feugiat pretium. Ut enim blandit volutpat maecenas volutpat blandit.
            Vulputate mi sit amet mauris commodo. Eget gravida cum sociis
            natoque penatibus et. Sem et tortor consequat id. Id eu nisl nunc mi
            ipsum faucibus. Sollicitudin nibh sit amet commodo nulla facilisi
            nullam vehicula. Fermentum dui faucibus in ornare quam. Ut etiam sit
            amet nisl purus in mollis. Ut tristique et egestas quis ipsum
            suspendisse ultrices gravida dictum. Gravida neque convallis a cras
            semper auctor neque vitae. Aliquet nibh praesent tristique magna sit
            amet purus gravida quis.
          </div>
          <div className={styles.contentbottom}>
            Sed nisi lacus sed viverra. Euismod in pellentesque massa placerat
            duis ultricies lacus sed turpis. Id porta nibh venenatis cras sed
            felis eget velit. Pellentesque habitant morbi tristique senectus et
            netus. Blandit massa enim nec dui nunc. Sed pulvinar proin gravida
            hendrerit. Pellentesque dignissim enim sit amet venenatis urna
            cursus eget. Sagittis nisl rhoncus mattis rhoncus urna neque
            viverra. Feugiat scelerisque varius morbi enim nunc faucibus a
            pellentesque. Fames ac turpis egestas sed tempus urna. Ac turpis
            egestas sed tempus urna et pharetra. Eu ultrices vitae auctor eu
            augue ut lectus arcu bibendum. Aenean vel elit scelerisque mauris
            pellentesque pulvinar pellentesque habitant morbi. Diam maecenas sed
            enim ut sem. Turpis nunc eget lorem dolor. Eget velit aliquet
            sagittis id consectetur purus ut. Leo in vitae turpis massa sed
            elementum tempus egestas sed. Non sodales neque sodales ut etiam sit
            amet nisl purus. Turpis cursus in hac habitasse platea dictumst
            quisque. Eget sit amet tellus cras adipiscing enim eu.
          </div>
        </div>
      </div>
    </Layout>
  );
}

export async function getStaticProps() {
  const configData = await import(`../siteconfig.json`);

  return {
    props: {
      title: configData.default.title,
      description: configData.default.description,
    },
  };
}
