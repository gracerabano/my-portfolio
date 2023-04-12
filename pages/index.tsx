import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import NavBar from "../components/navbar";

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <>
      <Head>
        <title>Grace Rabano</title>
        <meta name="Personal Portfolio Website" content="Made by Grace :)" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="bg-no-repeat bg-cover bg-center bg-fixed bg-[url(/blue-lace.svg)] min-h-screen">
        <div className="container grid grid-cols-12 gap-10 justify-center mx-auto px-16 py-16 w-full">
          {/* left */}
          <div className="container col-span-4">
            <div className={`mt-32 sticky flex mx-auto items-center justify-center backdrop-blur-sm bg-sheer rounded-lg px-16 py-16 transform transition-all duration-1000 delay-500 ${isLoaded ? "translate-x-0 opacity-100 fixed" : "-translate-x-10 opacity-0"}`}>
            {isLoaded && (
              <div className="flex items-center justify-between">
                <h1 className=" mx-auto text-center text-2xl px-4">Hello World!</h1>
              </div>
            )} 
            </div>
          </div>
          {/* right */}
          <div className="container col-span-8">
              <header className={`w-full transform transition-all duration-1000 delay-500 ${isLoaded ? "translate-y-0 opacity-100" : "-translate-y-10 opacity-0"}`}>
                {isLoaded && (
                <NavBar/>
                )}
              </header>

              <div className={`mt-10 items-center justify-center w-full h-screen backdrop-blur-sm bg-sheer rounded-lg px-16 py-16 transform transition-all duration-1000 delay-500 ${isLoaded ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}>
                {isLoaded && (
                  <>
                    <h1 className="text-5xl font-bold font-serif">Hello!</h1>
                    <p className="text-lg mt-2 px-2 text-gray-700">
                      My name is Grace Rabano.{" "}
                    </p>
                  </>
                )}
              </div>

          </div>
        </div>
      </div>
    </>
  );
}
