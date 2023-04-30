import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import NavBar from "../components/navbar";
import HomeSection from "../components/pageSections/HomeSection";
import ResumeSection from "../components/pageSections/ResumeSection";
import router from "next/router";

interface Props {}

const Home: React.FC<Props> = () => {
  const [showHomeSection, setShowHomeSection] = useState(true);
  const [showResumeSection, setShowResumeSection] = useState(false);

  // function to toggle between components
  const toggleComponent = (component: string) => {
    if (component === 'HomeSection') {
      setShowHomeSection(true);
      setShowResumeSection(false);
    } else if (component === 'ResumeSection') {
      setShowHomeSection(false);
      setShowResumeSection(true);
    }
  };

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
        <div className="container grid grid-cols-12 gap-10 justify-between mx-auto my-auto p-16 w-4/6">
          {/* left */}
          <div className="col-span-4 sticky">
            <div className={`w-full mt-[120px] relative flex mx-auto items-center justify-center backdrop-blur-md bg-sheer rounded-xl px-16 pb-8 transform transition-all duration-1000 delay-500 ${isLoaded ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"}`}>
            {isLoaded && (
              <div className="flex flex-col items-center justify-top mx-24  ">
                <div className="bg-slate-50 border border-slate-50 rounded-2xl shadow-sm">
                  <img src="/headshot-Cropped.png" alt="avatar" className="h-48 w-48 border-8 border-slate-50 rounded-2xl  transform -mt-[50%]" />
                  <h1 className="text-center pb-2 text-2xl font-semibold">Grace Rabano</h1>
                </div>

                <div className="flex mx-8 mt-4 bg-slate-50 px-4 items-center justify-center py-3 rounded-lg "> 
                  <div className="flex space-x-4 ">
                    <a href="https://www.linkedin.com/in/grace-rabano/" target="_blank" rel="noopener noreferrer" className="hover:animate-wiggle ">
                      <svg fill="currentColor"  height="40px" id="Layer_1" version="1.0" viewBox="0 0 32 32" width="40px" xmlns="http://www.w3.org/2000/svg">
                        <g>
                          <path d="M32,30c0,1.104-0.896,2-2,2H2c-1.104,0-2-0.896-2-2V2c0-1.104,0.896-2,2-2h28c1.104,0,2,0.896,2,2V30z" fill="#4daad1"/><g><rect fill="#FFFFFF" height="14" width="4" x="7" y="11"/>
                          <path d="M20.499,11c-2.791,0-3.271,1.018-3.499,2v-2h-4v14h4v-8c0-1.297,0.703-2,2-2c1.266,0,2,0.688,2,2v8h4v-7    C25,14,24.479,11,20.499,11z" fill="#FFFFFF"/><circle cx="9" cy="8" fill="#FFFFFF" r="2"/></g></g>
                      </svg>
                    </a>
                    <a href="https://github.com/gracerabano" target="_blank" rel="noopener noreferrer" className="hover:animate-wiggle">
                      <svg height="40px" viewBox="0 0 72 72" width="40px" xmlns="http://www.w3.org/2000/svg" shapeRendering="geometricPrecision">
                        <g fill="none" fillRule="evenodd">
                          <path d="M8,72 L64,72 C68.418278,72 72,68.418278 72,64 L72,8 C72,3.581722 68.418278,-8.11624501e-16 64,0 L8,0 C3.581722,8.11624501e-16 -5.41083001e-16,3.581722 0,8 L0,64 C5.41083001e-16,68.418278 3.581722,72 8,72 Z" fill="#7aa6e6"/>
                          <path d="M35.9985,12 C22.746,12 12,22.7870921 12,36.096644 C12,46.7406712 18.876,55.7718301 28.4145,58.9584121 C29.6145,59.1797862 30.0525,58.4358488 30.0525,57.7973276 C30.0525,57.2250681 30.0315,55.7100863 30.0195,53.6996482 C23.343,55.1558981 21.9345,50.4693938 21.9345,50.4693938 C20.844,47.6864054 19.2705,46.9454799 19.2705,46.9454799 C17.091,45.4500754 19.4355,45.4801943 19.4355,45.4801943 C21.843,45.6503662 23.1105,
                          47.9634994 23.1105,47.9634994 C25.2525,51.6455377 28.728,50.5823398 30.096,49.9649018 C30.3135,48.4077535 30.9345,47.3460615 31.62,46.7436831 C26.2905,46.1352808 20.688,44.0691228 20.688,34.8361671 C20.688,32.2052792 21.6225,30.0547881 23.1585,28.3696344 C22.911,27.7597262 22.0875,25.3110578 23.3925,21.9934585 C23.3925,21.9934585 25.4085,21.3459017 29.9925,24.4632101 C31.908,23.9285993 33.96,23.6620468 36.0015,23.6515052 
                          C38.04,23.6620468 40.0935,23.9285993 42.0105,24.4632101 C46.5915,21.3459017 48.603,21.9934585 48.603,21.9934585 C49.9125,25.3110578 49.089,27.7597262 48.8415,28.3696344 C50.3805,30.0547881 51.309,32.2052792 51.309,34.8361671 C51.309,44.0917119 45.6975,46.1292571 40.3515,46.7256117 C41.2125,47.4695491 41.9805,48.9393525 41.9805,51.1877301 C41.9805,54.4089489 41.9505,57.0067059 41.9505,57.7973276 C41.9505,58.4418726 
                          42.3825,59.1918338 43.6005,58.9554002 C53.13,55.7627944 60,46.7376593 60,36.096644 C60,22.7870921 49.254,12 35.9985,12" fill="#FFF"/>
                        </g>
                      </svg>
                    </a>
                    {/* make a <a> tag to GRabano-CS-resume.pdf in public folder */}
                    <a href="GRabano-CS-Resume-4.23.pdf" target="_blank" className="flex justify-center items-center p-1 hover:animate-wiggle rounded-[4px] bg-blossom h-40px w-40px">
                      <svg height="28px" width="28px" shapeRendering="geometricPrecision" textRendering="geometricPrecision" imageRendering="optimizeQuality" fillRule="evenodd" clipRule="evenodd" viewBox="0 0 846.66 846.66" xmlns="http://www.w3.org/2000/svg" stroke="white" strokeWidth={6}>
                        <g id="Layer_x0020_1">
                          <path className="fill-white" d="M187.41 90.79l343.62 0 -14.51 -39.46 -381.58 0 0 663.25 31.83 0 0 -603.15c0,-11.4 9.24,-20.64 20.64,-20.64zm387.56 0l29.03 0c6.2,0 11.76,2.73 15.54,7.05l127.26 125.42c4.1,4.03 6.15,9.35 6.15,14.68l0.06 578.03c0,11.41 -9.25,20.65 -20.65,20.65l-544.95 0c-11.4,0 -20.64,-9.24 -20.64,-20.65l0 -60.1 -52.47 0c-11.4,0 -20.65,-9.24 -20.65,-20.64l0 -704.54c0,-11.41 9.25,-20.65 20.65,-20.65l416.59 0c9.31,0 17.18,6.16 
                            19.75,14.63l24.33 66.12zm-72.78 200.8c-27.15,0 -27.15,-41.29 0,-41.29l107.54 0c27.15,0 27.15,41.29 0,41.29l-107.54 0zm0 163.16c-27.15,0 -27.15,-41.29 0,-41.29l107.54 0c27.15,0 27.15,41.29 0,41.29l-107.54 0zm0 -81.58c-27.15,0 -27.15,-41.29 0,-41.29l107.54 0c27.15,0 27.15,41.29 0,41.29l-107.54 0zm-213.47 285.55c-27.15,0 -27.15,-41.29 0,-41.29l342.33 0c27.16,0 27.16,41.29 0,41.29l-342.33 0zm-80.66 49.56l503.66 0 0 -461.79 -116.1 
                            -114.41 -387.56 0 0 576.2zm503.66 41.29l-503.66 0 0 45.76 503.66 0 0 -45.76zm-362.24 -387.84c49.14,0 89.27,40.13 89.27,89.27l0 40.3c0,11.4 -9.25,20.65 -20.65,20.65l-137.24 0c-11.4,0 -20.64,-9.25 -20.64,-20.65l0 -40.3c0,-49.14 40.12,-89.27 89.26,-89.27zm0 41.29c-26.34,0 -47.97,21.63 -47.97,47.98l0 19.66 95.94 0 0 -19.66c0,-26.35 -21.63,-47.98 -47.97,-47.98zm0 -209.92c41.89,0 75.85,33.96 75.85,75.85 0,41.89 -33.96,75.85 -75.85,75.85 
                            -41.89,0 -75.85,-33.96 -75.85,-75.85 0,-41.89 33.97,-75.85 75.85,-75.85zm0 41.29c-19.09,0 -34.55,15.47 -34.55,34.56 0,19.08 15.46,34.55 34.55,34.55 19.09,0 34.56,-15.46 34.56,-34.55 0,-19.09 -15.47,-34.56 -34.56,-34.56z"/></g>
                      </svg>
                    </a>

                  </div>
                </div>
              </div>
            )} 
            </div>
          </div>
          {/* right */}
          <div className="col-span-8">
              <header className={`w-full transform transition-all duration-1000 delay-500 ${isLoaded ? "translate-y-0 opacity-100" : "-translate-y-10 opacity-0"}`}>
                {isLoaded && (
                  <NavBar onButtonClick={toggleComponent}/>
                )}
              </header>
              <div className={`transform transition-all duration-1000 ${showHomeSection? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'} `}>
                {showHomeSection && <HomeSection isLoaded={isLoaded} />}
              </div>
              <div className={`transform transition-all duration-1000 ${showResumeSection? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'} `}>
                {showResumeSection && <ResumeSection isLoaded={isLoaded} />}
              </div>

          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
