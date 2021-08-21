import Cookies from "js-cookie";
import cookies from "next-cookies";
import type {
  GetServerSideProps,
  InferGetServerSidePropsType,
  NextPage,
} from "next";
import { useRouter } from "next/dist/client/router";
import Head from "next/head";
import React from "react";
import Users from "../components/Users";

const Main: NextPage = ({
  data,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const router = useRouter();

  const handleLogout = (e: any) => {
    e.preventDefault();
    Cookies.remove("token");
    router.push("/");
  };

  return (
    <div className="tracking- relative">
      <Head>
        <title>FCxLabs - Frontend</title>
        <meta name="description" content="Desafio FCxLabs 2021" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="relative z-10 shadow-md">
        <div className="flex container justify-end">
          <button
            onClick={handleLogout}
            className="my-2 bg-gray-600 text-white rounded-md max-w-max self-center px-4 py-1"
          >
            Logout
          </button>
        </div>
      </header>

      <main>
        <Users data={data} />
      </main>
    </div>
  );
};

export default Main;

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { token } = cookies(ctx);
  const headers = new Headers();
  headers.append("Authorization", "Bearer " + token);

  const res = await fetch("http://localhost:5000/api/users", {
    method: "GET",
    headers,
  });

  const data = await res.json();

  return {
    props: {
      data,
    },
  };
};
