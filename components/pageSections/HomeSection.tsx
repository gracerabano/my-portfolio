import React from 'react';

interface homeProps {
  isLoaded: boolean;
}

export default function HomeSection(props: homeProps) {
  return(
    <div className={`flex flex-col mt-10 justify-start w-full backdrop-blur-md bg-sheer rounded-xl px-16 py-16 transform transition-all duration-1000 delay-500 ${props.isLoaded ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}>
      {props.isLoaded && (
        <>
          <h1 className="inline-block text-left px-2 text-4xl font-bold mr-16">Hello! Nice to Meet You!</h1>
          <p className="block text-lg mt-4 mr-16 px-2 text-gray-700 font-serif leading-7">
            My name is Grace Rabano. I'm currently studying Computer Science at the University of Houston. 
            I'm discovering my passion for web development and I'm eager to learn more about front-end development and design.
            Though my focus is web dev, I'm also interested in branching out into other fields. 
            At my core, I'm a problem solver and my aim is to solve complex problems with simple and elegant solutions, while learning and helping others on the way.
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
  );
}