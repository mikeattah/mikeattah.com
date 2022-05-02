import React from "react";
import Layout from "../components/Layout";
import ContactIcon from "../components/ContactIcon";
import PageHeader from "../components/PageHeader";

export default function Contact({ title, description, ...props }) {
  return (
    <Layout pageTitle={`${title} | Contact`}>
      <PageHeader page="Contact" />
      <div className="w-full lg:w-13/25 h-2/3 lg:h-full flex flex-col justify-center items-center lg:items-start relative">
        <div className="p-1.5 flex flex-col justify-center items-center">
          <ContactIcon icon="" text="Abuja, Nigeria" />
          <ContactIcon icon="" text="+2347013194373" />
          <ContactIcon icon="" text="mailmikeattah@gmail.com" />
        </div>
        <form
          action=""
          className="p-1.5 flex flex-col items-center lg:items-start"
        >
          <input type="text" className="" placeholder="Your Name" />
          <input type="email" className="" placeholder="Your Email" />
          <input type="text" className="" placeholder="Subject" />
          <textarea className="" placeholder="Message" />
          <input type="submit" title="Send Message" />
        </form>
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
