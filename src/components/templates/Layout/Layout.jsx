/* eslint-disable @next/next/no-page-custom-font */
import Head from 'next/head';
import { Footer, Navigation } from '@components/molecules';

function Layout({ children, description, title }) {
  return (
    <>
      <Head>
        <title property='og:title'>{title}</title>
        <meta charSet='utf-8' />
        <meta content='width=device-width,initial-scale=1' name='viewport' />
        <meta name='robots' content='noodp,noydir' />
        <meta property='description' content={description} />
        <link href='/images/icons/favicon.ico' rel='icon' />
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link rel='preconnect' href='https://fonts.gstatic.com' />
        <link
          href='https://fonts.googleapis.com/css2?family=Charmonman&family=Montez&family=Montserrat&family=Roboto&family=Sacramento&family=WindSong&display=swap'
          rel='stylesheet'
        />
        {/* Open Graph Protocol tags */}
        <meta property='og:locale' content='en_US' />
        <meta property='og:type' content='website' />
        <meta property='og:title' content={title} />
        <meta property='og:description' content={description} />
        <meta property='og:image' content='' />
        <meta property='og:url' content='https://mikeattah.com' />
        {/* Twitter tags */}
        <meta property='twitter:card' content='summary' />
        <meta property='twitter:title' content={title} />
        <meta property='twitter:description' content={description} />
        <meta property='twitter:image' content='' />
        <meta property='twitter:url' content='https://mikeattah.com' />
      </Head>
      <div className='max-w-screen min-h-screen flex flex-col justify-center items-center overflow-y-auto'>
        <Navigation />
        <main className='min-w-min min-h-min flex flex-col justify-center align-middle'>
          {children}
        </main>
        <Footer />
      </div>
    </>
  );
}

export default Layout;
