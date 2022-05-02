import React from "react";
import Head from "next/head";
import Navigation from "./Navigation";
import FixedSection from "./FixedSection";

export default function Layout({
  children,
  pageTitle,
  pageDescription,
  ...props
}) {
  return (
    <div>
      <Head>
        <title property="og:title">{pageTitle}</title>
        <meta charSet="utf-8" />
        <meta content="width=device-width,initial-scale=1" name="viewport" />
        <meta content={pageDescription} property="og:description" />
        <meta content="website" property="og:type" />
        <meta content="https://mikeattah.com" property="og:url" />
        <link href="/favicon.ico" rel="icon" />
      </Head>
      <div className="max-w-screen min-h-screen flex flex-col justify-center items-center overflow-y-auto">
        <div className="w-[900px] h-[45px] fixed top-0 right-0"></div>
        <Navigation />
        <FixedSection />
        {children}
        <div className="w-[900px] h-[45px] fixed bottom-0 right-0"></div>
      </div>
    </div>
  );
}
