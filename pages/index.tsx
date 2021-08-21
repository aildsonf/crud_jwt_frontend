import type { NextPage } from "next";
import Head from "next/head";
import Login from "../components/Login";

const Home: NextPage = () => {
  return (
    <div className="tracking-wide">
      <Head>
        <title>FCxLabs - Frontend</title>
        <meta name="description" content="Desafio FCxLabs 2021" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Login />
      </main>
    </div>
  );
};

export default Home;
