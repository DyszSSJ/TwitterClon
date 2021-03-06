import Head from "next/head";

const Layout = ({ children, paginas }) => {
  return (
    <>
      <Head>
        <title>Twitter Clon - {paginas}</title>
        <link
          href="https://fonts.googleapis.com/css2?family=Outfit:wght@400;700;900&display=swap"
          rel="stylesheet"
        />
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/img/TwitterIcon.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
      </Head>
      {/* <Header/> */}
      {children}
      {/* <Footer/> */}
    </>
  );
};

export default Layout;
