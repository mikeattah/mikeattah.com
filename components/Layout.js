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
      <div className="max-w-screen min-h-screen flex flex-col m-0 p-0">
        <Navigation />
        <FixedSection />
        {children}
      </div>
    </div>
  );
}
