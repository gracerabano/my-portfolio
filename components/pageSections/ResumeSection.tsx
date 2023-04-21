import React from 'react';

interface resumeProps {
  isLoaded: boolean;
}

export default function ResumeSection(props: resumeProps) {
  return(
    <div id="resume" className={`flex flex-col mt-10 justify-start w-full backdrop-blur-md bg-sheer rounded-xl px-16 py-16 transform transition-all duration-1000 delay-500 ${props.isLoaded ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}>
      {props.isLoaded && (
        <>
          <h1 className="inline-block text-left px-2 text-4xl font-bold mr-16">Resume</h1>
          <p className="block text-lg mt-4 mr-16 px-2 text-gray-700 font-serif leading-7">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum officiis totam quisquam alias illum incidunt explicabo nemo aliquam excepturi voluptatibus cupiditate reprehenderit voluptatum, fugit animi voluptate dolore sapiente iusto facilis.
          </p>
          <p className="block text-lg mt-4 mr-16 px-2 text-gray-700 font-serif leading-7">
            lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, voluptate.
          </p>
        </>
      )}
    </div>
  );
}