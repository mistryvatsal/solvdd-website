import Head from "next/head";
import Header from "@components/Header";
import Footer from "@components/Footer";

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Solvdd Technology Solutions</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Welcome to Solvdd Technology Solutions" />
        <p className="description">Solving tomorrow, today!</p>
      </main>

      <Footer />
    </div>
  );
}
