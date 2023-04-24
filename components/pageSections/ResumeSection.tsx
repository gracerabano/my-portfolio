import React from 'react';

interface resumeProps {
  isLoaded: boolean;
}

export default function ResumeSection(props: resumeProps) {
  return(
    <div id="resume" className={`flex flex-col mt-10 justify-start w-full h-full px-12 py-12 backdrop-blur-md bg-sheer rounded-xl transform transition-all duration-1000 delay-500 ${props.isLoaded ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}>
      {props.isLoaded && (
        <>
          <h1 className="inline-block text-left text-4xl font-bold">Resume</h1>
          <div className="grid grid-cols-2  gap-x-8 gap-y-8 mt-6">

            <div className="col-span-1 row-span-1 bg-slate-50 py-4 px-6 rounded-lg w-full">
              <div className="inline-flex items-center justify-center w-full">
                <h2 className=" text-left mt-1  text-xl font-semibold">Education</h2>
                <hr className="w-full h-0.5 my-4 ml-2 mr-2 bg-gradient-to-r from-blossom to-powder-blue border-0"></hr>
              </div>
              <p className="inline-block text-left  text-sm text-hippo mb-1">Graduation: Fall 2023</p>
              <h3 className="inline-block text-left  text-lg leading-6">B.S. Computer Science, <br></br> Mathematics Minor</h3>
              <p className="inline-block mt-1 text-left  text-sm text-gray-700 leading-snug">University of Houston</p>
            </div>

            <div className="col-span-1 row-span-1 bg-slate-50 py-4 px-6 rounded-lg">
              <div className="inline-flex items-center justify-center w-full">
                <h2 className=" text-left  text-xl font-semibold">Experience</h2>
                <hr className="w-full h-0.5 my-4 ml-2 mr-2 bg-gradient-to-r from-blossom to-powder-blue border-0"></hr>
              </div>
              <p className="inline-block text-left  text-sm text-hippo mb-1">Aug 2021 - Apr 2023</p>
              <h3 className="inline-block text-left  text-lg leading-6">Computer Lab Assistant</h3>
              <p className="inline-block mt-1 text-left  text-sm text-gray-700 leading-snug">University of Houston, <br></br> Engineering & Computing Center</p>
            </div>

            <div className="col-span-1 row-span-1 bg-slate-50 py-4 px-6 rounded-lg">
              <div className="inline-flex items-center justify-center w-full">
                <h2 className=" text-left mt-1  text-xl font-semibold leading-tight">Programming Languages</h2>
                <hr className="w-full h-0.5 my-4 ml-2 mr-2 bg-gradient-to-r from-blossom to-powder-blue border-0"></hr>
              </div>
              <div className="flex gap-x-3 gap-y-3 flex-wrap mt-2  py-2">
                <span className="bg-slate-200 rounded-lg px-4 py-2 text-[15px]">Python</span>
                <span className="bg-slate-200 rounded-lg px-4 py-2 text-[15px]">C++</span>
                <span className="bg-slate-200 rounded-lg px-4 py-2 text-[15px]">HTML</span>
                <span className="bg-slate-200 rounded-lg px-4 py-2 text-[15px]">CSS</span>
                <span className="bg-slate-200 rounded-lg px-4 py-2 text-[15px]">JavaScript</span>
                <span className="bg-slate-200 rounded-lg px-4 py-2 text-[15px]">SQL</span>
                <span className="bg-slate-200 rounded-lg px-4 py-2 text-[15px]">TypeScript</span>
                
              </div>
              
            </div>

            <div className="col-span-1 row-span-1 bg-slate-50 py-4 px-6 rounded-lg">
              <div className="inline-flex items-center justify-center w-full">
                <h2 className=" text-left mt-1  text-xl font-semibold leading-tight">Libraries & Frameworks</h2>
                <hr className="w-full h-0.5 my-4 ml-2 mr-2 bg-gradient-to-r from-blossom to-powder-blue border-0"></hr>
              </div>
              
            </div>

          </div>


        </>
      )}
    </div>
  );
}