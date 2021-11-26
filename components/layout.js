import Head from "next/head";
// import Image from "next/image";

import NavBar from "./NavBar.js";

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
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://mikeattah.com" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="max-w-screen h-screen flex flex-col m-0 p-0">
        <nav className="w-full min-h-16 flex items-center">
          <NavBar />
        </nav>
        <main className="w-full flex flex-col flex-grow items-center">
          {children}
        </main>
      </div>
    </div>
  );
}
