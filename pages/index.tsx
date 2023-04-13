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
        <div className="container grid grid-cols-12 gap-10 justify-center mx-auto my-auto px-16 py-16 w-full">
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

              <div className={`flex flex-col mt-10 justify-start w-full backdrop-blur-sm bg-sheer rounded-lg px-16 py-16 transform transition-all duration-1000 delay-500 ${isLoaded ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}>
                {isLoaded && (
                  <>
                    <h1 className="inline-block text-left px-2 text-4xl font-bold mr-16">Hello! Nice to Meet You!</h1>
                    <p className="block text-lg mt-4 mr-16 px-2 text-gray-700 font-serif leading-7">
                      My name is Grace Rabano. I'm currently studying Computer Science at the University of Houston. 
                      I'm discovering my passion for web development and I'm eager to learn more about front-end development and design.
                      Though my focus is web dev, I'm also interested in branching out into other fields. 
                      At my core, I'm a problem solver and my aim is to help solve complex problems with simple solutions, whether that be through code or otherwise.
                    </p>
                    <p className="block text-lg mt-4 mr-16 px-2 text-gray-700 font-serif leading-7">
                      Outside of class, you will find me with my nose buried in a book, folding origami, and petting every cat I see.
                    </p>
                    <p className="block text-lg mt-4 mr-16 px-2 text-gray-700 font-serif leading-7">
                      Thanks for stopping by!
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
