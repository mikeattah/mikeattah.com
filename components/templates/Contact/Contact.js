import React from "react";
import Image from "next/image";

import Layout from "../components/Layout";
import ContactIcon from "../components/ContactIcon";

export default function Contact({ title, description, ...props }) {
  /*
   * UseEffect(() => {
   *   const text = document.querySelector(".text-string");
   *   const drinkCoffee = "How do you like your coffee?";
   *   const drinkWater = "However, hope you drank water today?";
   */

  /*
   *   SetInterval(() => {
   *     text.innerHTML =
   *       text.textContent === drinkCoffee ? drinkWater : drinkCoffee;
   *   }, 5000);
   *   return clearInterval;
   * }, []);
   */

  return (
    <Layout pageTitle={`${title} | Contact`}>
      <div className="w-full h-full flex flex-col-reverse lg:flex-row-reverse">
        <div className="w-full lg:w-12/25 h-1/3 lg:h-full relative -z-10">
          <Image
            alt="Paaattern's Inn"
            className=""
            layout="fill"
            objectFit="cover"
            objectPosition="top left"
            src="/paaatterns-024-p-1080.png"
          />
        </div>
        <div className="w-full lg:w-13/25 h-2/3 lg:h-full flex flex-col justify-center items-center lg:items-start relative">
          <Image
            alt="Paaattern's Inn"
            className="-z-10"
            layout="fill"
            objectFit="cover"
            objectPosition="top left"
            src="/fakurian-design-GJKx5lhwU3M-unsplash.jpg"
          />
          <div className="p-1.5 flex flex-col items-center lg:items-start">
            <h1 className="text-black text-5xl sm:text-8xl lg:text-6.5xl xl:text-7.5xl font-bold my-6 mx-0 p-0 font-pri">
              Let&apos;s{" "}
              <span className="text-blue-600 text-5xl sm:text-8xl lg:text-6.5xl xl:text-7.5xl font-bold my-6 mx-0 p-0 font-pri">
                build together!
              </span>
            </h1>
            <p className="text-2.5xl sm:text-5xl lg:text-4.5xl xl:text-4.5xl mb-4 text-string font-sec">
              How do you like your coffee?
            </p>
          </div>
          <div className="p-2.5 w-full md:w-9/12 lg:w-3/4 xl:w-1/2 h-2/12 flex flex-row justify-around lg:justify-between items-center lg:items-start">
            <ContactIcon
              alt="GitHub"
              href="https://github.com/mikeattah"
              src="/logo-github.svg"
            />
            <ContactIcon
              alt="LinkedIn"
              href="https://www.linkedin.com/in/mikeattah/"
              src="/logo-linkedin.svg"
            />
            <ContactIcon
              alt="Twitter"
              href="https://twitter.com/mikeattahx"
              src="/logo-twitter.svg"
            />
            <ContactIcon
              alt="Email"
              href="mailto:mailenemona@gmail.com"
              src="/mail.svg"
            />
            <ContactIcon
              alt="Skype Call"
              href="skype:attahmona?call"
              src="/logo-skype.svg"
            />
            <ContactIcon
              alt="Mobile"
              href="tel:+2347013194373"
              src="/phone-portrait.svg"
            />
          </div>
        </div>
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
