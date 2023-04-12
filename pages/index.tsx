import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import NavBar from "../components/navbar";

export default function Home() {
  return (
    <>
      <Head>
        <title>Grace Rabano</title>
        <meta name="Personal Portfolio Website" content="Made by Grace :)" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="bg-no-repeat bg-cover bg-center bg-fixed bg-[url(/blue-lace.svg)] min-h-screen">
        <main className="container grid grid-cols-12 md:gap-10 justify-between items-center mx-auto px-16 py-16 w-full">
          {/* left */}
          <div className="col-span-4">
            <h1 className="text-center text-2xl">Hello World!</h1>
          </div>
          {/* right */}
          <div className="col-span-8">
            <NavBar/>
          </div>
        </main>

      </div>
    </>
  );
}
