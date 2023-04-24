import React from 'react'
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import { useRouter } from 'next/router';

// check which page the user is on
// if the user is on the home page, the home button should be highlighted
// if the user is on the about page, the about button should be highlighted
// if the user is on the contact page, the contact button should be highlighted
interface Props {
  onButtonClick: (component: string) => void;
}


const navBar: React.FC<Props> = ({ onButtonClick }) => {
  
  return (
    <nav className="flex flex-col ml-auto items-center justify-center px-4 py-4 w-fit h-20 bg-sheer rounded-lg ">
      <ul className="font-medium flex flex-row items-center justify-center p-2 space-x-6 ">
        <li>
          <button onClick={() => onButtonClick('HomeSection')}>
          <a href="#home" className="py-2 px-4 items-center justify-center flex flex-row text-center bg-slate-50 rounded-md text-gray-600 ease-in duration-200 hover:shadow-sm hover:bg-gradient-to-tr from-blossom to-powder-blue hover:text-white"> 
            <span className="mr-2">
              <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 950 950" height="1.25em" width="1.25em" xmlns="http://www.w3.org/2000/svg">
                <path d="M946.5 505L560.1 118.8l-25.9-25.9a31.5 31.5 0 0 0-44.4 0L77.5 505a63.9 63.9 0 0 0-18.8 46c.4 35.2 29.7 63.3 64.9 63.3h42.5V940h691.8V614.3h43.4c17.1 0 33.2-6.7 45.3-18.8a63.6 63.6 0 0 0 18.7-45.3c0-17-6.7-33.1-18.8-45.2zM568 
                  868H456V664h112v204zm217.9-325.7V868H632V640c0-22.1-17.9-40-40-40H432c-22.1 0-40 17.9-40 40v228H238.1V542.3h-96l370-369.7 23.1 23.1L882 542.3h-96.1z">
                </path>
              </svg>                    
            </span>
            Home 
          </a>
          </button>
        </li>
        <li> 
          <button onClick={() => onButtonClick('ResumeSection')}>
          <a href="#resume" className="py-2 px-4 items-center justify-center flex flex-row text-center bg-slate-50 rounded-md text-gray-600 ease-in duration-200 hover:shadow-sm hover:bg-gradient-to-tr from-blossom to-powder-blue hover:text-white"> 
            <span className="mr-2">
              <svg height="1.25em" width="1.25em" shapeRendering="geometricPrecision" textRendering="geometricPrecision" imageRendering="optimizeQuality" fillRule="evenodd" clipRule="evenodd" viewBox="0 0 846.66 846.66" xmlns="http://www.w3.org/2000/svg" fill="currentColor" strokeWidth={8} stroke="currentColor">
                <g id="Layer_x0020_1">
                  <path d="M187.41 90.79l343.62 0 -14.51 -39.46 -381.58 0 0 663.25 31.83 0 0 -603.15c0,-11.4 9.24,-20.64 20.64,-20.64zm387.56 0l29.03 0c6.2,0 11.76,2.73 15.54,7.05l127.26 125.42c4.1,4.03 6.15,9.35 6.15,14.68l0.06 578.03c0,11.41 -9.25,20.65 -20.65,20.65l-544.95 0c-11.4,0 -20.64,-9.24 -20.64,-20.65l0 
                    -60.1 -52.47 0c-11.4,0 -20.65,-9.24 -20.65,-20.64l0 -704.54c0,-11.41 9.25,-20.65 20.65,-20.65l416.59 0c9.31,0 17.18,6.16 19.75,14.63l24.33 66.12zm-72.78 200.8c-27.15,0 -27.15,-41.29 0,-41.29l107.54 0c27.15,0 27.15,41.29 0,41.29l-107.54 0zm0 163.16c-27.15,0 -27.15,-41.29 0,-41.29l107.54 0c27.15,0 
                    27.15,41.29 0,41.29l-107.54 0zm0 -81.58c-27.15,0 -27.15,-41.29 0,-41.29l107.54 0c27.15,0 27.15,41.29 0,41.29l-107.54 0zm-213.47 285.55c-27.15,0 -27.15,-41.29 0,-41.29l342.33 0c27.16,0 27.16,41.29 0,41.29l-342.33 0zm-80.66 49.56l503.66 0 0 -461.79 -116.1 -114.41 -387.56 0 0 576.2zm503.66 
                    41.29l-503.66 0 0 45.76 503.66 0 0 -45.76zm-362.24 -387.84c49.14,0 89.27,40.13 89.27,89.27l0 40.3c0,11.4 -9.25,20.65 -20.65,20.65l-137.24 0c-11.4,0 -20.64,-9.25 -20.64,-20.65l0 -40.3c0,-49.14 40.12,-89.27 89.26,-89.27zm0 41.29c-26.34,0 -47.97,21.63 -47.97,47.98l0 19.66 95.94 0 0 -19.66c0,-26.35 
                    -21.63,-47.98 -47.97,-47.98zm0 -209.92c41.89,0 75.85,33.96 75.85,75.85 0,41.89 -33.96,75.85 -75.85,75.85 -41.89,0 -75.85,-33.96 -75.85,-75.85 0,-41.89 33.97,-75.85 75.85,-75.85zm0 41.29c-19.09,0 -34.55,15.47 -34.55,34.56 0,19.08 15.46,34.55 34.55,34.55 19.09,0 34.56,-15.46 34.56,-34.55 0,-19.09 
                    -15.47,-34.56 -34.56,-34.56z"/>
                </g>
              </svg>
            </span>                
            Resume 
          </a>
          </button>
        </li>
        <li>
          <a href="#" className="py-2 px-4 items-center justify-center flex flex-row text-center bg-slate-50 rounded-md text-gray-600 ease-in duration-200 hover:shadow-sm hover:bg-gradient-to-tr from-blossom to-powder-blue hover:text-white">
            <span className="mr-2">
              <svg stroke="currentColor" fill="none" strokeWidth="2.5" viewBox="0 0 30 30" height="1.25em" width="1.25em" xmlns="http://www.w3.org/2000/svg">
                <path d="M28,20.6V25c0,1.1-0.9,2-2,2H6c-1.1,0-2-0.9-2-2v-4.4"/>
                <path d="M16,24L16,24c-1.1,0-2-0.9-2-2v-3h4v3C18,23.1,17.1,24,16,24z"/>
                <path d="M14,22H7c-2.2,0-4-1.8-4-4v-8c0-1.1,0.9-2,2-2h22c1.1,0,2,0.9,2,2v8c0,2.2-1.8,4-4,4h-7"/>
                <path d="M20,8h-8V6c0-1.1,0.9-2,2-2h4c1.1,0,2,0.9,2,2V8z"/>
                <line x1="7" x2="7" y1="28" y2="27"/><line x1="25" x2="25" y1="28" y2="27"/>
              </svg>
            </span>
            Projects 
          </a>
        </li>
        <li>
          <a href="#" className="py-2 px-4 items-center justify-center flex flex-row text-center bg-slate-50 rounded-md text-gray-600 ease-in duration-200 hover:shadow-sm hover:bg-gradient-to-tr from-blossom to-powder-blue hover:text-white"> 
            <span className="mr-2">
              <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 22 22" height="1.25em" width="1.25em" xmlns="http://www.w3.org/2000/svg"><g><path fill="none" d="M0 0h24v24H0z"></path>
                <path d="M3 2h16.005C20.107 2 21 2.898 21 3.99v16.02c0 1.099-.893 1.99-1.995 1.99H3V2zm4 2H5v16h2V4zm2 16h10V4H9v16zm2-4a3 3 0 0 1 6 0h-6zm3-4a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm8-6h2v4h-2V6zm0 6h2v4h-2v-4z"></path></g>
              </svg>
            </span>
            Contact 
          </a>
        </li>
      </ul>
    </nav>
  )
}
export default navBar