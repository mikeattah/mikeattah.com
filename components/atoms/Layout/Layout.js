import Head from "next/head";
import Footer from "./Footer";
import NavBar from "./NavBar";

export default function Layout({ children, title, description, ...props }) {
  return (
    <>
      <Head>
        <title property="og:title">{title}</title>
        <meta charSet="utf-8" />
        <meta content="width=device-width,initial-scale=1" name="viewport" />
        <meta content={description} property="og:description" />
        <meta content="website" property="og:type" />
        <meta content="https://mikeattah.com" property="og:url" />
        <link href="/images/icons/favicon.ico" rel="icon" />
      </Head>
      <div className="max-w-screen min-h-screen flex flex-col justify-center items-center overflow-y-auto">
        <NavBar />
        <main className="min-w-min min-h-min">{children}</main>
        <Footer />
      </div>
    </>
  );
}
