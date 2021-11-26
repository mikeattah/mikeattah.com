import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en-US">
        <Head>
          <link
            href="https://fonts.googleapis.com/css2?family=Charmonman&family=Montez&family=Montserrat&family=Roboto&family=Sacramento&family=WindSong&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
