/* eslint-disable @next/next/no-page-custom-font */
import Head from "next/head";
import Footer from "../Footer/Footer";
import NavBar from "../NavBar/NavBar";

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
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Charmonman&family=Montez&family=Montserrat&family=Roboto&family=Sacramento&family=WindSong&display=swap"
          rel="stylesheet"
        />
      </Head>
      <div className="max-w-screen min-h-screen flex flex-col justify-center items-center overflow-y-auto">
        <NavBar />
        <main className="min-w-min min-h-min flex flex-col justify-center align-middle">
          {children}
        </main>
        <Footer />
      </div>
    </>
  );
}
