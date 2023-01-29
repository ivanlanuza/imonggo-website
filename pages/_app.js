import "../styles/globals.css";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Head>
        <title>imonggo - World&apos;s Easiest Point of Sale</title>
        <meta
          name="description"
          content="Imonggo is great for small and medium retail businesses."
        />
      </Head>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
