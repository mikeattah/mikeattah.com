import Head from "next/head";
// Import Image from "next/image";

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
        <meta
          content="width=device-width,initial-scale=1"
          name="viewport"
        />
        <meta
          content={pageDescription}
          property="og:description"
        />
        <meta
          content="website"
          property="og:type"
        />
        <meta
          content="https://mikeattah.com"
          property="og:url"
        />
        <link
          href="/favicon.ico"
          rel="icon"
        />
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
